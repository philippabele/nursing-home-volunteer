<script lang="ts" setup>
import { IButton } from '../types/components'
import BButton from './bootstrap/BButton.vue'

interface IconCardProps {
  icon: string
  title: string
  description: string
  btn?: IButton
}

defineProps<IconCardProps>()
</script>

<template>
  <div class="icon-card p-4 rounded border">
    <img :src="icon" class="icon-card__icon" alt="Icon" />
    <h5 class="pt-3">{{ title }}</h5>
    <p>{{ description }}</p>

    <BButton v-if="btn" :href="btn.href" color="link"> {{ btn.text }}</BButton>
  </div>
</template>

<style scoped lang="scss">
.icon-card {
  background: #ffffff;

  &__icon {
    $iconSize: 64px;
    width: $iconSize;
    height: $iconSize;
  }
}
</style>
