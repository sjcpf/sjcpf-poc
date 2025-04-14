<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { RouteNameEnum } from '@/shared/enums'
import { homeIcon, parkIcon, searchIcon } from '@/shared/icons'
import { useMeta } from 'quasar'
import { ref } from 'vue'

useMeta({ title: `${appName} - Events` })

const search = ref('')
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

    <q-card v-for="i in 6" :key="i" class="q-mb-md">
      <q-card-section>
        <q-item-label class="text-h6">Event</q-item-label>
      </q-card-section>

      <q-card-section>
        {{ i }}
      </q-card-section>
    </q-card>
  </PageResponsive>
</template>
