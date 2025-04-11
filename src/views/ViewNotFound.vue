<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { useMeta } from 'quasar'

useMeta({ title: `${appName} - 404 Not Found` })
</script>

<template>
  <PageResponsive>
    <div class="q-mt-md q-ml-md text-h5">Page Not Found</div>
  </PageResponsive>
</template>
