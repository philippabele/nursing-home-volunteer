<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" :active="route.path === '/'"
            >Startseite</b-nav-item
          >
          <b-nav-item href="https://google.de" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="me"
              class="mr-sm-2"
              placeholder="Search"
              type="search"
            ></b-form-input>
            <b-button size="me" type="submit">Search</b-button>
          </b-nav-form>

          <!-- <b-nav-item-dropdown text="Sprache" right>
            <b-dropdown-item active href="#">DE</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()

    return { route }
  },
})
</script>
