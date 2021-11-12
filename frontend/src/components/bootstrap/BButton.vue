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
  iconColor?: 'light' | 'dark'
  iconPos?: 'start' | 'end'
}

const props = withDefaults(defineProps<BButtonProps>(), {
  color: 'primary',
  size: undefined,
  icon: '',
  iconColor: 'dark',
  iconPos: 'end',
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
    <img
      v-if="icon && iconPos === 'start'"
      :src="icon"
      class="me-1 btn__icon"
      alt="Icon"
      :class="{ 'btn__icon--white': iconColor === 'light' }"
    />
    <slot />
    <img
      v-if="icon && iconPos === 'end'"
      :src="icon"
      class="ms-1 btn__icon"
      alt="Icon"
      :class="{ 'btn__icon--white': iconColor === 'light' }"
    />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  &__icon {
    margin-top: -3px;

    &--white {
      filter: invert(1);
    }
  }
}
</style>
