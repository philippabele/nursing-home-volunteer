<template>
  <div>
    <b-carousel
      :interval="interval"
      :controls="controls && slides.length > 1"
      :indicators="indicators && slides.length > 1"
      background="#ababab"
      :img-width="width"
      :img-height="height"
    >
      <b-carousel-slide
        v-for="slide of slides"
        :key="slide.id"
        :img-src="slide.imgSrc"
        :text="slide.text"
        :caption="slide.caption"
        :img-blank="!slide.imgSrc"
        :img-alt="slide.imgAlt"
      >
        <b-button
          v-if="slide.btn"
          :href="slide.btn.external ? slide.btn.to : undefined"
          :to="!slide.btn.external ? slide.btn.to : undefined"
          variant="primary"
          >{{ slide.btn.text }}</b-button
        >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { CarouselSlide } from '~/types/carousel'

export default defineComponent({
  props: {
    slides: {
      type: Array as PropType<CarouselSlide[]>,
      required: true,
    },
    /** Interval between slides. The smallest supported sliding interval is 1000ms. Default: 2000ms. */
    interval: {
      type: Number,
      default: 2000,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    indicators: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Number,
      default: 1920,
    },
    height: {
      type: Number,
      default: 500,
    },
  },
})
</script>

<style scoped></style>
