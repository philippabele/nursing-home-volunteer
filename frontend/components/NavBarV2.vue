<template>
  <header class="w-100" :class="{ 'position-absolute': transparent }">
    <b-navbar
      toggleable="lg"
      type="dark"
      :variant="transparent ? 'transparent' : 'dark'"
    >
      <div class="container">
        <b-navbar-brand>Company Name</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              v-for="item of navItems"
              :key="item.to"
              :to="item.to"
              :active="
                item.to === '/'
                  ? route.path === item.to
                  : route.path.includes(item.to)
              "
            >
              {{ item.title }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script lang="ts">
import { defineComponent, useRoute, ref } from '@nuxtjs/composition-api'
import { INavItem } from '~/types/misc'

export default defineComponent({
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
  },
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
      {
        title: 'Blog',
        to: '/blog',
      },
    ])

    return { route, navItems }
  },
})
</script>

<style scoped lang="scss"></style>
