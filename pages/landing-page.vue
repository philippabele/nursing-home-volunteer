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
          <div v-for="card of iconCards" :key="card.id" class="col-lg-4 mb-4">
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
      <h3>Testimonials</h3>
      <p class="pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>

      <div class="mt-5 row">
        <div v-for="t of testimonials" :key="t.id" class="col-lg-6 mb-4">
          <Testimonial
            :quote="t.quote"
            :avatar="t.avatar"
            :name="t.name"
            :position="t.position"
            :location="t.location"
          />
        </div>
      </div>
    </section>

    <section class="bg-light">
      <div class="py-6 text-center container">
        <h3>Our Solution or Process</h3>
        <p class="pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt
        </p>

        <div class="mt-5 steps mx-auto">
          <Steps :steps="steps" />
        </div>
      </div>
    </section>

    <section class="py-6 text-center container">
      <h3>Our Team or Partners</h3>
      <p class="pt-2">Lorem ipsum dolor sit amet, consetetur</p>

      <div class="mt-5 row">
        <div
          v-for="m of teamMembers"
          :key="m.id"
          class="col-lg-3 col-md-6 mb-4"
        >
          <TeamMeber
            :avatar="m.avatar"
            :name="m.name"
            :description="m.description"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import {
  BIconChatSquareQuote,
  BIconStarFill,
  BIconBullseye,
} from 'bootstrap-vue'
import Hero from '~/components/Hero.vue'
import {} from '~/types/misc'
import IconCard from '~/components/IconCard.vue'
import {
  IIconCard,
  IButton,
  ITestimonial,
  ITeamMember,
  IStep,
} from '~/types/components'
import Testimonial from '~/components/Testimonial.vue'
import TeamMeber from '~/components/TeamMeber.vue'
import Steps from '~/components/Steps.vue'

export default defineComponent({
  components: { Hero, IconCard, Testimonial, TeamMeber, Steps },
  setup() {
    const heroBtn: IButton = {
      to: '/',
      text: 'Click me',
    }

    const iconCards = reactive<IIconCard[]>([
      {
        id: 0,
        icon: BIconBullseye,
        title: 'Core Value 1',
        description: 'Lorem ipsum dolor sit amet',
        btn: { text: 'Learn More', to: '/' },
      },
      {
        id: 1,
        icon: BIconChatSquareQuote,
        title: 'Core Value 2',
        description: 'Lorem ipsum dolor sit amet',
        btn: { text: 'Learn More', to: '/' },
      },
      {
        id: 2,
        icon: BIconStarFill,
        title: 'Core Value 3',
        description: 'Lorem ipsum dolor sit amet',
        btn: { text: 'Learn More', to: '/' },
      },
    ])

    const testimonials = reactive<ITestimonial[]>([
      {
        id: 0,
        quote:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        name: 'Max Mustermann',
        avatar: require('~/assets/placeholder.jpg'),
        position: 'CEO of Company A',
        location: 'Berlin',
      },
      {
        id: 1,
        quote:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        name: 'Maxine Musterfrau',
        avatar: require('~/assets/placeholder.jpg'),
        position: 'CEO of Company B',
        location: 'Hamburg',
      },
    ])

    const teamMembers = reactive<ITeamMember[]>([
      {
        id: 0,
        avatar: require('~/assets/placeholder.jpg'),
        name: 'Team Member 1',
        description: 'Lorem ipsum dolor sit',
      },
      {
        id: 1,
        avatar: require('~/assets/placeholder.jpg'),
        name: 'Team Member 2',
        description: 'Lorem ipsum dolor sit',
      },
      {
        id: 2,
        avatar: require('~/assets/placeholder.jpg'),
        name: 'Team Member 3',
        description: 'Lorem ipsum dolor sit',
      },
      {
        id: 3,
        avatar: require('~/assets/placeholder.jpg'),
        name: 'Team Member 3',
        description: 'Lorem ipsum dolor sit',
      },
    ])

    const steps = reactive<IStep[]>([
      {
        title: 'First step',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
      },
      {
        title: 'Second step',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
      },
      {
        title: 'Third step',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
      },
    ])

    return { heroBtn, iconCards, testimonials, teamMembers, steps }
  },
})
</script>

<style scoped lang="scss">
.steps {
  max-width: 400px;
}
</style>
