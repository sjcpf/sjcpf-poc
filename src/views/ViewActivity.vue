<script lang='ts' setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'
import InfoCard from '@/components/InfoCard.vue'
import { activityTypes, activities, parks, trails } from '@/shared/constants'
import { backIcon, mapPinIcon } from '@/shared/icons'
import PageResponsive from '@/components/page/PageResponsive.vue'
import SocialShare from '@/components/SocialShare.vue'
import { RouteNameEnum } from '@/shared/enums'

const route = useRoute()
const router = useRouter()

const activityTypeKey = route.params.activity as string
const activityType = ref(activityTypes[activityTypeKey])

type TrailData = { id: number, park: number; count: number; totalLength: number, activityType: string }

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

const filteredActivities = computed(() => {
  if (!activityType.value) return [];
  if (activityTypeKey !== 'hiking') {
    return activities.filter(a => a.activityType === activityTypeKey);
  } else {
    const parkMap = trails
      .filter(t => t.activityType === activityTypeKey)
      .reduce((acc: Record<number, TrailData>, trail) => {
        const parkId = trail.park;
        if (!acc[parkId]) {
          acc[parkId] = { id: trail.id, park: parkId, count: 1, totalLength: trail.length || 0, activityType: 'hiking' };
        } else {
          acc[parkId].count++;
          acc[parkId].totalLength += trail.length || 0;
        }
        return acc;
      }, {});
    return Object.values(parkMap);
  }
})

watch(
  () => filteredActivities.value,
  (acts) => {
    if (acts.length === 1) {
      const act = acts[0]
      router.replace(
        `/parks/${act.park}/activities/${act.id}`
      )
    }
  },
  { immediate: true }
)

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

    <InfoCard :header="activityType?.label">
      <RouterLink
        v-if="activityTypeKey === 'hiking'"
        :to="{ name: RouteNameEnum.TRAILS }"
        class="all-trails-link"
      >
        Full Trail List
      </RouterLink>
      <!-- List of Parks -->
      <div class="q-pa-md">
        <h5 class="text-subtitle1 q-my-none q-mb-sm">Available at:</h5>
        <div v-for="act in filteredActivities" :key="act.id" class="q-mb-sm">
          <q-icon :name="mapPinIcon" size="20px" class="q-mr-sm" />
          <RouterLink
            :to="act.activityType === 'hiking'
                  ? `/parks/${act.park}`
                  : `/parks/${act.park}/activities/${act.id}`"
            class="text-primary"
          >
            {{ getPark(act.park)?.name }}
            <span v-if="isTrailData(act)">
              <span> ({{ act.count }}) ({{ act.totalLength.toFixed(2) }}mi)</span>
            </span>
            <span v-if="!isTrailData(act)">
              <span> {{ act.private ? '(Private)' : ''}}</span>
            </span>
            <span v-if="!isTrailData(act)">
              <span> {{ act.night ? '(Nights)' : ''}}</span>
            </span>
            <span v-if="!isTrailData(act)">
              <span> {{ act.evening ? '(Evenings)' : ''}}</span>
            </span>
          </RouterLink>
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
.all-trails-link {
  display: inline-block;
  font-size: 0.75rem;
  text-decoration: underline;
  color: inherit;
  margin-bottom: 12px;
}
.all-trails-link:hover {
  opacity: 0.8;
}
.contact {
  margin-left: 25px;
}
</style>
