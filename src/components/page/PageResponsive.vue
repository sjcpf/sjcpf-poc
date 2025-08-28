<script setup lang="ts">

/**
 * Responsive page with a page scroller. Additional bottom margin is added to the page content to
 * make more room for the scroller. Use the slot for your page content.
 */
</script>

<template>
  <q-page>
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
  max-width: 800px;
}
</style>
