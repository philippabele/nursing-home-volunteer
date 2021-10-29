<template>
  <main class="py-6 container">
    <section class="text-center">
      <h1>Blog ID {{ blogId }}</h1>
      <p class="pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'blog',
  setup() {
    const route = useRoute()
    const blogId = Number.parseInt(route.value.params.id) || -1

    return { blogId }
  },
})
</script>

<style scoped lang="scss"></style>
