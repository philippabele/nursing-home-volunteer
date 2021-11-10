<script lang="ts" setup>
import bullseyeIconUrl from 'bootstrap-icons/icons/bullseye.svg'
import chatSquareQuoteIconUrl from 'bootstrap-icons/icons/chat-square-quote.svg'
import starFillIconUrl from 'bootstrap-icons/icons/star-fill.svg'
import { reactive } from 'vue'
import heroImgUrl from '../assets/hero.jpg'
import placeholderImgUrl from '../assets/placeholder.jpg'
import AppHero from '../components/AppHero.vue'
import AppIconCard from '../components/AppIconCard.vue'
import AppSteps from '../components/AppSteps.vue'
import AppTeamMember from '../components/AppTeamMember.vue'
import AppTestimonial from '../components/AppTestimonial.vue'
import { IButton, IIconCard, IStep, ITeamMember, ITestimonial } from '../types/components'

const heroBtn: IButton = {
  href: '/',
  text: 'Click me',
}

const iconCards = reactive<IIconCard[]>([
  {
    id: 0,
    icon: bullseyeIconUrl,
    title: 'Core Value 1',
    description: 'Lorem ipsum dolor sit amet',
    btn: { text: 'Learn More', href: '/' },
  },
  {
    id: 1,
    icon: chatSquareQuoteIconUrl,
    title: 'Core Value 2',
    description: 'Lorem ipsum dolor sit amet',
    btn: { text: 'Learn More', href: '/' },
  },
  {
    id: 2,
    icon: starFillIconUrl,
    title: 'Core Value 3',
    description: 'Lorem ipsum dolor sit amet',
    btn: { text: 'Learn More', href: '/' },
  },
])

const testimonials = reactive<ITestimonial[]>([
  {
    id: 0,
    quote: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    name: 'Max Mustermann',
    avatar: placeholderImgUrl,
    position: 'CEO of Company A',
    location: 'Berlin',
  },
  {
    id: 1,
    quote: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    name: 'Maxine Musterfrau',
    avatar: placeholderImgUrl,
    position: 'CEO of Company B',
    location: 'Hamburg',
  },
])

const teamMembers = reactive<ITeamMember[]>([
  {
    id: 0,
    avatar: placeholderImgUrl,
    name: 'Team Member 1',
    description: 'Lorem ipsum dolor sit',
  },
  {
    id: 1,
    avatar: placeholderImgUrl,
    name: 'Team Member 2',
    description: 'Lorem ipsum dolor sit',
  },
  {
    id: 2,
    avatar: placeholderImgUrl,
    name: 'Team Member 3',
    description: 'Lorem ipsum dolor sit',
  },
  {
    id: 3,
    avatar: placeholderImgUrl,
    name: 'Team Member 3',
    description: 'Lorem ipsum dolor sit',
  },
])

const steps = reactive<IStep[]>([
  {
    title: 'First step',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
  },
  {
    title: 'Second step',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
  },
  {
    title: 'Third step',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
  },
])
</script>

<template>
  <main>
    <AppHero
      :src="heroImgUrl"
      title="Our product or service"
      subtitle="Lorem ipsum dolor sit amet"
      :btn="heroBtn"
    />

    <section class="py-6 text-center container">
      <h2>Our Offering</h2>
      <p class="pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum.
      </p>
    </section>

    <section class="bg-light">
      <div class="py-6 text-center container">
        <h3>Benefits at a glance</h3>
        <p class="pt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>

        <div class="mt-5 row">
          <div v-for="card of iconCards" :key="card.id" class="col-lg-4 mb-4">
            <AppIconCard
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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>

      <div class="mt-5 row">
        <div v-for="t of testimonials" :key="t.id" class="col-lg-6 mb-4">
          <AppTestimonial
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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt
        </p>

        <div class="mt-5 steps mx-auto">
          <AppSteps :steps="steps" />
        </div>
      </div>
    </section>

    <section class="py-6 text-center container">
      <h3>Our Team or Partners</h3>
      <p class="pt-2">Lorem ipsum dolor sit amet, consetetur</p>

      <div class="mt-5 row">
        <div v-for="m of teamMembers" :key="m.id" class="col-lg-3 col-md-6 mb-4">
          <AppTeamMember :avatar="m.avatar" :name="m.name" :description="m.description" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.steps {
  max-width: 400px;
}
</style>
