<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { RouteNameEnum } from '@/shared/enums'
import { menuIcon } from '@/shared/icons'

const router = useRouter()
const drawerOpen = ref(false)

function goTo(route: { name: RouteNameEnum; params?: Record<string, string> }) {
  drawerOpen.value = false
  router.push(route)
}
</script>

<template>
  <q-btn flat :icon="menuIcon" aria-label="Menu" @click="drawerOpen = true" />

  <q-drawer
    v-model="drawerOpen"
    side="left"
    overlay
    bordered
    behavior="mobile"
    :width="310"
    class="bg-white text-dark"
  >
    <div class="q-pa-md">
      <div class="text-h6 q-mb-md">Menu</div>

      <q-list separator>
        <q-item clickable v-ripple @click="goTo({ name: RouteNameEnum.HOME })">
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="goTo({ name: RouteNameEnum.PARKS })">
          <q-item-section>View Parks List</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="goTo({ name: RouteNameEnum.TRAILS })">
          <q-item-section>View Trails List</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="goTo({ name: RouteNameEnum.DONATE })">
          <q-item-section>Donate to SJC Parks Foundation</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="goTo({ name: RouteNameEnum.RULES })">
          <q-item-section>Park Rules</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="goTo({ name: RouteNameEnum.POLCIIES })">
          <q-item-section>General Policies</q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-drawer>
</template>
