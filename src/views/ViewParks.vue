<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { useMeta } from 'quasar'

useMeta({ title: `${appName} - Parks` })
</script>

<template>
  <PageResponsive>
    <h3>Parks</h3>
  </PageResponsive>
</template>
