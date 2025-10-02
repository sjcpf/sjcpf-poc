<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { RouteNameEnum } from '@/shared/enums'
import { eventsIcon, homeIcon, parkIcon } from '@/shared/icons'
import { useMeta } from 'quasar'
import { useRoute } from 'vue-router'

useMeta({ title: `${appName} - Park Information` })

const route = useRoute()
const park = route.params.park as string
</script>

<template>
  <PageResponsive>
    <div class="row q-mb-md q-gutter-md">
      <q-btn
        color="primary"
        label="Home"
        :icon="homeIcon"
        size="lg"
        class="col"
        :to="{ name: RouteNameEnum.HOME }"
      />
      <q-btn
        color="primary"
        label="Parks"
        :icon="parkIcon"
        size="lg"
        class="col"
        :to="{ name: RouteNameEnum.PARKS }"
      />
      <q-btn
        color="primary"
        label="Events"
        :icon="eventsIcon"
        size="lg"
        class="col"
        :to="{ name: RouteNameEnum.EVENTS }"
      />
    </div>

    <h3>Park {{ park }}</h3>

    <div>
      <q-btn color="primary" label="Hours" size="lg" class="q-mb-md" />
    </div>

    <div>
      <q-btn color="primary" label="Activites" size="lg" class="q-mb-md" />
    </div>

    <div>
      <q-btn
        color="primary"
        label="Amenities"
        size="lg"
        class="q-mb-md"
        @click="
          $router.push({
            name: RouteNameEnum.PARK_AMENITIES,
            params: { park },
          })
        "
      />
    </div>

    <div>
      <q-btn color="primary" label="Park Map" size="lg" class="q-mb-md" />
    </div>

    <div>
      <q-btn
        color="primary"
        label="Trails"
        size="lg"
        class="q-mb-md"
        @click="
          $router.push({
            name: RouteNameEnum.PARK_TRAILS,
            params: { park },
          })
        "
      />
    </div>
  </PageResponsive>
</template>
