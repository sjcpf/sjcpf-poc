
<script lang='ts' setup>
import { backIcon } from '@/shared/icons';
import PageResponsive from '@/components/page/PageResponsive.vue';
import { RouteNameEnum } from '@/shared/enums';
import { parks } from '@/shared/constants';
import { ref } from 'vue';
import { useGeolocation } from '@/utils/useGeolocation';
import { headingDistanceTo } from 'geolocation-utils';

const { location } = useGeolocation();

const sheetY = ref(0) // drag offset
const expanded = ref(false)

function toggleSheet() {
  expanded.value = !expanded.value
}

function onDragStart(e: TouchEvent | MouseEvent) {
  const startY = 'touches' in e ? e.touches[0].clientY : e.clientY
  const initial = sheetY.value

  function move(ev: TouchEvent | MouseEvent) {
    const currentY = 'touches' in ev ? ev.touches[0].clientY : ev.clientY
    sheetY.value = Math.max(0, initial + (currentY - startY))
  }

  function end() {
    // snap to expanded or collapsed
    expanded.value = sheetY.value < 80
    sheetY.value = 0
    window.removeEventListener('mousemove', move)
    window.removeEventListener('mouseup', end)
    window.removeEventListener('touchmove', move)
    window.removeEventListener('touchend', end)
  }

  window.addEventListener('mousemove', move)
  window.addEventListener('mouseup', end)
  window.addEventListener('touchmove', move)
  window.addEventListener('touchend', end)
}
</script>

<template>
  <PageResponsive>
    <div>
      <!-- Top Bar -->
      <div class="hero-top-bar flex justify-left items-center">
        <q-btn flat round :icon="backIcon" @click="$router.back()" />
        <h4 class="text-h6 hero-top-bar page-name">Nearby Parks</h4>
      </div>
      <!-- Placeholder map image -->
      <q-img
        src="/images/nearbyParks.webp"
        class="hero-img"
        fit="cover"
        position="center center"
      />
    </div>

    <!-- Parks List Card -->
    <div
      class="list-card"
      :class="{ expanded }"
      :style="{ transform: expanded ? 'translateY(0)' : 'translateY(calc(100% - 100px))' }"
    >
      <!-- Handle -->
      <div
        class="handle"
        @mousedown="onDragStart"
        @touchstart="onDragStart"
        @click="toggleSheet"
      ></div>
      <!-- Park List -->
       <div class="park-list">
        <div v-for="(park, key) in parks" :key="key"
          class="park-item"
          @click="$router.push({ name: RouteNameEnum.PARK_INFORMATION, params: { park: key } })"
        >
          <!-- Left Column: Title + Subtitle -->
          <div class="park-left">
            <div class="park-title">{{ park.name }}</div>
            <div class="park-subtitle">{{ park.city ?? 'South Bend, IN' }}</div>
          </div>

          <!-- Right Column: Distance -->
          <div class="park-right">
            <div class="park-distance">
              <div class="distance-value">
                {{ park.location ? `${Math.round(headingDistanceTo(location, park.location)?.distance / 1609 * 100) / 100} mi` : '—' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageResponsive>
</template>

<style scoped>
  .hero-top-bar {
    height: 40px;
    margin: 0;
  }

  .page-name {
    padding-top: 4px;
  }

  .hero-img {
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
  }

  .info-card-header {
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .info-subheader {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .list-card {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
    transition: transform 0.3s ease;
    box-shadow: 0 -2px 8px rgba(0,0,0,0.15);
    max-height: 38vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list-card.expanded {
    transform: translateY(0);
  }

  .handle {
    width: 40px;
    height: 3px;
    background: #000;
    border-radius: 3px;
    margin-top: 18px;
    margin-bottom: 13px;
    cursor: grab;
    flex-shrink: 0; /* prevent squishing */
  }

  .park-list {
    width: 100%;
    overflow-y: auto;
  }

  .park-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 74px;
    margin-top: 6px;
    margin-left: 32px;
    margin-right: 32px;
    margin-bottom: 6px;
    padding: 29px 22px 22px 29px;
    border-radius: 20px;
    background: #347E99;
    font-size: 14px;
    color: #fff;
  }

  .park-left {
    display: flex;
    flex-direction: column;      /* stack title + subtitle vertically */
    justify-content: center;
    color: #FFF;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
  }

  .park-title {
    font-weight: 600;
    font-size: 14px;
    line-height: normal;
  }

  .park-subtitle {
    font-size: 12px;
    opacity: 0.85;
  }

  .park-right {
    display: flex;
    align-items: center;
  }

  .distance-value {
    color: #fff;
    font-weight: 700;
    font-size: 13px;
  }
</style>
