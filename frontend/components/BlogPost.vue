<template>
  <b-card
    :title="title"
    :img-src="src"
    :img-alt="title"
    img-top
    tag="article"
    class="mb-2"
  >
    <b-card-text>
      {{ excerpt }}
    </b-card-text>

    <b-button :to="`/blog/${postId}`" variant="primary">Weiterlesen</b-button>
  </b-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    src: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    postId: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss"></style>
