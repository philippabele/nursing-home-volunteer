<template>
  <footer class="container">
    <p class="float-right"><a href="#">Back to top</a></p>
    <p>
      &copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot;
      <a href="#">Terms</a>
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>

<style scoped lang="scss">
footer {
  padding-bottom: 3rem;
}
</style>
