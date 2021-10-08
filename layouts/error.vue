<template>
  <div>
    <h1 v-if="nuxtError.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { NuxtError } from '@nuxt/types'

export default defineComponent({
  layout: 'error',
  props: {
    error: {
      type: Object as PropType<NuxtError>,
      required: true,
    },
  },
  setup(props) {
    const nuxtError = props.error

    return { nuxtError }
  },
})
</script>
