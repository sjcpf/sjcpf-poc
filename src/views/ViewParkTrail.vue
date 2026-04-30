<script setup lang="ts">
import InfoCard from '@/components/InfoCard.vue'
import PageResponsive from '@/components/page/PageResponsive.vue'
import ParksMap from '@/components/ParksMap.vue';
import SocialShare from '@/components/SocialShare.vue'
import { appName, parks, trails, type Park, type ParkTrail } from '@/shared/constants'
import { backIcon, mapPinIcon } from '@/shared/icons'
import { biTree } from '@quasar/extras/bootstrap-icons'
import { evaPhoneCallOutline } from '@quasar/extras/eva-icons'
import { useMeta } from 'quasar'
import { onMounted, ref } from 'vue'
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

onMounted(() => {
  window.scrollTo({ top: 0, left: 0 })
})

</script>

<template>
  <PageResponsive>
    <div>
      <!-- Top Bar -->
      <div class="hero-top-bar flex justify-left items-center">
        <q-btn flat round :icon="backIcon" @click="$router.back()" />
        <h4 class="text-h6 hero-top-bar page-name">{{ 'Trail Information' }}</h4>
      </div>

      <!-- Live Amazon Location Map -->
      <ParksMap
        :trail-id="trail?.id"
        :bike-trail-id="-1"
        :park-id="park?.id"
        class="hero-img"
      />
    </div>

    <InfoCard :header="trail?.name" :subheader="park?.name">
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
    </InfoCard>

    <SocialShare />
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
.contact {
  margin-left: 25px;
}
</style>
