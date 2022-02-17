<script lang="ts" setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

interface MediaSectionProps {
  src: string
  alt: string
  circle?: boolean
}

defineProps<MediaSectionProps>()

const isLightBoxVisible = ref(false)
</script>

<template>
  <div>
    <img
      :src="src"
      class="img-fluid"
      :class="{ rounded: !circle, 'rounded-circle': circle }"
      :alt="alt"
      @click="isLightBoxVisible = true"
    />
    <vue-easy-lightbox
      scroll-disabled
      move-disabled
      :visible="isLightBoxVisible"
      :imgs="src"
      @hide="isLightBoxVisible = false"
    ></vue-easy-lightbox>
  </div>
</template>

<style scoped lang="scss">
img {
  cursor: pointer;
}
</style>
