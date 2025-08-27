<script setup lang="ts">
// import { topOfPageIcon } from '@/shared/icons'

/**
 * Responsive page with a page scroller. Additional bottom margin is added to the page content to
 * make more room for the scroller. Use the slot for your page content.
 */
</script>

<template>
  <q-page padding class="q-pd-md">
    <div class="row justify-center">
      <div class="responsive-container">
        <slot/>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.responsive-container {
  width: 100%;
  padding: 20px;
  max-width: 800px;
}
</style>
