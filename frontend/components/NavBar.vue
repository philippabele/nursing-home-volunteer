<template>
  <header class="sticky-top">
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-brand>NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="item of navItems"
            :key="item.to"
            :to="item.to"
            :active="route.path === item.to"
          >
            {{ item.title }}
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <div class="d-flex search">
              <b-form-input
                size="me"
                class="mr-2"
                placeholder="Search"
                type="search"
              ></b-form-input>
              <b-button size="me" type="submit">Search</b-button>
            </div>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script lang="ts">
import { defineComponent, useRoute, ref } from '@nuxtjs/composition-api'
import { INavItem } from '~/types/misc'

export default defineComponent({
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
form {
  width: 100%;

  .search {
    width: 100%;
  }
}
</style>
