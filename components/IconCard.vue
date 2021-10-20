<template>
  <div class="icon-card p-4 rounded border">
    <component :is="icon" class="icon-card__icon"></component>
    <h5 class="pt-3">{{ title }}</h5>
    <p>{{ description }}</p>

    <b-button
      v-if="btn"
      :href="btn.external ? btn.to : undefined"
      :to="!btn.external ? btn.to : undefined"
      variant="link"
    >
      {{ btn.text }}
    </b-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { IButton } from '~/types/misc'

export default defineComponent({
  props: {
    icon: {
      /** Icon component constructor, e.g. imported via "import { BIconXYZ } from 'bootstrap-vue'" */
      type: Function as PropType<Vue>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    btn: {
      type: Object as PropType<IButton | undefined>,
      default: () => undefined,
    },
  },
})
</script>

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
