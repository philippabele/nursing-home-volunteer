<script lang="ts" setup>
import { IStep } from '../types/components'

defineProps<{
  steps: IStep[]
}>()
</script>

<template>
  <div class="text-start">
    <div v-for="(step, index) of steps" :key="index" class="pb-4 d-flex">
      <div
        class="
          step__nr
          border border-primary
          rounded-circle
          d-flex
          justify-content-center
          align-items-center
        "
      >
        {{ index + 1 }}
      </div>

      <div class="ps-4">
        <p class="font-weight-bolder mb-0">{{ step.title }}</p>
        <p>{{ step.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step {
  &__nr {
    $size: 32px;
    height: $size;
    width: $size;
    min-height: $size;
    min-width: $size;
  }
}
</style>
