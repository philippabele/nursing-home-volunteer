<script setup lang="ts">
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div>
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<style lang="scss">
@import './styles/index.scss';
</style>
