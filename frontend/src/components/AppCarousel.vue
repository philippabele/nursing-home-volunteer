<script lang="ts" setup>
import { ICarouselSlide } from '../types/components'

interface CarouselProps {
  slides: ICarouselSlide[]
  interval?: number
  controls?: boolean
  indicators?: boolean
  width?: number
  height?: number
}

withDefaults(defineProps<CarouselProps>(), {
  interval: 0,
  controls: true,
  indicators: true,
  width: 1920,
  height: 500,
})
</script>

<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <!-- indicators -->
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) of slides"
        :key="slide.id"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        aria-current="true"
      ></button>
    </div>

    <!-- slides -->
    <div class="carousel-inner">
      <div
        v-for="(slide, index) of slides"
        :key="slide.id"
        class="carousel-item active"
        :class="{ active: index === 0 }"
      >
        <img v-if="slide.imgSrc" :src="slide.imgSrc" class="d-block w-100" :alt="slide.imgAlt" />
        <div v-else class="d-block w-100 bg-dark img-placeholder"></div>
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ slide.caption }}</h5>
          <p>{{ slide.text }}</p>
        </div>
      </div>
    </div>

    <!-- controls (arrows) -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style lang="scss">
.carousel,
.img-placeholder {
  height: 500px;
}

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
