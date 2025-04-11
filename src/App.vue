<script setup lang="ts">
import { appDescription } from '@/shared/constants'
import { colors, useMeta } from 'quasar'
import { RouterView } from 'vue-router'

/**
 * Do NOT overwrite these specific properties in another useMeta call.
 */
useMeta({
  meta: {
    description: { name: 'description', content: appDescription },
    charset: { charset: 'UTF-8' },
    viewport: {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    themeColor: {
      name: 'theme-color',
      content: `${colors.getPaletteColor('primary')}`,
    },
  },
  link: {
    manifest: {
      rel: 'manifest',
      href: `${import.meta.env.BASE_URL}site.webmanifest`,
    },
    appleTouchIcon: {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: `${import.meta.env.BASE_URL}apple-touch-icon.png`,
    },
    favicon96: {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: `${import.meta.env.BASE_URL}favicon-96x96.png`,
    },
  },
  noscript: {
    default:
      'Your browser does not support JavaScript or has it disabled. Please enable JavaScript in your web browser settings or white-list our domain in your JavaScript blocker for the best experience.',
  },
})
</script>

<template>
  <RouterView />
</template>
