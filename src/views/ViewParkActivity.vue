<script lang='ts' setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { activities, activityTypes, parks } from '@/shared/constants'
import type { Activity, ActivityType, Park } from '@/shared/constants'
import { backIcon, mapPinIcon } from '@/shared/icons'
import InfoCard from '@/components/InfoCard.vue'
import PageResponsive from '@/components/page/PageResponsive.vue'
import SocialShare from '@/components/SocialShare.vue'
import { evaPhoneCallOutline } from '@quasar/extras/eva-icons'

const route = useRoute()

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

console.log("Park:", park?.value)
console.log("Activity:", activity?.value)
console.log("ActivityType:", activityType?.value)
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

    <InfoCard
      :header="(activity?.private ? 'Private ' : '') + (activity?.night ? 'Night ' :  activity?.evening ? 'Evening ' : '') + (activity?.labelOverride ?? activityType?.label) + ' at'"
      :subheader="park?.name"
    >
      <div class="q-mb-lg"></div>
      <div v-if="activity?.phone || park?.address" class="contact q-mb-md">
        <div v-if="park?.phone" class="row items-center q-mb-xs">
          <q-icon :name="evaPhoneCallOutline" size="20px" class="q-mr-sm" />
          <span><a :href="'tel:' + park?.phone" target="_blank">{{park?.phone}}</a></span>
        </div>
        <div v-if="park?.address" class="row items-center">
          <span>
            <q-icon :name="mapPinIcon" size="20px" class="q-mr-sm" />
            <a
              :href="'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(park?.address || '')"
              target="_blank"
            >
              {{ park?.address }}
            </a>
          </span>
        </div>
      </div>

      <!-- Dates / Times -->
      <div v-if="activity?.dates || activity?.times" class="program-details q-mb-md">
        <h5 class="text-subtitle1 q-mb-sm">Dates & Times</h5>

        <ul>
          <li v-for="(date, index) in activity?.dates" :key="`date-${index}`">
            <template v-if="typeof date === 'string'">
              {{ date }}
            </template>
            <template v-else-if="'start' in date && 'end' in date">
              {{ date.start }} - {{ date.end }}
            </template>
            <template v-else-if="Array.isArray(date)">
              {{ date.join(', ') }}
            </template>
          </li>

          <li
            v-for="(timeBlock, index) in Array.isArray(activity?.times)
              ? activity.times
              : activity?.times
                ? [activity.times]
                : []"
            :key="`time-${index}`"
          >
            <template v-if="timeBlock && 'day' in timeBlock">
              {{ timeBlock.day }}:
            </template>

            <template v-else-if="timeBlock && 'days' in timeBlock">
              {{ Array.isArray(timeBlock.days)
                ? timeBlock.days.join(', ')
                : timeBlock.days }}:
            </template>

            <template v-if="typeof timeBlock.times === 'string'">
              {{ timeBlock.times }}
            </template>

            <template v-else-if="Array.isArray(timeBlock.times)">
              {{ timeBlock.times.join(', ') }}
            </template>

            <template
              v-else-if="
                typeof timeBlock.times === 'object' &&
                'start' in timeBlock.times &&
                'end' in timeBlock.times
              "
            >
              {{ timeBlock.times.start }} - {{ timeBlock.times.end }}
            </template>
          </li>
        </ul>
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
