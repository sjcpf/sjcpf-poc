<script setup lang="ts">
import { RouteNameEnum } from '@/shared/enums'
import { homeIcon, infoIcon, parkIcon } from '@/shared/icons'
import { useQuasar } from 'quasar'
import { computed } from 'vue'
import { RouterView } from 'vue-router'

const $q = useQuasar()
const isDesktop = computed(() => $q.screen.gt.xs)
</script>

<template>
  <q-layout view="hHh lpr lfr">
    <q-header bordered>
      <q-tabs
        class="text-caption"
        active-color="yellow"
        outside-arrows
        mobile-arrows
      >
        <q-route-tab
          no-caps
          :icon="homeIcon"
          exact
          :to="{ name: RouteNameEnum.HOME }"
        >
          <template v-if="isDesktop">Home</template>
        </q-route-tab>

        <q-route-tab
          no-caps
          :icon="parkIcon"
          exact
          :to="{ name: RouteNameEnum.PARKS }"
        >
          <template v-if="isDesktop">Parks</template>
        </q-route-tab>

        <q-route-tab
          no-caps
          :icon="infoIcon"
          exact
          :to="{ name: RouteNameEnum.ABOUT }"
        >
          <template v-if="isDesktop">About</template>
        </q-route-tab>
      </q-tabs>
    </q-header>

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>
