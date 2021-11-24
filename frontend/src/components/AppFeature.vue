<script lang="ts" setup>
import ChevronDoubleRightIconUrl from 'bootstrap-icons/icons/chevron-double-right.svg'
import { IButton } from '../types/components'
import BAvatar from './bootstrap/BAvatar.vue'
import BButton from './bootstrap/BButton.vue'

interface FeatureProps {
  src?: string
  title: string
  description?: string
  btn?: IButton
}

defineProps<FeatureProps>()
</script>

<template>
  <div class="text-center">
    <BAvatar :src="src" />
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>

    <BButton
      v-if="btn"
      :disabled="btn.disabled"
      :href="btn.href"
      color="secondary"
      :icon="ChevronDoubleRightIconUrl"
      icon-color="light"
    >
      {{ btn.text }}
    </BButton>
  </div>
</template>

<style scoped lang="scss"></style>
