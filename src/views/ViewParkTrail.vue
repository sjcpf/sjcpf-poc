<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName, parks, trails, type Park, type ParkTrail } from '@/shared/constants'
import { backIcon, mapPinIcon, shareIcon } from '@/shared/icons'
import { biTree } from '@quasar/extras/bootstrap-icons'
import { evaPhoneCallOutline } from '@quasar/extras/eva-icons'
import { useMeta } from 'quasar'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

useMeta({ title: `${appName} - Park Information` })

const route = useRoute()

const park = ref<Park | undefined>(
  parks.find(p => p.id === Number(route.params.park))
);

const trail = ref<ParkTrail | undefined>(
  trails.find(
    t => t.id === Number(route.params.trail) && t.park === park.value?.id
  )
);

</script>

<template>
  <PageResponsive>
    <div>
      <!-- Top Bar -->
      <div class="hero-top-bar flex justify-left items-center">
        <q-btn flat round :icon="backIcon" @click="$router.back()" />
        <h4 class="text-h6 hero-top-bar page-name">{{ 'Trail Information' }}</h4>
      </div>
      <q-img
        v-if="park?.image"
        :src="park?.image"
        class="hero-img"
        fit="cover"
        position="center center"
      />
    </div>

    <!-- Info Card -->
    <div class="info-card q-pa-lg">
      <h3 class="text-h5 q-mb-sm info-card-header">{{ trail?.name }}</h3>
      <h4 class="text-h5 q-mb-sm info-card-subheader">at {{ park?.name }}</h4>
      <!-- Trail Information -->
      <div class="q-pa-lg">
        <div>
          <q-icon :name="evaPhoneCallOutline" size="20px" class="q-mr-sm" />
          <span><a :href="'tel:' + park?.phone" target="_blank">{{park?.phone}}</a></span>
        </div>
        <div>
          <q-icon :name="mapPinIcon" size="20px" class="q-mr-sm" />
          <span><a
              :href="'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(park?.address || '')"
              target="_blank"
            >
              {{ park?.address }}
            </a>
          </span>
        </div>
        <div>
          <q-icon :name="biTree" size="20px" class="q-mr-sm" />
          <span>{{ park?.description }}</span>
        </div>
        <h5 class="text-subtitle1 q-mb-sm">Trail Information:</h5>
          <div>Description: {{ trail?.description }}</div>
          <div v-if="trail?.amenities">Amenities: {{ trail?.amenities }}</div>
          <div>Length: {{ trail?.length }}</div>
          <div>Difficulty: {{ trail?.difficulty ?? 'Easy'}}</div>
          <div>Surface: {{ trail?.surface ?? 'Natural' }}</div>
          <div>Accessibility: {{ trail?.accessibility ?? 'Hiking Only' }}</div>
          <div v-if="trail?.notes">Notes: {{ trail?.notes }}</div>
        <h5 v-if="trail?.mapUrl" class="text-subtitle1 q-mb-sm">Additional Documents:</h5>
          <div><a :href="trail?.mapUrl">Map: {{ trail?.mapUrl }}</a></div>
      </div>

      <!-- Social Share -->
      <div class="share-section q-pa-md text-center">
        <h5 class="text-subtitle1 q-mb-sm">Share Your Experience</h5>
        <div class="row justify-center q-gutter-md">
          <q-btn color="primary" round icon="f"></q-btn>
          <q-btn color="primary" round icon="i" />
          <q-btn color="primary" round :icon="shareIcon" />
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
  height: 318px;
  opacity: 0.9;
}
.info-card {
  background: #e0f7f7;
  height: 100%;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  transform: translateY(-60px);
}
.info-card-header {
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
}
.contact {
  margin-left: 25px;
}
.share-section {
  background: white;
  bottom: 0;
  width: 100vw;
  flex-direction: column;
  position: fixed;
  height: 515px/2;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 100% 100px;
  border-top-right-radius: 100% 100px;
  justify-content: center;
  align-items: center;
}
</style>
