<script lang="ts" setup>
import { ICarouselSlide } from '../../types/components'
import BButton from './BButton.vue'

interface CarouselProps {
  slides: ICarouselSlide[]
  height?: number
}

withDefaults(defineProps<CarouselProps>(), {
  height: 500,
})
</script>

<template>
  <div
    id="carousel"
    class="carousel slide text-white"
    data-bs-ride="carousel"
    :style="{ height: `${height}px` }"
  >
    <!-- indicators -->
    <div class="carousel-indicators">
      <template v-for="(slide, index) of slides">
        <template v-if="index === 0">
          <button
            :key="slide.id"
            type="button"
            data-bs-target="#carousel"
            :data-bs-slide-to="index"
            class="active"
          ></button>
        </template>

        <template v-else>
          <button
            :key="slide.id"
            type="button"
            data-bs-target="#carousel"
            :data-bs-slide-to="index"
          ></button>
        </template>
      </template>
    </div>

    <!-- slides -->
    <div class="carousel-inner h-100">
      <div
        v-for="(slide, index) of slides"
        :key="slide.id"
        class="carousel-item h-100"
        :class="{ active: index === 0 }"
        :style="{ backgroundImage: slide.imgSrc ? `url(${slide.imgSrc})` : '' }"
      >
        <div
          class="
            h-100
            d-flex
            justify-content-center
            flex-column
            align-items-center
            carousel-content
          "
        >
          <div
            :class="{
              'text-center': slide.align === 'center',
              'text-end': slide.align === 'right',
            }"
          >
            <h2 class="h1">{{ slide.caption }}</h2>
            <p class="mt-0 mb-4 fs-5">{{ slide.text }}</p>

            <BButton
              v-if="slide.btn"
              :href="slide.btn.href"
              :disabled="slide.btn.disabled"
              size="lg"
              >{{ slide.btn.text }}</BButton
            >
          </div>
        </div>
      </div>
    </div>

    <!-- controls (arrows) -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Zurück</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Weiter</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  background: #777777;

  .carousel-item {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    .carousel-content {
      position: absolute;
      left: 15%;
      right: 15%;
      top: 0;
      z-index: 10;
    }
  }
}
</style>
