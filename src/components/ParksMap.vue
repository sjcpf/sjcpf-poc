<template>
  <q-card flat bordered class="full-height">
    <div class="map-container">
      <div class="map-controls">
        <label>
          <input type="checkbox" v-model="terrainEnabled" @change="updateMap" />
          Terrain
        </label>
        <label>
          <input type="checkbox" v-model="contourEnabled" @change="updateMap" />
          Contours
        </label>
      </div>
      <div ref="mapContainer" class="map"/>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { parks, /*trailData, bikeTrailData*/ } from '@/shared/constants'
import { toLatLon } from 'geolocation-utils'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import maplibregl from 'maplibre-gl'
import { withAPIKey } from '@aws/amazon-location-utilities-auth-helper'
import { useGeolocation } from '@/utils/useGeolocation'

import 'maplibre-gl/dist/maplibre-gl.css'

const { location } = useGeolocation()
// const heading = ref<number | null>(null)
let headingMarker: maplibregl.Marker | null = null

const awsRegion = 'us-east-2'
const mapApiKey =
  'v1.public.eyJqdGkiOiI2NmIyMjAzMy02ZGIzLTQ5OTUtYmYwOC03NzEyM2NhODZmNDMifSJ_-DZCmlnk4VJdZX3EB-z_D8BLnHLuJjMI69wj6I_-FoL-mBZnyHapc8S63fnvkk4HYd2mSvU4YRfY3iWaOlyzeA_4_DwTg8-tkdK5GHyoypWrrHXJ2UXjgIffRs-EP2EP7hDm42F0ljhpWDSXDO68ZM7qMM2RwbAbYa-rVkO3ZKmIskgqVbzSL3-Gs_mVGo4nFqvO34fN0gYWSxc5X9yVPGogqN0tc9qFDvmxwPoViNArdYI0hKFoiDBRcKkm53vb4UXh49PcE5SpM56TTtVzAXzuMSc-h6_lkuJbGHr3iKHzREORFm5FYVE1qRJO5_KI8RfNcSaR2A1reR6FCw0.NjAyMWJkZWUtMGMyOS00NmRkLThjZTMtODEyOTkzZTUyMTBi'

const mapContainer = ref<HTMLDivElement | null>(null)
let map: maplibregl.Map | null = null

// Make these reactive so v-model works
const terrainEnabled = ref(false)
const contourEnabled = ref(false)

// Choose map style name based on toggles (per your AWS docs usage)
function getStyleName() {
  return terrainEnabled.value || contourEnabled.value ? 'Standard' : 'Hybrid'
}

function getStyleUrl() {
  const mapStyle = getStyleName()
  const params = new URLSearchParams({ key: mapApiKey })

  // add AWS params exactly like docs
  if (terrainEnabled.value) params.append('terrain', 'Hillshade')
  if (contourEnabled.value) params.append('contour-density', 'Medium')

  return `https://maps.geo.${awsRegion}.amazonaws.com/v2/styles/${mapStyle}/descriptor?${params}`
}

async function removeIfExists(id: string, type: 'layer' | 'source') {
  if (!map) return
  try {
    if (type === 'layer' && map.getLayer(id)) map.removeLayer(id)
    if (type === 'source' && map.getSource(id)) map.removeSource(id)
  } catch (e) {
    // ignore errors from removal races
    console.warn(`removeIfExists(${id}, ${type}) failed:`, e)
  }
}

// WIP Trails Layer
/*async function addTrailsLayer() {
  if (!map) return

  await removeIfExists('trails-layer', 'layer')
  await removeIfExists('parks', 'source')

  const trailLines: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
    type: 'FeatureCollection',
    features: trailData.map(p => {
      const featureCoords = p.geoJSON.
    })
  }
}*/

async function addParksLayer() {
  if (!map) return
  // remove existing to avoid duplicate-id errors
  await removeIfExists('parks-layer', 'layer')
  await removeIfExists('parks', 'source')

  // ensure icon exists
  try {
    if (!map.hasImage('park-icon')) {
      const icon = await map.loadImage('https://cdn-icons-png.flaticon.com/512/5203/5203052.png')
      if (icon) map.addImage('park-icon', icon.data)
    }
  } catch (err) {
    console.warn('Failed to load park icon:', err)
  }

  const parkLocations: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: parks.map(p => {
      const loc = toLatLon(p.location)
      return {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [loc.lon, loc.lat] },
        properties: { id: p.id, name: p.name }
      }
    })
  }

  if (!map.getSource('parks')) {
    map.addSource('parks', {
      type: 'geojson',
      data: parkLocations
    });
  }

  if (!map.getLayer('parks-layer')) {
    map.addLayer({
      id: 'parks-layer',
      type: 'symbol',
      source: 'parks',
      layout: {
        'icon-image': 'park-icon',
        'icon-size': 0.1,
        'icon-allow-overlap': true,
        'text-field': ['get', 'name'],
        'text-font': ['Open Sans Regular'],
        'text-size': 11,
        'text-offset': [0, 1.2],
        'text-anchor': 'top'
      },
      paint: {
        'text-halo-color': '#000',
        'text-halo-width': 1,
        'text-color': '#fff'
      }
    });
  }
}

