import { ref, onMounted, onUnmounted, computed } from 'vue';
import type { Location } from 'geolocation-utils'; // Assuming you have types installed

export function useGeolocation() {
  const coords = ref<GeolocationCoordinates | null>(null);
  const isGeolocationSupported = 'geolocation' in navigator;
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  let watchId: number | null = null;

  const startWatching = () => {
    if (!isGeolocationSupported) {
      error.value = 'Geolocation is not supported by your browser.';
      return;
    }

    isLoading.value = true;
    watchId = navigator.geolocation.watchPosition(
      (position: GeolocationPosition) => {
        coords.value = position.coords;
        isLoading.value = false;
        error.value = null;
      },
      (geoError: GeolocationPositionError) => {
        isLoading.value = false;
        switch (geoError.code) {
          case geoError.PERMISSION_DENIED:
            error.value = 'User denied the request for Geolocation.';
            break;
          case geoError.POSITION_UNAVAILABLE:
            error.value = 'Location information is unavailable.';
            break;
          case geoError.TIMEOUT:
            error.value = 'The request to get user location timed out.';
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  const stopWatching = () => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      watchId = null;
    }
  };

  onMounted(startWatching);
  onUnmounted(stopWatching);

  // Computed to convert coords into geolocation-utils Location
  const location = computed<Location>(() =>
    coords.value
      ? { lat: coords.value.latitude, lon: coords.value.longitude }
      : { lat: 41.6764, lon: -86.2520}
  );

  console.log("User's current location:", location.value);

  return { location, isLoading, error };
}
