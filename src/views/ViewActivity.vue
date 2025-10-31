<script lang='ts' setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { activityTypes, activities, parks, trails, type ParkTrail } from '@/shared/constants'
import { backIcon, mapPinIcon, shareIcon } from '@/shared/icons';
import PageResponsive from '@/components/page/PageResponsive.vue';

const route = useRoute()

const activityTypeKey = route.params.activity as string;
const activityType = ref(activityTypes[activityTypeKey]);

const filteredActivities = computed(() => {
  if (!activityType.value) return [];
  if (activityTypeKey !== 'hiking') {
    return activities.filter(a => a.activityType === activityTypeKey);
  } else {
    return trails.filter(t => t.activityType === activityTypeKey).reduce((acc: Record<number, ParkTrail>, trail) => {
    if (!acc[trail.park]) acc[trail.park] = trail;
    return acc;
  }, {})
  }
});

const getPark = (parkId: number) => parks.find(p => p.id === parkId);
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
        :src="activityType?.img"
        class="hero-img"
        fit="cover"
        position="center center"
      />
    </div>

    <!-- Info Card -->
    <div class="info-card q-pa-lg">
      <h3 class="text-h5 q-mb-sm info-card-header">{{ activityType?.label }}</h3>
      <!-- List of Parks -->
      <div class="q-pa-lg">
        <h5 class="text-subtitle1 q-mb-sm">Found at:</h5>
        <ul>
          <li v-for="act in filteredActivities" :key="act.id" class="q-mb-sm">
            <q-icon :name="mapPinIcon" size="20px" class="q-mr-sm" />
            <RouterLink
              :to="act.activityType === 'hiking'
                    ? `/parks/${act.park}`
                    : `/parks/${act.park}/activities/${act.id}`"
              class="text-primary"
            >
              {{ getPark(act.park)?.name }}
            </RouterLink>
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
  height: 515px/2;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 100% 100px;
  border-top-right-radius: 100% 100px;
  justify-content: center;
  align-items: center;
}
</style>
