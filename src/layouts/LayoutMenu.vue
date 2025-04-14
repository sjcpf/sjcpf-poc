<script setup lang="ts">
import { RouteNameEnum } from '@/shared/enums'
import { RouterView } from 'vue-router'
</script>

<template>
  <q-layout view="hHh lpr lfr">
    <q-header class="bg-white" elevated>
      <q-img
        src="@/assets/sjcpf-logo.png"
        width="50px"
        height="50px"
        alt="SJCPF Logo"
        @click="$router.push({ name: RouteNameEnum.HOME })"
        class="cursor-pointer"
      />
    </q-header>

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>
