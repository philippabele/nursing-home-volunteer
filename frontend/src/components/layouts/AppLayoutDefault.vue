<script lang="ts" setup>
import TheFooter from '../TheFooter.vue'
import TheHeader from '../TheHeader.vue'

interface LayoutProps {
  transparentHeader?: boolean
}

defineProps<LayoutProps>()
</script>

<template>
  <TheHeader :transparent="transparentHeader" />
  <slot />
  <TheFooter />
</template>
