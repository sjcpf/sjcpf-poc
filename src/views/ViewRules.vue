<script lang="ts" setup>
import PageResponsive from '@/components/page/PageResponsive.vue'
import InfoCard from '@/components/InfoCard.vue'
import SocialShare from '@/components/SocialShare.vue'
import { appName } from '@/shared/constants'
import { useMeta } from 'quasar'
import { backIcon } from '@/shared/icons'

useMeta({ title: `${appName} - Park Rules` })
</script>

<template>
  <PageResponsive>
    <div class="hero-top-bar flex justify-left items-center">
      <q-btn flat round :icon="backIcon" @click="$router.back()" />
      <h4 class="text-h6 hero-top-bar page-name">Park Rules</h4>
    </div>
    <div class="no-hero-spacer" />

    <InfoCard header="Park Rules" subheader="Summary of County Ordinances">
      <p class="text-body2 q-mb-md q-pt-md">
        “For your continued enjoyment of your St. Joseph County Parks.”
      </p>

      <ul class="rules-list">
        <li>Alcoholic beverages are permitted only in picnic areas; beer and wine must be in non-glass containers. Alcohol sales are prohibited.</li>
        <li>Firearms and weapons are prohibited except as allowed under State Law.</li>
        <li>Smoking is prohibited within park buildings and on park property (County Ordinance 04-06).</li>
        <li>Defacing, damaging, removing, or disturbing park property, equipment, or natural features is prohibited.</li>
        <li>All facility renters must exit the park by <b>10:00 PM EST</b> in accordance with County Park ordinance.</li>
        <li>Glass containers, balloons, egg tosses, confetti, dunk tanks, piñatas, and candles are not permitted in the park.</li>
        <li>Damaging signs, shelters, or other structures is prohibited.</li>
        <li>Littering or dumping trash in the park is unlawful.</li>
        <li>Swimming is prohibited.</li>
        <li>Camping is prohibited.*</li>
        <li>Sledding and inner tubing are allowed only in designated areas.</li>
        <li>Fishing and boat launching are allowed only in designated areas; all state laws apply.</li>
        <li>Soliciting, commercial photography, and sales are prohibited.*</li>
        <li>Disorderly conduct and any dangerous or improper activities are prohibited. Amplified sound must not exceed <b>75 decibels within 150 feet</b> and must not disturb other visitors.</li>
        <li>Maximum vehicle speed is <b>20 mph</b> or as posted.</li>
        <li>Vehicles may be operated only on roadways and must park in designated areas. Service roads may be used to drop off individuals with special needs; vehicles must return to designated parking afterward.</li>
        <li>Entry fees apply on designated days.</li>
        <li>Pets must be on a <b>6-foot leash</b> at all times. Pets, except service dogs, are not allowed in buildings. Owners are responsible for cleaning up after their pets.</li>
        <li>Fires are allowed only in designated containers and areas; ground fires are prohibited.*</li>
        <li>Mushroom hunting and picking wildflowers are prohibited in all St. Joseph County Parks to help protect natural resources.</li>
        <li>Motor-driven airborne devices, including drones, and other airborne human-transportation devices may not be operated on park properties.*</li>
      </ul>

      <p class="text-caption q-mt-md">
        *Allowed only with express written permission from the Parks Executive Director.
      </p>
    </InfoCard>
    <SocialShare/>
  </PageResponsive>
</template>

<style scoped>
  .hero-top-bar {
    height: 40px;
    margin: 0;
    color: black;
    position: relative;
    z-index: 10;
  }
  .page-name {
    padding-top: 4px;
  }
  .no-hero-spacer {
    height: 60px;
  }
  .rules-list {
    padding-left: 1.25rem;
  }
  .rules-list li {
    margin-bottom: 0.5rem;
  }
</style>
