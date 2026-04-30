<script setup lang="ts">
  import { shareIcon } from '@/shared/icons'
</script>

<template>
  <div class="share-section q-pa-md text-center">
    <h5 class="text-subtitle1 q-mb-sm">
      Share Your Experience
    </h5>

    <div class="row justify-center q-gutter-md">
      <q-btn color="primary" round icon="f" />
      <q-btn color="primary" round icon="i" />
      <q-btn color="primary" round :icon="shareIcon" />
    </div>
  </div>
</template>

<style scoped>
  .share-section {
    background: white;
    bottom: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 15%;
    left: 50%;
    transform: translateX(-50%);
    border-top-left-radius: 100% 100px;
    border-top-right-radius: 100% 100px;
    justify-content: center;
    align-items: center;
  }
</style>
