<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <q-layout view="hHh lpr lfr">
    <TopBar/>
    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>
