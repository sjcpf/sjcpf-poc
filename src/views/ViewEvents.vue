
<script lang='ts' setup>
import { backIcon } from '@/shared/icons';
import PageResponsive from '@/components/page/PageResponsive.vue';

</script>

<template>
  <PageResponsive>
    <div>
      <!-- Top Bar -->
      <div class="hero-top-bar flex justify-left items-center">
        <q-btn flat round :icon="backIcon" @click="$router.back()" />
        <h4 class="text-h6 hero-top-bar page-name">Programs & Events</h4>
      </div>
      <q-img
        src="/public/images/events.png"
        class="hero-img"
        fit="cover"
        position="center center"
      />
    </div>

    <!-- Info Card -->
    <div class="info-card q-pa-lg">
      <h3 class="info-card-header q-mb-sm">Programs & Events</h3>
      <div>
        <h4 class="info-subheader">
          <router-link to="/calendar" class="text-primary">Calendar Of Events</router-link>
        </h4>
        <ul class="bullet-list">
          <li class="bullet-point">For outdoor fun, check out these workshops, nature programs, family activities, and MORE!</li>
        </ul>
      </div>
      <div>
        <h4 class="info-subheader">Nature & History</h4>
        <ul class="bullet-list">
          <li class="bullet-point">Discover our programs for schools and libraries.</li>
        </ul>
      </div>
      <div>
        <h4 class="info-subheader">Activity Guide</h4>
        <ul class="bullet-list">
          <li class="bullet-point">Our Activity Guide is going green!</li>
        </ul>
      </div>
    </div>
  </PageResponsive>
</template>

<style scoped>
.hero-top-bar {
  height: 40px;
  margin: 0;
}
.page-name {
  padding-top: 4px;
}
.hero-img {
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  height: 318px;
  opacity: 0.9;
}
.info-card {
  height: 100%;
  background: #e0f7f7;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  transform: translateY(-60px);
}
.info-card-header {
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 10px;
}
.info-subheader {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-top: 10px;
  margin-bottom: 5px;
}
.bullet-list {
  margin-top: 10px;
  margin-bottom: 26px;
}
.bullet-point {
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 120% */
}
</style>
