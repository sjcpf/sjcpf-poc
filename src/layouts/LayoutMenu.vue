<script setup lang="ts">
import { infoIcon, menuIcon } from '@/shared/icons';
import { RouteNameEnum } from '@/shared/enums'
import { RouterView } from 'vue-router'
</script>

<template>
  <q-layout view="hHh lpr lfr">
    <q-toolbar class="bg-white row justify-between q-pt-sm q-pb-sm q-px-none">
      <q-btn
        flat
        :icon="menuIcon"
        aria-label="Menu"
      />
      <q-img
        src="@/assets/sjcpf-logo.png"
        width="39px"
        height="45px"
        flex-shrink="0"
        alt="SJCPF Logo"
        @click="$router.push({ name: RouteNameEnum.HOME })"
        class="cursor-pointer"
      />
      <q-btn
        flat
        :icon="infoIcon"
        aria-label="Info"
        @click="$router.push({ name: RouteNameEnum.ABOUT })"
      />
    </q-toolbar>
    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>
