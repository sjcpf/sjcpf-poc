<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { RouteNameEnum } from '@/shared/enums'
import { eventsIcon, homeIcon, parkIcon } from '@/shared/icons'
import { useMeta } from 'quasar'
import { useRoute } from 'vue-router'

useMeta({ title: `${appName} - Park Amenities` })

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

    <h3>Park {{ park }} Amenities</h3>

    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ex nulla
      fugit doloremque quidem ad eos nesciunt nihil facere praesentium, itaque
      ab quaerat, exercitationem fuga? Dicta non nemo amet sapiente.
    </div>
  </PageResponsive>
</template>
