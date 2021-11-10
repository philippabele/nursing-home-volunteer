<script lang="ts" setup>
import TheFooter from './TheFooter.vue'
import TheHeader from './TheHeader.vue'

interface LayoutProps {
  transparent?: boolean
}

defineProps<LayoutProps>()
</script>

<template>
  <TheHeader :transparent="transparent" />
  <slot />
  <TheFooter />
</template>
