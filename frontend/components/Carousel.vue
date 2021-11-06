<template>
  <div>
    <b-carousel
      :interval="interval"
      :controls="controls && slides.length > 1"
      :indicators="indicators && slides.length > 1"
      background="#777777"
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
        caption-tag="h1"
        :style="{ height: height + 'px' }"
        :class="{
          'slide-left': slide.align === 'left',
          'slide-center': slide.align === 'center',
          'slide-right': slide.align === 'right',
        }"
      >
        <b-button
          v-if="slide.btn"
          :href="slide.btn.external ? slide.btn.to : undefined"
          :to="!slide.btn.external ? slide.btn.to : undefined"
          variant="primary"
          size="lg"
        >
          {{ slide.btn.text }}
        </b-button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { ICarouselSlide } from '~/types/components'

export default defineComponent({
  props: {
    slides: {
      type: Array as PropType<ICarouselSlide[]>,
      required: true,
    },
    /** Interval between slides. The smallest supported sliding interval is 1000ms. Default: 0. */
    interval: {
      type: Number,
      default: 0,
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

<style lang="scss">
/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */
.carousel-caption {
  bottom: 3rem;

  p {
    margin-top: 0;
    margin-bottom: 1rem;

    @media (min-width: 40em) {
      margin-bottom: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.4;
    }
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);

    @media (min-width: 1200px) {
      font-size: 2.5rem;
    }
  }
}

.slide-left {
  .carousel-caption {
    text-align: left;
  }
}

.slide-center {
  .carousel-caption {
    text-align: center;
  }
}

.slide-right {
  .carousel-caption {
    text-align: right;
  }
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  width: 2rem;
  height: 2rem;
}
</style>
