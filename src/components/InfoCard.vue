<script setup lang="ts">
  defineProps<{
    header?: string
    subheader?: string
  }>()
</script>

<template>
  <div class="info-card q-px-lg q-pt-lg">
    <h3 v-if="header" class="info-card-header q-mb-sm">
      {{ header }}
    </h3>
    <h4 v-if="subheader" class="text-h5 q-mb-sm info-card-subheader">
      {{ subheader }}
    </h4>

    <slot/>
  </div>
</template>

<style scoped>
  .info-card {
    background: #e0f7f7;
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;

    transform: translateY(-60px);
    margin-bottom: -60px;

    box-sizing: border-box;

    /* Always reserve space for fixed SocialShare */
    padding-bottom: calc(15vh + 0px);

    /* Always ensure the info card extends to at least the height of the root of the SocialShare ellipse */
    min-height: calc(100dvh - 360px);
  }
  .info-card-header {
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /*text-transform: capitalize; */
  }
  .info-card-subheader {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
  }
</style>
