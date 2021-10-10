<template>
  <AppCarousel :slides="slides" />
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import AppCarousel from '~/components/AppCarousel.vue'
import { CarouselSlide } from '~/types/carousel'

export default defineComponent({
  components: { AppCarousel },
  setup() {
    const slides = ref<CarouselSlide[]>([
      {
        id: 0,
        caption: 'Caption',
        text: 'Lorem ipsum dolor sit amet.',
        btn: { text: 'Click me', to: '/test' },
      },
      {
        id: 1,
        caption: 'Caption 2',
        text: 'Lorem ipsum dolor sit amet.',
      },
    ])

    return { slides }
  },
})
</script>
