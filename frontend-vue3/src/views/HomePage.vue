<script lang="ts" setup>
import heroImgUrl from '../assets/hero.jpg'
import AppHero from '../components/AppHero.vue'
import { IButton } from '../types/components'

const heroBtn: IButton = {
  href: '/',
  text: 'Click me',
}
</script>

<template>
  <main>
    <AppHero
      :src="heroImgUrl"
      title="Our product or service"
      subtitle="Lorem ipsum dolor sit amet"
      :btn="heroBtn"
    />
  </main>
</template>

<style scoped lang="scss"></style>
