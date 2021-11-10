<script setup lang="ts">
import { computed } from 'vue'
import { BootstrapColor } from '../../types/components'
import { navigate } from '../../utils/router'

interface BButtonProps {
  href: string
  color?: BootstrapColor
  disabled?: boolean
}

const props = withDefaults(defineProps<BButtonProps>(), {
  color: 'primary',
})

const btnColorClass = computed((): string => `btn-${props.color}`)
</script>

<template>
  <button
    type="button"
    class="btn"
    :class="btnColorClass"
    :disabled="disabled"
    @click="navigate(href)"
  >
    <slot />
  </button>
</template>

<style lang="scss"></style>
