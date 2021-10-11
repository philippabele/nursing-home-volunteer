<template>
  <Carousel :slides="slides" />
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Carousel from '~/components/Carousel.vue'
import { CarouselSlide } from '~/types/carousel'

export default defineComponent({
  components: { Carousel },
  setup() {
    const slides = ref<CarouselSlide[]>([
      {
        id: 0,
        caption: 'Example headline.',
        text: 'Some representative placeholder content for the first slide of the carousel.',
        btn: { text: 'Sign up today', to: '#' },
        align: 'left',
      },
      {
        id: 1,
        caption: 'Another example headline.',
        text: 'Some representative placeholder content for the second slide of the carousel..',
        btn: { text: 'Learn more', to: '#' },
        align: 'center',
      },
      {
        id: 2,
        caption: 'One more for good measure.',
        text: 'Some representative placeholder content for the third slide of this carousel.',
        btn: { text: 'Browse gallery', to: '#' },
        align: 'right',
      },
    ])

    return { slides }
  },
})
</script>
