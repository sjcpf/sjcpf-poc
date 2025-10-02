<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue';
import { backIcon } from '@/shared/icons'

// No special logic needed yet
</script>

<template>
  <PageResponsive>
    <div class="hero-top-bar flex justify-left items-center">
      <q-btn flat round :icon="backIcon" @click="$router.back()" />
      <h4 class="text-h6 hero-top-bar page-name">Donate</h4>
    </div>
    <div class="donate-view">
      <iframe
        src="https://secure.qgiv.com/for/stjosephcountyparksfoundation/embed/77408/"
        class="donate-iframe"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </PageResponsive>
</template>

<style scoped>
  .donate-view {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    background: #fff; /* optional */
  }

  .donate-iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
