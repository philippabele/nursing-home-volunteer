<script lang="ts" setup>
import BAvatar from './bootstrap/BAvatar.vue'

interface TestimonialProps {
  quote: string
  name: string
  avatar?: string
  position?: string
  location?: string
}

defineProps<TestimonialProps>()
</script>

<template>
  <div class="text-center">
    <p class="font-italic lead fst-italic">{{ quote }}</p>

    <BAvatar :src="avatar" />
    <p class="mb-4 font-weight-bolder">{{ name }}</p>

    <p v-if="position" class="m-0">{{ position }}</p>
    <p v-if="location" class="m-0">{{ location }}</p>
  </div>
</template>

<style scoped lang="scss">
.lead {
  font-size: 26px;
}
</style>
