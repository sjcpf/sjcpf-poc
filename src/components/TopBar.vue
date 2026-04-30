<script setup lang="ts">
import { infoIcon } from '@/shared/icons';
import { RouteNameEnum } from '@/shared/enums'
import HamburgerMenu from '@/components/HamburgerMenu.vue';
</script>

<template>
  <q-header class="bg-white text-dark">
    <q-toolbar class="top-bar q-pt-sm q-pb-sm q-px-none">
      <div class="top-bar-section justify-start">
        <HamburgerMenu />
      </div>

      <div class="top-bar-section justify-center">
        <q-img
          src="@/assets/sjcpf-logo.png"
          width="39px"
          height="45px"
          alt="SJCPF Logo"
          @click="$router.push({ name: RouteNameEnum.HOME })"
          class="cursor-pointer"
        />
      </div>

      <div class="top-bar-section justify-end">
        <q-btn
          flat
          :icon="infoIcon"
          aria-label="Info"
          @click="$router.push({ name: RouteNameEnum.ABOUT })"
        />
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.top-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}

.top-bar-section {
  display: flex;
  align-items: center;
}
</style>
