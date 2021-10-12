<template>
  <div class="feature">
    <b-avatar :src="src" size="140px" text=" "></b-avatar>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <b-button
      v-if="href && btnText"
      :href="external ? href : undefined"
      :to="!external ? href : undefined"
      variant="secondary"
      class="btn"
    >
      {{ btnText }}
      <BIconChevronDoubleRight class="btn__icon" />
    </b-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { BIconChevronDoubleRight } from 'bootstrap-vue'

export default defineComponent({
  components: { BIconChevronDoubleRight },
  props: {
    src: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
    external: Boolean,
  },
})
</script>

<style scoped>
.feature {
  text-align: center;
}

.btn__icon {
  font-size: 16px !important;
  vertical-align: middle !important;
  margin-top: -3px;
}
</style>
