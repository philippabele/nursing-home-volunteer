<template>
  <div class="text-center">
    <b-avatar class="mb-3 avatar" :src="avatar" size="100%" rounded></b-avatar>
    <p class="mb-0 font-weight-bolder">{{ name }}</p>

    <p class="m-0">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.avatar {
  max-width: 300px;
}
</style>
