<template>
  <q-card flat bordered class="full-height">
    <div ref="mapContainer" class="map"/>
  </q-card>
</template>

<script setup lang="ts">
import { parks } from '@/shared/constants'
import { toLatLon } from 'geolocation-utils'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import maplibregl from 'maplibre-gl'
import { withAPIKey } from '@aws/amazon-location-utilities-auth-helper'
import { useGeolocation } from '@/utils/useGeolocation';

import 'maplibre-gl/dist/maplibre-gl.css'

const region = 'us-east-2'
const mapApiKey = 'v1.public.eyJqdGkiOiI2NmIyMjAzMy02ZGIzLTQ5OTUtYmYwOC03NzEyM2NhODZmNDMifSJ_-DZCmlnk4VJdZX3EB-z_D8BLnHLuJjMI69wj6I_-FoL-mBZnyHapc8S63fnvkk4HYd2mSvU4YRfY3iWaOlyzeA_4_DwTg8-tkdK5GHyoypWrrHXJ2UXjgIffRs-EP2EP7hDm42F0ljhpWDSXDO68ZM7qMM2RwbAbYa-rVkO3ZKmIskgqVbzSL3-Gs_mVGo4nFqvO34fN0gYWSxc5X9yVPGogqN0tc9qFDvmxwPoViNArdYI0hKFoiDBRcKkm53vb4UXh49PcE5SpM56TTtVzAXzuMSc-h6_lkuJbGHr3iKHzREORFm5FYVE1qRJO5_KI8RfNcSaR2A1reR6FCw0.NjAyMWJkZWUtMGMyOS00NmRkLThjZTMtODEyOTkzZTUyMTBi'

const { location } = useGeolocation();
const mapContainer = ref<HTMLDivElement | null>(null)
let map: maplibregl.Map | null = null

onMounted(async () => {
  await withAPIKey(mapApiKey) // still needed for tile access

  const awsMapUrl = `https://maps.geo.${region}.amazonaws.com/v2/styles/Standard/descriptor?key=${mapApiKey}`
  const satMapUrl = 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'

  map = new maplibregl.Map({
    container: mapContainer.value!,
    center: toLatLon(location.value),
    zoom: 11,
    pitch: 0,
    bearing: 0,
    validateStyle: false
  })

  map.setStyle(awsMapUrl, {
    transformStyle: (previousStyle, nextStyle) => {
      nextStyle.projection = {type: 'globe'};
      nextStyle.sources = {
        ...nextStyle.sources,
        satelliteSource: {
          type: 'raster',
          tiles: [
            satMapUrl
          ],
          tileSize: 256
        },
        /*terrainSource: {
          type: 'raster-dem',
          url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
          tileSize: 256
        },
        hillshadeSource: {
          type: 'raster-dem',
          url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
          tileSize: 256
        }*/
      }
      /*nextStyle.terrain = {
        source: 'terrainSource',
        exaggeration: 1
      }*/

      /*nextStyle.sky = {
        'atmosphere-blend': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0, 1,
          2, 0
        ],
      }*/

      /*nextStyle.layers.push({
        id: 'hills',
        type: 'hillshade',
        source: 'hillshadeSource',
        layout: { visibility: 'visible' },
        paint: { 'hillshade-shadow-color': '#473B24' }
      })*/

      const firstNonFillLayer = nextStyle.layers.find(layer => layer.type !== 'fill' && layer.type !== 'background');
      if (firstNonFillLayer) {
        nextStyle.layers.splice(nextStyle.layers.indexOf(firstNonFillLayer), 0, {
          id: 'satellite',
          type: 'raster',
          source: 'satelliteSource',
          layout: { visibility: 'visible' },
          paint: { 'raster-opacity': 1 }
        });
      }

      return nextStyle;
    }
  })

  // Disable rotation/tilt for all control types
  map.dragRotate.disable();
  map.keyboard.disable();
  map.touchZoomRotate.disableRotation();

  map.addControl(new maplibregl.NavigationControl())

  map.on('load', async () => {
    // Load your marker icon (change URL or use a local asset)
    if (map) {
      const icon = await map.loadImage('https://cdn-icons-png.flaticon.com/512/5203/5203052.png')
      map.addImage('park-icon', icon.data)

      // Convert parks array → GeoJSON FeatureCollection
      const parkFeatures = {
        type: 'FeatureCollection',
        features: parks.map(p => {
          const loc = toLatLon(p.location)
          console.log('Park location:', p.name, loc)
          return {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [loc.lon, loc.lat]
            },
            properties: {
              id: p.id,
              name: p.name
            }
          }
        })
      }

      map.addSource('parks', {
        type: 'geojson',
        data: parkFeatures
      })

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
      })
    }
  })
})

onBeforeUnmount(() => {
  if (map) map.remove()
})
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
</style>
