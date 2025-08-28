<script lang='ts' setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { activityData } from '@/shared/constants'
import { backIcon, callIcon, mapPinIcon, shareIcon } from '@/shared/icons';
import PageResponsive from '@/components/page/PageResponsive.vue';

const route = useRoute()
const key = route.params.activity as string;
console.log(activityData[key]);
const activity = ref(activityData[key] || {})
</script>

<template>
  <PageResponsive>
    <div>
      <!-- Top Bar -->
      <div class="hero-top-bar flex justify-left items-center">
        <q-btn flat round :icon="backIcon" @click="$router.back()" />
        <h4 class="text-h6 hero-top-bar page-name">{{ activity?.title }}</h4>
      </div>
      <q-img
        :src="activity.image"
        class="hero-img"
        fit="cover"
        position="center center"
      />
    </div>

    <!-- Info Card -->
    <div class="info-card q-pa-lg">
      <h3 class="text-h5 q-mb-sm info-card-header">{{ activity.title }}</h3>
      <div v-if="activity.phone || activity.location" class="contact q-mb-md">
        <div v-if="activity.phone" class="row items-center q-mb-xs">
          <q-icon :name="callIcon" size="20px" class="q-mr-sm"/>
          <span>{{ activity.phone }}</span>
        </div>
        <div v-if="activity.location" class="row items-center">
          <q-icon :name="mapPinIcon" size="20px" class="q-mr-sm" />
          <span>{{ activity.location }}</span>
        </div>
      </div>

      <!-- Activity Details -->
      <div v-if="activity.details" class="program-details q-mb-md">
        <h5 class="text-subtitle1 q-mb-sm">Program Details</h5>
        <ul>
          <li v-for="(detail, index) in activity.details" :key="index">
            {{ detail }}
          </li>
        </ul>
      </div>

      <!-- Extra Text -->
      <p v-if="activity.description" class="q-mb-md">{{ activity.description }}</p>

      <!-- Useful Documents -->
      <div v-if="activity.documents && activity.documents.length" class="documents q-mb-md">
        <h5 class="text-subtitle1 q-mb-sm">Useful Documents</h5>
        <ul>
          <li v-for="doc in activity.documents" :key="doc.label">
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
  width: 110vw;
  height: 515px/2;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 100% 100px;
  border-top-right-radius: 100% 100px;
  justify-content: center;
  align-items: center;
}
</style>
