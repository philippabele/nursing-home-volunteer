<template>
  <footer class="text-white">
    <div class="gradient p-5">
      <div class="container d-flex justify-content-between align-items-center">
        <p>Let's get you started</p>
        <p>Lorem ipsum dolor sit amet</p>
        <b-button class="px-4" variant="primary" to="/">More</b-button>
      </div>
    </div>

    <div class="bg-dark p-5">
      <div class="container">
        <p class="float-right"><a href="#">Back to top</a></p>
        <p>
          &copy; 2017–2021 Company, Inc. &middot;
          <a href="#">Privacy</a> &middot;
          <a href="#">Terms</a>
        </p>
      </div>
    </div>
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
  p {
    margin: 0;
  }

  .gradient {
    font-size: 18px;

    background: #f5af19; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f12711,
      #f5af19
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f12711,
      #f5af19
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}
</style>
