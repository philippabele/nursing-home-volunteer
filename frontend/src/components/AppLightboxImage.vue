<script lang="ts" setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

interface MediaSectionProps {
  src: string
  alt: string
}

defineProps<MediaSectionProps>()

const isLightBoxVisible = ref(false)
</script>

<template>
  <div>
    <vue-easy-lightbox
      scroll-disabled
      move-disabled
      :visible="isLightBoxVisible"
      :imgs="src"
      @hide="isLightBoxVisible = false"
    ></vue-easy-lightbox>
    <img :src="src" class="img-fluid rounded" :alt="alt" @click="isLightBoxVisible = true" />
  </div>
</template>

<style scoped lang="scss">
img {
  cursor: pointer;
}
</style>
