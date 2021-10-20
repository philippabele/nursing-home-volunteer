<template>
  <main>
    <Hero
      :src="require('~/assets/hero.jpg')"
      title="Our product or service"
      subtitle="Lorem ipsum dolor sit amet"
      :btn="heroBtn"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Hero from '~/components/Hero.vue'
import { IButton } from '~/types/misc'

export default defineComponent({
  components: { Hero },
  setup() {
    const heroBtn: IButton = {
      to: '/',
      text: 'Click me',
    }

    return { heroBtn }
  },
})
</script>

<style scoped></style>
