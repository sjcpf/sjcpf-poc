<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { RouteNameEnum } from '@/shared/enums'
import { eventsIcon, parkIcon, searchIcon } from '@/shared/icons'
import { useMeta } from 'quasar'
import { ref } from 'vue'

useMeta({ title: `${appName} - Home` })

const search = ref('')
</script>

<template>
  <PageResponsive>
    <div class="row q-mb-md q-gutter-md">
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

    <q-input
      outlined
      v-model="search"
      label="Search"
      :icon="searchIcon"
      class="q-mb-md"
    >
      <template v-slot:append>
        <q-icon :name="searchIcon" />
      </template>
    </q-input>

    <q-card>
      <q-card-section>
        <q-item-label class="text-h6">Explore By Activity</q-item-label>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>Bike Trails</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>Canoe Rentals</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label> Disc Golf </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label> Geocaching </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label> Hayrides </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label> Hiking Trails </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label> Playgrounds </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label> Ski / Tube / Snowshoe </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </PageResponsive>
</template>
