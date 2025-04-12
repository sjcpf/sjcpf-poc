<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { useMeta } from 'quasar'

useMeta({ title: `${appName} - Park Information` })
</script>

<template>
  <PageResponsive>
    <h3>Park Information</h3>
  </PageResponsive>
</template>
