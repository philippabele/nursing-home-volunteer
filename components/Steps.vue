<template>
  <div class="text-left">
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

      <div class="pl-4">
        <p class="font-weight-bolder mb-0">{{ step.title }}</p>
        <p>{{ step.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { IStep } from '~/types/components'

export default defineComponent({
  props: {
    steps: {
      type: Array as PropType<IStep[]>,
      required: true,
    },
  },
})
</script>

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
