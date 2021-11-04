<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { BootstrapColor } from '../../types/components'

interface BButtonProps {
  href: string
  color?: BootstrapColor
  disabled?: boolean
}

const props = withDefaults(defineProps<BButtonProps>(), {
  color: 'primary',
})

const router = useRouter()
const navigate = async () => {
  if (props.href.startsWith('http')) window.open(props.href, '_blank')
  else await router.push(props.href)
}

const btnColorClass = computed((): string => `btn-${props.color}`)
</script>

<template>
  <button type="button" class="btn" :class="btnColorClass" :disabled="disabled" @click="navigate">
    <slot />
  </button>
</template>

<style lang="scss"></style>
