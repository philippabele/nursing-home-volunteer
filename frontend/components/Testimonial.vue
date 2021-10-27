<template>
  <div class="text-center">
    <p class="font-italic lead">{{ quote }}</p>
    <b-avatar class="mb-3" :src="avatar" size="140px"></b-avatar>
    <p class="mb-4 font-weight-bolder">{{ name }}</p>

    <p v-if="position" class="m-0">{{ position }}</p>
    <p v-if="location" class="m-0">{{ location }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    quote: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
  },
})
</script>

<style scoped lang="scss">
.lead {
  font-size: 26px;
}
</style>
