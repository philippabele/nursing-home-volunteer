<script setup lang="ts">
import { computed } from 'vue'
import { BootstrapColor } from '../../types/components'
import { navigate } from '../../utils/router'

interface BButtonProps {
  href: string
  color?: BootstrapColor | 'link'
  disabled?: boolean
  size?: 'sm' | 'lg'
  icon?: string
}

const props = withDefaults(defineProps<BButtonProps>(), {
  color: 'primary',
  size: undefined,
  icon: '',
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
    <img v-if="icon" :src="icon" class="ms-1 btn__icon" alt="Icon" />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  &__icon {
    margin-top: -3px;

    // make icon white
    filter: invert(1);
  }
}
</style>
