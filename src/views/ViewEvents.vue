<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { useMeta } from 'quasar'

useMeta({ title: `${appName} - Events` })
</script>

<template>
  <PageResponsive>
    <h3>Events</h3>
  </PageResponsive>
</template>
