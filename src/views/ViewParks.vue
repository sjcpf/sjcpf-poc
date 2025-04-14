<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { RouteNameEnum } from '@/shared/enums'
import { eventsIcon, homeIcon } from '@/shared/icons'
import { useMeta } from 'quasar'

useMeta({ title: `${appName} - Parks` })
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
        label="Events"
        :icon="eventsIcon"
        size="lg"
        class="col"
        :to="{ name: RouteNameEnum.EVENTS }"
      />
    </div>

    <q-card
      v-for="i in 6"
      :key="i"
      class="q-mb-md cursor-pointer"
      @click="
        $router.push({
          name: RouteNameEnum.PARK_INFORMATION,
          params: { park: i },
        })
      "
    >
      <q-card-section>
        <q-item-label class="text-h6">Park</q-item-label>
      </q-card-section>

      <q-card-section>
        {{ i }}
      </q-card-section>
    </q-card>
  </PageResponsive>
</template>
