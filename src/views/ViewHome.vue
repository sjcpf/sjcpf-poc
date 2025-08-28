<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { activities, appName } from '@/shared/constants'
import { RouteNameEnum } from '@/shared/enums'
// import { RouteNameEnum } from '@/shared/enums'
import { searchIcon } from '@/shared/icons'
import { useMeta } from 'quasar'
import { ref } from 'vue'

useMeta({ title: `${appName} - Home` })

const search = ref('')
</script>

<template>
  <PageResponsive>
    <div class="q-ma-md">
      <div class="text-h5 q-mb-md">Explore St. Joseph <br>County Parks</div>
      <q-input
        class="pill-search"
        rounded filled
        v-model="search">
        <template #prepend>
          <q-icon :name="searchIcon" />
        </template>
      </q-input>
      <br/>
      <!-- ACTIVITIES AREA -->
      <div>
        <q-item-label class="text-h6 q-pt-lg q-mb-lg">Activities</q-item-label>
        <div class="row q-gutter-y-sm q-col-gutter-md">
          <div
            v-for="activity in activities"
            :key="activity.label"
            flat
            class="flex flex-center column col-3"
            @click="$router.push({
              name: RouteNameEnum.ACTIVITIES,
              params: { activity: activity.name }
            })"
          >
            <q-img :src="activity.img" class="activity-img rounded-borders" />
            <div class="activity-label q-mt-sm">{{ activity.label }}</div>
          </div>
        </div>
      </div>
      <div class="row q-mt-lg q-col-gutter-md q-mb-xl" style="height:236px">
        <!-- Left column spans two rows -->
        <div class="col-6 flex column">
          <q-img
            src="/images/park_list.png"
            ratio="1"
            class="rounded-borders col"
            @click="$router.push({ name: RouteNameEnum.PARKS })"
          >
            <div class="image-button-label absolute-bottom text-white text-subtitle2 q-pa-sm">
              View Park List
            </div>
          </q-img>
        </div>
        <!-- Right column contains two images stacked vertically -->
        <div class="col-6 flex column">
          <q-img
            src="/images/events.png"
            ratio="1"
            class="rounded-borders col"
            @click="$router.push({ name: RouteNameEnum.EVENTS })"
          >
            <div class="image-button-label absolute-bottom text-white text-subtitle2 q-pa-sm">
              Events
            </div>
          </q-img>
          <q-img
            src="/images/seasonal.png"
            ratio="1"
            class="rounded-borders q-mt-md col"
          >
            <div class="image-button-label absolute-bottom bg- text-white text-subtitle2 q-pa-sm">
              Seasonal Activities
            </div>
          </q-img>
        </div>
      </div>
    </div>
    <div class="curved-section flex overflow-hidden">
      <!-- Content within the curved section goes here -->
      <h5 class="bottom-text-content support-heading">Support The Parks</h5>
      <p class="bottom-text-content bottom-paragraph">Help us keep your county parks beautiful, safe, and open for everyone. Your support funds playgrounds, trails, events, and conservation efforts.</p>
      <q-btn class="bottom-text-content donate-button" color="primary" label="Donate Today" rounded />
    </div>
  </PageResponsive>
</template>

<style scoped>
.pill-search :deep(.q-field__control) {
  /* Use a high percentage for perfect rounding */
  border-radius: 50px;
  padding-left: 20px; /* Add some padding to prevent text from touching the edge */
}

.rounded-borders {
  border-radius: 24px;
}

.activity-img {
  aspect-ratio: 1;
  padding: 0;
  padding: 11px;
  overflow: hidden;
}

/* Custom CSS for the label */
.activity-label {
  color: #000;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}

.image-button-label {
  color: #FFF;
  /*background: none !important;*/
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
}

.curved-section {
  flex-direction: column;
  position: absolute;
  width: 100vw;
  height: 515px/2;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 100% 100px;
  border-top-right-radius: 100% 100px;
  background: rgba(194, 243, 239, 0.68);
  justify-content: center;
  align-items: center;
}

.bottom-text-content {
  max-width: 75%;
  word-wrap: break-word;
  color: #000;
}

.support-heading {
  font-size: 18px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 22px;
}

.bottom-paragraph {
  width: 348px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.donate-button {
  width: 224px;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 27px;
  color: #FFF;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}
</style>
