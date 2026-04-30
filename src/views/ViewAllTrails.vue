<script setup lang="ts">
  import InfoCard from '@/components/InfoCard.vue'
  import PageResponsive from '@/components/page/PageResponsive.vue'
  import SocialShare from '@/components/SocialShare.vue'
  import { activityTypes, appName, parks, trails } from '@/shared/constants'
  import { backIcon } from '@/shared/icons'
  import { useMeta } from 'quasar'
  import { computed, onMounted } from 'vue'

  useMeta({ title: `${appName} - All Trails` })

  const groupedTrails = computed(() => {
    return parks
      .map(park => ({
        park,
        trails: trails
          .filter(trail => trail.park === park.id)
          .sort((a, b) => a.length - b.length),
      }))
      .filter(group => group.trails.length > 0)
      .sort((a, b) => a.park.name.localeCompare(b.park.name))
  })

  onMounted(() => {
    window.scrollTo({ top: 0, left: 0 })
  })
</script>

<template>
  <PageResponsive>
    <div>
      <div class="hero-top-bar flex justify-left items-center all-trails-top-bar">
        <q-btn flat round :icon="backIcon" @click="$router.back()" />
        <h4 class="text-h6 hero-top-bar page-name">All Trails</h4>
      </div>

      <q-img
        :src="activityTypes.hiking.img"
        class="hero-img"
        fit="cover"
        position="center center"
      />
    </div>

    <InfoCard header="All Trails">
      <div class="q-pa-sm">
        <div
          v-for="group in groupedTrails"
          :key="group.park.id"
          class="q-mb-lg"
        >
          <h5 class="text-subtitle1 q-mb-sm">
            {{ group.park.name }}
          </h5>

          <ul>
            <li
              v-for="trail in group.trails"
              :key="trail.id"
              class="q-mb-sm"
            >
              <RouterLink
                :to="`/parks/${trail.park}/trails/${trail.id}`"
                class="text-primary"
              >
                {{ trail.name }}
                <span>({{ trail.length.toFixed(2) }}mi)</span>
              </RouterLink>
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
    color: black;
    position: relative;
    z-index: 10;
  }
  .hero-img {
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
    height: 318px;
    opacity: 0.9;
  }
  .page-name {
    padding-top: 4px;
  }
</style>
