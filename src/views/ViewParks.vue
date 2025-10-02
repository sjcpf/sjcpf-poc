<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { RouteNameEnum } from '@/shared/enums'
import { backIcon, searchIcon } from '@/shared/icons'
import { useMeta } from 'quasar'
import { parks } from '@/shared/constants'
import { ref } from 'vue'

useMeta({ title: `${appName} - Parks` })

const search = ref('')
</script>

<template>
  <PageResponsive>
    <div class="hero-top-bar flex justify-left items-center">
      <q-btn flat round :icon="backIcon" @click="$router.back()" />
      <h4 class="text-h6 hero-top-bar page-name">Park List</h4>
    </div>
    <q-input
      class="pill-search"
      rounded filled
      v-model="search">
      <template #prepend>
        <q-icon :name="searchIcon" />
      </template>
    </q-input>
    <div class="centered">
      <button
        class="button no-border"
        @click="$router.push({
          name: RouteNameEnum.NEARBY
        })"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M3.88375 9.75L6.5 8.56375L9.11625 9.75L9.36 9.50625L6.5 2.6L3.64 9.50625L3.88375 9.75ZM6.5 13C5.60083 13 4.75583 12.8294 3.965 12.4881C3.17417 12.1469 2.48625 11.6837 1.90125 11.0987C1.31625 10.5138 0.853125 9.82583 0.511875 9.035C0.170625 8.24417 0 7.39917 0 6.5C0 5.60083 0.170625 4.75583 0.511875 3.965C0.853125 3.17417 1.31625 2.48625 1.90125 1.90125C2.48625 1.31625 3.17417 0.853125 3.965 0.511875C4.75583 0.170625 5.60083 0 6.5 0C7.39917 0 8.24417 0.170625 9.035 0.511875C9.82583 0.853125 10.5138 1.31625 11.0987 1.90125C11.6837 2.48625 12.1469 3.17417 12.4881 3.965C12.8294 4.75583 13 5.60083 13 6.5C13 7.39917 12.8294 8.24417 12.4881 9.035C12.1469 9.82583 11.6837 10.5138 11.0987 11.0987C10.5138 11.6837 9.82583 12.1469 9.035 12.4881C8.24417 12.8294 7.39917 13 6.5 13ZM6.5 11.7C7.95167 11.7 9.18125 11.1962 10.1887 10.1887C11.1962 9.18125 11.7 7.95167 11.7 6.5C11.7 5.04833 11.1962 3.81875 10.1887 2.81125C9.18125 1.80375 7.95167 1.3 6.5 1.3C5.04833 1.3 3.81875 1.80375 2.81125 2.81125C1.80375 3.81875 1.3 5.04833 1.3 6.5C1.3 7.95167 1.80375 9.18125 2.81125 10.1887C3.81875 11.1962 5.04833 11.7 6.5 11.7Z" fill="#1E1E1E" fill-opacity="0.8"/>
        </svg>
        View Nearby Parks
      </button>
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

  .pill-search :deep(.q-field__control) {
    border-radius: 50px;
    padding-left: 20px;
  }

  .button {
    margin-top: 10px;
  }

  .no-border {
    border: none;
    background: none;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
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
