<template>
  <main>
    <Hero
      :src="require('~/assets/hero.jpg')"
      title="Our product or service"
      subtitle="Lorem ipsum dolor sit amet"
      :btn="heroBtn"
    />

    <section class="py-5 text-center container">
      <h2>Our Offering</h2>
      <p class="pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
    </section>

    <section class="bg-light">
      <div class="py-5 text-center container">
        <h3>Benefits at a glance</h3>
        <p class="pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>

        <div class="mt-5">Icon cards...</div>
      </div>
    </section>

    <section class="py-5 text-center container">
      <h2>Testimonials</h2>
      <p class="pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>

      <div class="mt-5">Testimonials...</div>
    </section>

    <section class="bg-light">
      <div class="py-5 text-center container">
        <h3>Our Solution or Process</h3>
        <p class="pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </p>

        <div class="mt-5">Steps...</div>
      </div>
    </section>

    <section class="py-5 text-center container">
      <h2>Our Team or Partners</h2>
      <p class="pt-2">Lorem ipsum dolor sit amet, consetetur</p>

      <div class="mt-5">Team...</div>
    </section>
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
