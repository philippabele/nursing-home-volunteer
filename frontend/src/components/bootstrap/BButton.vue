<script setup lang="ts">
import { computed } from 'vue'
import { BootstrapColor } from '../../types/components'
import { navigate } from '../../utils/router'

interface BButtonProps {
  href: string
  color?: BootstrapColor
  disabled?: boolean
  size?: 'sm' | 'lg'
}

const props = withDefaults(defineProps<BButtonProps>(), {
  color: 'primary',
  size: undefined,
})

const btnClasses = computed(
  (): string => `btn-${props.color} ${props.size ? 'btn-' + props.size : ''}`
)
</script>

<template>
  <button
    type="button"
    class="btn"
    :class="btnClasses"
    :disabled="disabled"
    @click="navigate(href)"
  >
    <slot />
  </button>
</template>

<style lang="scss"></style>
