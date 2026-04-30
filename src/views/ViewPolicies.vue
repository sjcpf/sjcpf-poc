<script lang="ts" setup>
import PageResponsive from '@/components/page/PageResponsive.vue'
import InfoCard from '@/components/InfoCard.vue'
import SocialShare from '@/components/SocialShare.vue'
import { appName } from '@/shared/constants'
import { useMeta } from 'quasar'
import { backIcon } from '@/shared/icons'

useMeta({ title: `${appName} - General Policies & Rules` })
</script>

<template>
  <PageResponsive>
    <div class="hero-top-bar flex justify-left items-center">
      <q-btn flat round :icon="backIcon" @click="$router.back()" />
      <h4 class="text-h6 hero-top-bar page-name">General Policies</h4>
    </div>
    <div class="no-hero-spacer" />

    <InfoCard header="General Policies & Rules">
      <h5 class="text-title1 q-mb-sm">Public Safety & Enjoyable Experiences</h5>
      <p class="text-body2 q-mb-md">
        It is our intention for our guests to have an enjoyable experience while attending an event at the Robert J. Fischgrund Amphitheater. It is also extremely important for our guests to understand our policies exist for their safety and for the safety of others.
      </p>

      <h5 class="text-title1 q-mb-sm">Items Not Permitted at Venue</h5>
      <p class="text-body2 q-mb-sm">
        The following items are not permitted to be brought onto Amphitheater grounds at any time:
      </p>
      <ul class="policies-list">
        <li>Alcohol</li>
        <li>Drugs</li>
        <li>Fireworks</li>
        <li>Weapons of any type</li>
        <li>Glass containers</li>
        <li>Signs and banners</li>
        <li>Bottles</li>
        <li>Balloons</li>
        <li>Laser pointers</li>
        <li>Animals, with the exception of service dogs</li>
      </ul>

      <h5 class="text-title1 q-mt-lg q-mb-sm">Explanation of Non-Permitted Items</h5>
      <ul class="policies-list">
        <li>Because beer and wine are sold at the Robert J. Fischgrund Amphitheater, Indiana State Liquor Laws prohibit guests from bringing alcohol into the facility.</li>
        <li>Fireworks are not permitted for safety reasons and because they can distract from the performance.</li>
        <li>Weapons are not permitted. This includes some pocketknives and wallet chains. These items must be returned to the guest’s car or disposed of before entering the facility.</li>
        <li>Glass containers are not permitted because they may break or become projectiles and cause serious injury.</li>
        <li>Signs and banners cause sight problems for guests sitting behind them and are flammable.</li>
        <li>Laser pointers can distract from a performance and may make artists uncomfortable because some firearms use lasers as sights.</li>
        <li>Animals can be unpredictable and may cause harm to other guests. They are not permitted in the facility or parking lots, except service dogs.</li>
        <li>Cameras and recorders may not be allowed because of contractual agreements between artists and the facility or promoter. Small non-professional cameras or recorders may sometimes be permitted.</li>
        <li>Umbrellas may or may not be permitted on a show-by-show basis depending on expected attendance, audience demographics, and weather forecast.</li>
      </ul>

      <h5 class="text-title1 q-mt-lg q-mb-sm">General Policies</h5>
      <ul class="policies-list">
        <li>No throwing objects in or near the general seating area.</li>
        <li>No signs, flags, or banners.</li>
        <li>Use restrooms in designated facilities only.</li>
        <li>No resale of tickets on Amphitheater grounds.</li>
        <li>No re-entry.</li>
        <li>No tailgating.</li>
        <li>No open alcoholic beverages in the parking lots.</li>
        <li>No solicitation of any kind on Amphitheater grounds.</li>
        <li>No open fires.</li>
        <li>No physical abuse of any kind, including fighting.</li>
        <li>No smoking in or around the seating area.</li>
        <li>Guests who exhibit a hostile attitude or are visibly intoxicated may be refused admittance.</li>
        <li>Upon entering the facility, guests may be subject to a search. Guests may refuse a search, but may be denied entry.</li>
      </ul>

      <h5 class="text-title1 q-mt-lg q-mb-sm">Explanation of General Policies</h5>
      <ul class="policies-list">
        <li>St. Joseph County Parks are smoke-free. Smoking is not permitted on any St. Joseph County Park property by County Ordinance Number 04-06.</li>
        <li>Re-entry is not permitted to curtail drinking and tailgating in the parking lots. Exceptions require the ticket gate supervisor’s permission and a mark on the ticket.</li>
        <li>Guests are encouraged to enter the facility as soon as gates open. Tailgating is not permitted because it can be dangerous and disrupt traffic flow.</li>
        <li>Open alcoholic beverages are not permitted in parking lots by state law.</li>
        <li>Vending merchandise is not permitted unless performed by a licensed vendor inside the facility.</li>
        <li>Distribution of flyers must be approved by Robert J. Fischgrund Amphitheater management.</li>
        <li>Throwing objects is not permitted for safety reasons.</li>
        <li>Open fires in the parking lot or facility are not permitted.</li>
        <li>No standing or sitting in aisleways, entrances to seating areas, or ticket gates.</li>
        <li>The Amphitheater has disabled parking near the main gate. Appropriate credentials or verbal communication with the parking attendant will suffice.</li>
      </ul>
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
  .policies-list {
    padding-left: 1.25rem;
  }
  .policies-list li {
    margin-bottom: 0.5rem;
  }
</style>
