<script lang='ts' setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { activities, activityTypes, parks } from '@/shared/constants'
import type { Activity, ActivityType, Park } from '@/shared/constants';
import { backIcon, mapPinIcon, shareIcon } from '@/shared/icons';
import PageResponsive from '@/components/page/PageResponsive.vue';
import { evaPhoneCallOutline } from '@quasar/extras/eva-icons';

const route = useRoute();

const park = ref<Park | undefined>(
  parks.find(p => p.id === Number(route.params.park))
);

const activity = ref<Activity | undefined>(
  activities.find(
    a => a.id === Number(route.params.activity) && a.park === park.value?.id
  )
);

const activityType = ref<ActivityType | undefined>(
  activity.value ? activityTypes[activity.value.activityType] : undefined
);

console.log("Park:", park?.value);
console.log("Activity:", activity?.value);
console.log("ActivityType:", activityType?.value);
</script>

<template>
  <PageResponsive>
    <div>
      <!-- Top Bar -->
      <div class="hero-top-bar flex justify-left items-center">
        <q-btn flat round :icon="backIcon" @click="$router.back()" />
        <h4 class="text-h6 hero-top-bar page-name">{{ activityType?.label }}</h4>
      </div>
      <q-img
        v-if="activityType"
        :src="activity?.img ?? activityType?.img"
        class="hero-img"
        fit="cover"
        position="center center"
      />
    </div>

    <!-- Info Card -->
    <div class="info-card q-pa-lg">
      <h3 class="text-h5 q-mb-sm info-card-header">{{ activityType?.label }} at</h3>
      <h4 class="text-h5 q-mb-sm info-card-subheader">{{ park?.name }}</h4>
      <div v-if="activity?.phone || park?.address" class="contact q-mb-md">
        <div v-if="park?.phone" class="row items-center q-mb-xs">
          <q-icon :name="evaPhoneCallOutline" size="20px" class="q-mr-sm" />
          <span><a :href="'tel:' + park?.phone" target="_blank">{{park?.phone}}</a></span>
        </div>
        <div v-if="park?.address" class="row items-center">
          <q-icon :name="mapPinIcon" size="20px" class="q-mr-sm" />
          <span><a
              :href="'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(park?.address || '')"
              target="_blank"
            >
              {{ park?.address }}
            </a>
          </span>
        </div>
      </div>

      <!-- Activity Details -->
      <div v-if="activity?.details" class="program-details q-mb-md">
        <h5 class="text-subtitle1 q-mb-sm">Program Details</h5>
        <ul>
          <li v-for="(detail, index) in activity?.details" :key="index">
            {{ detail }}
          </li>
        </ul>
      </div>

      <!-- Extra Text -->
      <p v-if="activity?.description" class="q-mb-md">{{ activity?.description }}</p>

      <!-- Useful Documents -->
      <div v-if="activity?.documents && activity?.documents?.length" class="documents q-mb-md">
        <h5 class="text-subtitle1 q-mb-sm">Useful Documents</h5>
        <ul>
          <li v-for="doc in activity?.documents" :key="doc.label">
            <a :href="doc.url" target="_blank">{{ doc.label }}</a>
          </li>
        </ul>
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
  /*text-transform: capitalize;*/
}
.info-card-subheader {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 26px;
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
