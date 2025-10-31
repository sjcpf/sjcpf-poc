<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { activityTypes, appName } from '@/shared/constants'
import { RouteNameEnum } from '@/shared/enums'
import { searchIcon } from '@/shared/icons'
import { useMeta } from 'quasar'
import { ref } from 'vue'

useMeta({ title: `${appName} - Home` })

const search = ref('')

const homeActivityKeys: (keyof typeof activityTypes)[] = [
  'biking',
  'canoeing',
  'discGolf',
  'geocaching',
  'hiking',
  'orienteering',
  'playground',
  'running'
];

</script>

<template>
  <PageResponsive>
    <div class="q-ma-md">
      <div class="text-h4 q-mb-md">Explore St. Joseph <br>County Parks</div>
      <q-input
        class="pill-search"
        rounded filled
        v-model="search">
        <template #prepend>
          <q-icon :name="searchIcon" />
        </template>
      </q-input>
      <div class="centered">
        <button
          class="button no-border"
          @click="$router.push({
            name: RouteNameEnum.NEARBY
          })"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M3.88375 9.75L6.5 8.56375L9.11625 9.75L9.36 9.50625L6.5 2.6L3.64 9.50625L3.88375 9.75ZM6.5 13C5.60083 13 4.75583 12.8294 3.965 12.4881C3.17417 12.1469 2.48625 11.6837 1.90125 11.0987C1.31625 10.5138 0.853125 9.82583 0.511875 9.035C0.170625 8.24417 0 7.39917 0 6.5C0 5.60083 0.170625 4.75583 0.511875 3.965C0.853125 3.17417 1.31625 2.48625 1.90125 1.90125C2.48625 1.31625 3.17417 0.853125 3.965 0.511875C4.75583 0.170625 5.60083 0 6.5 0C7.39917 0 8.24417 0.170625 9.035 0.511875C9.82583 0.853125 10.5138 1.31625 11.0987 1.90125C11.6837 2.48625 12.1469 3.17417 12.4881 3.965C12.8294 4.75583 13 5.60083 13 6.5C13 7.39917 12.8294 8.24417 12.4881 9.035C12.1469 9.82583 11.6837 10.5138 11.0987 11.0987C10.5138 11.6837 9.82583 12.1469 9.035 12.4881C8.24417 12.8294 7.39917 13 6.5 13ZM6.5 11.7C7.95167 11.7 9.18125 11.1962 10.1887 10.1887C11.1962 9.18125 11.7 7.95167 11.7 6.5C11.7 5.04833 11.1962 3.81875 10.1887 2.81125C9.18125 1.80375 7.95167 1.3 6.5 1.3C5.04833 1.3 3.81875 1.80375 2.81125 2.81125C1.80375 3.81875 1.3 5.04833 1.3 6.5C1.3 7.95167 1.80375 9.18125 2.81125 10.1887C3.81875 11.1962 5.04833 11.7 6.5 11.7Z" fill="#1E1E1E" fill-opacity="0.8"/>
          </svg>
          View Nearby Parks
        </button>
      </div>
      <br/>
      <!-- ACTIVITIES AREA -->
      <div>
        <q-item-label class="text-h6 q-mb-lg">Activities</q-item-label>
        <div class="row q-gutter-y-sm q-col-gutter-md">
          <div
            v-for="key in homeActivityKeys"
            :key="key"
            flat
            class="flex flex-center column col-3"
            @click="$router.push({
              name: RouteNameEnum.ACTIVITIES,
              params: { activity: key }
            })"
          >
            <q-img :src="activityTypes[key].img" class="activity-img rounded-borders" />
            <div class="activity-label q-mt-sm">{{ activityTypes[key].label }}</div>
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
      <q-btn
        class="bottom-text-content donate-button"
        color="primary"
        label="Donate Today"
        rounded
        @click="$router.push({ name: RouteNameEnum.DONATE})"
      />
    </div>
  </PageResponsive>
</template>

<style scoped>
  .pill-search :deep(.q-field__control) {
    /* Use a high percentage for perfect rounding */
    border-radius: 50px;
    padding-left: 20px; /* Add some padding to prevent text from touching the edge */
  }

  .button {
    margin-top: 10px;
  }

  .no-border {
    border: none;
    background: none;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
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
