<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { RouteNameEnum } from '@/shared/enums'
import { backIcon } from '@/shared/icons'
import { useMeta } from 'quasar'
import { parks } from '@/shared/constants'

useMeta({ title: `${appName} - Parks` })
</script>

<template>
  <PageResponsive>
    <div class="hero-top-bar flex justify-left items-center">
      <q-btn flat round :icon="backIcon" @click="$router.back()" />
      <h4 class="text-h6 hero-top-bar page-name">Park List</h4>
    </div>
    <div class="q-pa-md">
      <q-img
        v-for="(park, i) in parks"
        :key="park.id"
        :src="park.image"
        class="park-image-button q-mb-md cursor-pointer"
        @click="$router.push({
          name: RouteNameEnum.PARK_INFORMATION,
          params: { park: i },
        })"
      >
        <div class="absolute-bottom text-white text-subtitle2 q-pa-sm">
          <p class="image-button-label">{{park.name}}</p>
          <p class="image-button-city-state">{{park.city}}, {{park.state}}</p>
        </div>
      </q-img>
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
