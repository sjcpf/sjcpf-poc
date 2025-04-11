<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appDescription, appName } from '@/shared/constants'
import { useMeta } from 'quasar'

useMeta({ title: `${appName} - About` })
</script>

<template>
  <PageResponsive>
    <q-list padding>
      <q-item>
        <q-item-section>
          <q-item-label>
            {{ appDescription }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </PageResponsive>
</template>
