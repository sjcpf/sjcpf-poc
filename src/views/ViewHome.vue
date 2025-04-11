<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { useMeta } from 'quasar'

useMeta({ title: `${appName} - Home` })
</script>

<template>
  <PageResponsive>
    <h1>Home</h1>
  </PageResponsive>
</template>
