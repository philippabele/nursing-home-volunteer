<script lang="ts" setup>
import AppLightboxImage from './AppLightboxImage.vue'

interface ImageBlockProps {
  src: string
  title: string
  titleMuted?: string
  description?: string
  imagePos?: 'left' | 'right'
}

withDefaults(defineProps<ImageBlockProps>(), {
  titleMuted: '',
  description: '',
  imagePos: 'right',
})
</script>

<template>
  <div class="row" :class="{ 'flex-row-reverse': imagePos === 'left' }">
    <div class="col-md-7">
      <h2>
        {{ title }}
        <span v-if="titleMuted" class="text-muted">{{ titleMuted }}</span>
      </h2>
      <p v-if="description">{{ description }}</p>
    </div>

    <div class="col-md-5 mt-4 mt-md-0">
      <AppLightboxImage :src="src" alt="Image" class="mx-auto" />
    </div>
  </div>
</template>

<style scoped lang="scss">
p {
  font-size: 1.25rem;
  font-weight: 300;
}

h2 {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;

  @media (min-width: 40em) {
    font-size: 50px;
  }

  @media (min-width: 62em) {
    margin-top: 7rem;
  }
}
</style>
