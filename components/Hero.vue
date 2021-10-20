<template>
  <section :style="{ backgroundImage: `url(${src})` }" class="hero">
    <div
      class="
        hero__overlay
        d-flex
        justify-content-center
        align-items-center
        text-center
      "
    >
      <div class="hero__content">
        <h1>{{ title }}</h1>
        <p v-if="subtitle" class="mt-4">{{ subtitle }}</p>

        <b-button
          v-if="btn"
          class="mt-4 px-5"
          :to="!btn.external ? btn.to : undefined"
          :href="btn.external ? btn.to : undefined"
          variant="primary"
        >
          {{ btn.text }}
        </b-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { IButton } from '~/types/components'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    btn: {
      type: Object as PropType<IButton | undefined>,
      default: () => undefined,
    },
  },
})
</script>

<style scoped lang="scss">
.hero {
  height: 650px;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;

  &__overlay {
    width: 100%;
    height: 100%;

    /* overlay */
    background: rgba(0, 0, 0, 0.4) 100%;
  }

  &__content {
    p {
      font-size: 18px;
    }
  }
}
</style>
