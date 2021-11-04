<template>
  <div class="row" :class="{ 'flex-row-reverse': imagePos === 'left' }">
    <div class="col-md-7">
      <h2>
        {{ title }}
        <span v-if="titleMuted" class="text-muted">{{ titleMuted }}</span>
      </h2>
      <p>{{ description }}</p>
    </div>

    <div class="col-md-5">
      <b-img
        fluid
        center
        :src="src"
        alt="Fluid image"
        height="500px"
        width="500px"
      ></b-img>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

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
    titleMuted: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    imagePos: {
      type: String as PropType<'left' | 'right'>,
      default: 'right',
    },
  },
})
</script>

<style scoped lang="scss">
p {
  font-size: 1.25rem;
  font-weight: 300;
}

h2 {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;

  @media (min-width: 40em) {
    font-size: 50px;
  }

  @media (min-width: 62em) {
    margin-top: 7rem;
  }
}

img {
  background-color: #e9e9e9;
}
</style>
