<script setup lang="ts">
import InfoCard from '@/components/InfoCard.vue'
import PageResponsive from '@/components/page/PageResponsive.vue'
import SocialShare from '@/components/SocialShare.vue'
import { activities, activityTypes, appName, parks, trails, type Park } from '@/shared/constants'
import { backIcon, mapPinIcon } from '@/shared/icons'
import { biTree } from '@quasar/extras/bootstrap-icons'
import { evaPhoneCallOutline } from '@quasar/extras/eva-icons'
import { useMeta } from 'quasar'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

type TrailData = { id: number, park: number; count: number; totalLength: number, activityType: string }

useMeta({ title: `${appName} - Park Information` })

const route = useRoute()

const park = ref<Park | undefined>(
  parks.find(p => p.id === Number(route.params.park))
);

const parkFeatures = computed(() => {
  const length = park.value?.features?.length;
  return length && length > 0 ? park.value?.features : undefined
});

const parkActivities = computed(() => {
  return activities.filter(a => a?.park === park.value?.id);
});

const parkTrails = computed(() => {
  return trails.filter(t => t?.park === park.value?.id);
});

const parkEdu = computed(() => {
  const length = park.value?.education?.length;
  return length && length > 0 ? park.value?.education : undefined
});

const parkDocs = computed(() => {
  const length = park.value?.documents?.length;
  return length && length > 0 ? park.value?.documents : undefined
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTrailData(obj: any): obj is TrailData {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.park === 'number' &&
    typeof obj.count === 'number' &&
    typeof obj.totalLength === 'number' &&
    obj.activityType === 'hiking'
  )
}

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
        <h4 class="text-h6 hero-top-bar page-name">{{ 'Park Information' }}</h4>
      </div>
      <q-img
        v-if="park?.image"
        :src="park?.image"
        class="hero-img"
        fit="cover"
        position="center center"
      />
    </div>

    <InfoCard :header="park?.name">
      <!-- Park Information -->
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
        <h5 class="text-subtitle1 q-mb-sm">Unique Features:</h5>
        <ul class="bullet-list">
          <li
            v-for="(feature, i) in parkFeatures"
            :key="i"
            v-html="feature"
          ></li>
        </ul>
        <div v-if="parkActivities.length > 0">
          <h5 class="text-subtitle1 q-mb-sm">Activities:</h5>
          <ul>
            <li v-for="act in parkActivities" :key="act.id" class="q-mb-sm">
              <!--<q-icon :name="" size="20px" class="q-mr-sm" />-->
              <RouterLink
                :to="`/parks/${act.park}/activities/${act.id}`"
                class="text-primary"
              >
                {{ activityTypes[act.activityType]?.label }}
                <span v-if="!isTrailData(act)">
                  <span> {{ act.private ? '(Private)' : ''}}</span>
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
        <div v-if="parkTrails.length > 0">
          <h5 class="text-subtitle1 q-mb-sm">Trails:</h5>
          <ul>
            <li v-for="trail in parkTrails" :key="trail.id" class="q-mb-sm">
              <!--<q-icon :name="" size="20px" class="q-mr-sm" />-->
              <RouterLink
                :to="`/parks/${trail.park}/trails/${trail.id}`"
                class="text-primary"
              >
                {{ trail?.name }}
                <span>({{ trail.length.toFixed(2) }}mi)</span>
              </RouterLink>
            </li>
          </ul>
        </div>
        <div v-if="parkEdu">
          <h5 class="text-subtitle1 q-mb-sm">Educational Programs:</h5>
          <ul>
            <li
              v-for="(edu, i) in parkEdu"
              :key="i"
              v-html="edu"
            ></li>
          </ul>
        </div>
        <div v-if="parkDocs">
          <h5 class="text-subtitle1 q-mb-sm">Additional Documents:</h5>
          <ul>
            <li v-for="doc in parkDocs" :key="doc.label">
              <a :href="doc.url" target="_blank">{{ doc.label }}</a>
            </li>
          </ul>
        </div>
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
.bullet-list {
  margin-top: 10px;
  margin-bottom: 26px;
}
.bullet-point {
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 120% */
}
</style>
