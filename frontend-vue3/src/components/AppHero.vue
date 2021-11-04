<script lang="ts" setup>
import { IButton } from '../types/components'
import BButton from './bootstrap/BButton.vue'

interface HeroProps {
  src: string
  title: string
  subtitle?: string
  btn?: IButton
  height?: number
}

withDefaults(defineProps<HeroProps>(), {
  height: 650,
  subtitle: '',
  btn: undefined,
})
</script>

<template>
  <section :style="{ backgroundImage: `url(${src})`, height: `${height}px` }" class="hero">
    <div class="hero__overlay d-flex justify-content-center align-items-center text-center">
      <div class="hero__content">
        <h1>{{ title }}</h1>
        <p v-if="subtitle" class="mt-4">{{ subtitle }}</p>

        <BButton v-if="btn" class="mt-4 px-5" :href="btn.href">
          {{ btn.text }}
        </BButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;

  &__overlay {
    width: 100%;
    height: 100%;

    /* overlay */
    background: rgba(0, 0, 0, 0.4) 100%;
  }

  &__content {
    p {
      font-size: 18px;
    }
  }
}
</style>