/** Some iOS Safari builds expose this permission request function. */
interface DeviceOrientationPermission {
  requestPermission?: () => Promise<"granted" | "denied" | "prompt">;
}

/** iOS Safari provides a non-standard compass heading field. */
interface IOSDeviceOrientationEvent extends DeviceOrientationEvent {
  webkitCompassHeading: number;
}

/** Type guard for iOS Safari heading support */
function isIOSDeviceOrientationEvent(
  e: DeviceOrientationEvent
): e is IOSDeviceOrientationEvent {
  return "webkitCompassHeading" in e;
}

/** Type guard for iOS Safari permission API */
function hasDeviceOrientationPermission(
  obj: typeof DeviceOrientationEvent
): obj is typeof DeviceOrientationEvent & DeviceOrientationPermission {
  return typeof (obj as Partial<DeviceOrientationPermission>).requestPermission === "function";
}

// --- Compass setup ------------------------------------------------

function setupCompass() {
   const handler = (e: DeviceOrientationEvent) => {
    let h: number | null = null;

    // iOS Safari heading
    if (isIOSDeviceOrientationEvent(e)) {
      h = e.webkitCompassHeading;
    }

    // Standard deviceorientation alpha
    else if (typeof e.alpha === "number") {
      h = e.alpha;
    }

    if (h !== null && headingMarker) {
      headingMarker.setRotation(h);
    }
  };


  // iOS requires explicit permission (if supported)
  if (hasDeviceOrientationPermission(DeviceOrientationEvent)) {
    DeviceOrientationEvent.requestPermission?.()
      .then((state) => {
        if (state === "granted") {
          window.addEventListener("deviceorientation", handler, true);
        }
      })
      .catch(console.warn);
  } else {
    // Normal browsers
    window.addEventListener("deviceorientation", handler, true);
  }
}

function createHeadingMarker() {
  if (!map) return

  const el = document.createElement("div")
  el.style.width = "24px"
  el.style.height = "24px"
  el.style.border = "8px solid transparent"
  el.style.borderBottom = "14px solid #4287f5" // arrow color
  el.style.borderRadius = "2px"
  el.style.transform = ""
  el.style.transformOrigin = "center"
  el.style.position = "relative"
  el.style.left = "50%"
  el.style.top = "50%"

  headingMarker = new maplibregl.Marker({
    element: el,
    anchor: 'bottom',
    pitchAlignment: "map"
  });
  headingMarker.addTo(map)
  headingMarker.setOffset([0, -25])
}

// Called when user toggles checkboxes
function updateMap() {
  if (!map) return console.error('NO MAP YET!')
  const styleUrl = getStyleUrl()
  map.setStyle(styleUrl)

  // After the style loads, re-add custom sources/layers (parks) so they persist
  map.once('styledata', async () => {
    // Re-add parks (and any other custom overlays you need)
    await addParksLayer()
  })
}

onMounted(async () => {
  await withAPIKey(mapApiKey)

  map = new maplibregl.Map({
    container: mapContainer.value!,
    center: toLatLon(location.value),
    style: getStyleUrl(), // use the dynamic URL generator
    zoom: 11,
    pitch: 0,
    bearing: 0,
    validateStyle: false,
    attributionControl: false
  })

  // Disable rotation/tilt for all control types
  map.dragRotate.disable()
  map.keyboard.disable()
  map.touchZoomRotate.disableRotation()

  map.addControl(new maplibregl.NavigationControl())

  const geo = new maplibregl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true
  })

  map.addControl(geo);

  geo.on("geolocate", (pos) => {
    if (!headingMarker) return;
    headingMarker.setLngLat([pos.longitude, pos.latitude]);
  });

  geo.on("trackuserlocationstart", () => {
    map?.on("render", updateMarkerPosition);
  });

  geo.on("trackuserlocationend", () => {
    map?.off("render", updateMarkerPosition);
  });

  function updateMarkerPosition() {
    const pos = geo._lastKnownPosition;
    if (!pos || !headingMarker) return;
    headingMarker.setLngLat([pos.coords.longitude, pos.coords.latitude]);
  }

  map.on('load', async () => {
    // initial add of parks
    await addParksLayer()
    createHeadingMarker()
  })

  setupCompass()
})

onBeforeUnmount(() => {
  headingMarker?.remove();
  headingMarker = null;
  map?.remove();
});
</script>

<style scoped>
.full-height {
  height: 100vh;
}
.map {
  width: 100%;
  height: 78vh;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  overflow: hidden;
}
.map-controls {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(30, 30, 30, 0.7);
  color: #fff;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 2;
}
.map-controls label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}
</style>
