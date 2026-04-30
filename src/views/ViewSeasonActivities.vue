<script lang='ts' setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { activityTypes, appName, seasons } from '@/shared/constants'
import { backIcon } from '@/shared/icons'
import InfoCard from '@/components/InfoCard.vue'
import PageResponsive from '@/components/page/PageResponsive.vue'
import { RouteNameEnum } from '@/shared/enums'
import { useMeta } from 'quasar'
import SocialShare from '@/components/SocialShare.vue'

const route = useRoute()
useMeta({ title: `${appName} - Seasonal Activities` })

const seasonKey = route.params.season as string
console.log('seasonKey', seasonKey)
const seasonType = ref(seasons.find((s) => s.name === seasonKey))
console.log('seasonType', seasonType.value)

const seasonalActivities = computed(() => {
  if (seasonType?.value?.id === undefined) {
    console.log('No season type or season id found for seasonKey:', seasonKey)
    return []
  }
  const seasonId = seasonType.value.id
  console.log('seasonId', seasonId)
  return Object.entries(activityTypes)
    .filter(([, aT]) => aT.seasons?.includes(seasonId))
})
console.log('seasonalActivities', seasonalActivities.value)

</script>

<template>
  <PageResponsive>
    <div>
      <!-- Top Bar -->
      <div class="hero-top-bar flex justify-left items-center">
        <q-btn flat round :icon="backIcon" @click="$router.back()" />
        <h4 class="text-h6 hero-top-bar page-name">{{ seasonType?.name }} Activities</h4>
      </div>
      <q-img
        v-if="seasonType?.img"
        :src="seasonType?.img"
        class="hero-img"
        fit="cover"
        position="center center"
      />
    </div>

    <InfoCard>
      <!-- List of Activity Types for the Selected Season -->
      <q-img
        v-for="activity in seasonalActivities"
        :key="activity[0]"
        :src="activity[1].img"
        class="park-image-button q-mb-md cursor-pointer"
        @click="$router.push({
          name: RouteNameEnum.ACTIVITIES,
          params: { activity: activity[0] }
        })"
      >
        <div class="absolute-bottom text-white text-subtitle2 q-pa-sm">
          <p class="image-button-label">{{activityTypes[activity[0]].label}}</p>
        </div>
      </q-img>
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
.rounded-borders {
  border-radius: 24px;
}
.activity-img {
  aspect-ratio: 1;
  padding: 0;
  padding: 11px;
  overflow: hidden;
}
.activity-label {
  color: #000;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}
.park-image-button {
  border-radius: 24px;
  height: 159px;
}
.image-button-label {
  margin: 1px;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
}
.image-button-city-state {
  margin: 1px;
  font-size: 10px;
  font-weight: 400;
}
</style>
