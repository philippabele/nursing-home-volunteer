import TheHeader from './components/TheHeader.vue';
<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div>
    <TheHeader />
    <router-view />
  </div>
</template>

<style lang="scss">
@import './styles/index.scss';
</style>
