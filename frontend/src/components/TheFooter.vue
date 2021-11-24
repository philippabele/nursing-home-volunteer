<script lang="ts" setup>
import facebookIconUrl from 'bootstrap-icons/icons/facebook.svg'
import instagramIconUrl from 'bootstrap-icons/icons/instagram.svg'
import twitterIconUrl from 'bootstrap-icons/icons/twitter.svg'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { IIcon, INavItem } from '../types/misc'
import { navigate } from '../utils/router'
import BButton from './bootstrap/BButton.vue'

const route = useRoute()

const navItems = ref<INavItem[]>([
  {
    title: 'Startseite',
    href: '/',
  },
  {
    title: 'Landing page',
    href: '/landing-page',
  },
])

const icons = ref<IIcon[]>([
  {
    src: twitterIconUrl,
    alt: 'Twitter',
    href: 'https://twitter.com',
  },
  {
    src: facebookIconUrl,
    alt: 'Facebook',
    href: 'https://facebook.com',
  },
  {
    src: instagramIconUrl,
    alt: 'Instagram',
    href: 'https://instagram.com',
  },
])
</script>

<template>
  <footer class="text-white text-center">
    <div class="gradient p-5">
      <div class="container">
        <div class="row align-items-center">
          <p class="col-md-4 mb-3 mb-md-0">Let's get you started</p>

          <p class="col-md-4 mb-3 mb-md-0">Lorem ipsum dolor sit amet</p>
          <div class="col-md-4">
            <BButton class="px-4" href="#">More</BButton>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark p-5">
      <div class="container">
        <nav class="navbar navbar-dark navbar-expand-sm bg-transparent">
          <div class="navbar-nav mx-auto">
            <div
              v-for="item of navItems"
              :key="item.href"
              class="nav-link"
              :class="{
                active:
                  item.href === '/' ? route.path === item.href : route.path.includes(item.href),
                disabled: item.disabled,
              }"
              :href="item.href"
              :aria-disabled="item.disabled"
              @click="navigate(item.href)"
            >
              {{ item.title }}
            </div>
          </div>
        </nav>

        <div class="h4 pb-3 pt-5">
          <span
            v-for="(icon, index) of icons"
            :key="index"
            class="text-white"
            :class="{ 'ms-3': index !== 0 }"
            @click="navigate(icon.href || '#')"
          >
            <img :src="icon.src" :alt="icon.alt" class="social-icon" />
          </span>
        </div>

        <p>Lorem ipsum dolor sit</p>
        <p class="text-muted pt-4">© 2017–2021 Company, Inc.</p>
      </div>
    </div>
  </footer>
</template>

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

  .nav-link {
    cursor: pointer;
  }

  .social-icon {
    cursor: pointer;
    width: 28px;
    height: auto;

    // make icons white
    filter: invert(1);
  }
}
</style>
