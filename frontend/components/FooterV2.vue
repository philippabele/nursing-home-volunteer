<template>
  <footer class="text-white text-center">
    <div class="gradient p-5">
      <div class="container">
        <div class="row align-items-center">
          <p class="col-md-4 mb-3 mb-md-0">Let's get you started</p>

          <p class="col-md-4 mb-3 mb-md-0">Lorem ipsum dolor sit amet</p>
          <div class="col-md-4">
            <b-button class="px-4" variant="primary" to="#">More</b-button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark p-5">
      <div class="container">
        <b-navbar type="dark" variant="transparent">
          <b-navbar-nav class="mx-auto">
            <b-nav-item
              v-for="item of navItems"
              :key="item.to"
              :to="item.to"
              :active="route.path === item.to"
            >
              {{ item.title }}
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar>

        <div class="h4 pb-3 pt-5">
          <b-link href="/" class="text-white">
            <BIconTwitter />
          </b-link>
          <b-link href="/" class="text-white ml-3">
            <BIconFacebook />
          </b-link>
          <b-link href="/" class="text-white ml-3">
            <BIconInstagram />
          </b-link>
        </div>

        <p>Lorem ipsum dolor sit</p>
        <p class="text-muted pt-4">© 2017–2021 Company, Inc.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, useRoute } from '@nuxtjs/composition-api'
import { BIconTwitter, BIconInstagram, BIconFacebook } from 'bootstrap-vue'
import { INavItem } from '~/types/misc'

export default defineComponent({
  components: { BIconTwitter, BIconInstagram, BIconFacebook },
  setup() {
    const route = useRoute()

    const navItems = ref<INavItem[]>([
      {
        title: 'Startseite',
        to: '/',
      },
      {
        title: 'Landing page',
        to: '/landing-page',
      },
    ])

    return { route, navItems }
  },
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
