<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { INavItem } from '../types/misc'
import { navigate } from '../utils/router'

interface HeaderProps {
  transparent?: boolean
}

defineProps<HeaderProps>()

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
  {
    title: 'Blog',
    href: '/blog',
  },
])
</script>

<template>
  <header class="w-100" :class="{ 'position-absolute': transparent, 'sticky-top': !transparent }">
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      :class="{
        'bg-dark': !transparent,
        'bg-transparent': transparent,
      }"
    >
      <div class="container container-fluid">
        <a class="navbar-brand" href="#">Nursing Home Volunteer</a>

        <!-- mobile nav toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- nav items -->
        <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
          <div class="navbar-nav ms-auto">
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
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '../styles/bootstrap';

header {
  z-index: $zindex-sticky;
}

.nav-link {
  cursor: pointer;
}
</style>
