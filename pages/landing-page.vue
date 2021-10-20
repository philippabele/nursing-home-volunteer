<template>
  <main>
    <Hero
      :src="require('~/assets/hero.jpg')"
      title="Our product or service"
      subtitle="Lorem ipsum dolor sit amet"
      :btn="heroBtn"
    />

    <section class="py-6 text-center container">
      <h2>Our Offering</h2>
      <p class="pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
    </section>

    <section class="bg-light">
      <div class="py-6 text-center container">
        <h3>Benefits at a glance</h3>
        <p class="pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>

        <div class="mt-5 row">
          <div
            v-for="card of iconCards"
            :key="card.id"
            class="col-lg-4 feature mb-4"
          >
            <IconCard
              :title="card.title"
              :icon="card.icon"
              :description="card.description"
              :btn="card.btn"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-6 text-center container">
      <h2>Testimonials</h2>
      <p class="pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>

      <div class="mt-5">Testimonials...</div>
    </section>

    <section class="bg-light">
      <div class="py-6 text-center container">
        <h3>Our Solution or Process</h3>
        <p class="pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </p>

        <div class="mt-5">Steps...</div>
      </div>
    </section>

    <section class="py-6 text-center container">
      <h2>Our Team or Partners</h2>
      <p class="pt-2">Lorem ipsum dolor sit amet, consetetur</p>

      <div class="mt-5">Team...</div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import { BIconAwardFill } from 'bootstrap-vue'
import Hero from '~/components/Hero.vue'
import {} from '~/types/misc'
import IconCard from '~/components/IconCard.vue'
import { IIconCard, IButton } from '~/types/components'

export default defineComponent({
  components: { Hero, IconCard },
  setup() {
    const heroBtn: IButton = {
      to: '/',
      text: 'Click me',
    }

    const iconCards: IIconCard[] = reactive<IIconCard[]>([
      {
        id: 0,
        icon: BIconAwardFill,
        title: 'Core Value 1',
        description: 'Lorem ipsum dolor sit amet',
        btn: { text: 'Learn More', to: '/' },
      },
      {
        id: 1,
        icon: BIconAwardFill,
        title: 'Core Value 2',
        description: 'Lorem ipsum dolor sit amet',
        btn: { text: 'Learn More', to: '/' },
      },
      {
        id: 2,
        icon: BIconAwardFill,
        title: 'Core Value 3',
        description: 'Lorem ipsum dolor sit amet',
        btn: { text: 'Learn More', to: '/' },
      },
    ])

    return { heroBtn, iconCards }
  },
})
</script>

<style scoped></style>
