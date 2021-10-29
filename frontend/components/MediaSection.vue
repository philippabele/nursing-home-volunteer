<template>
  <section class="py-6 px-4 px-lg-0">
    <div class="container">
      <div
        class="row align-items-center"
        :class="{ 'flex-row-reverse': layout === 'left' }"
      >
        <div
          class="col-lg-6"
          :class="{
            'pl-lg-5': layout === 'left',
            'pr-lg-5': layout === 'right',
          }"
        >
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>

        <div class="col-lg-6 justify-content-lg-center d-flex mt-4 mt-lg-0">
          <b-img
            v-if="mediaType === 'image'"
            :src="src"
            fluid
            rounded
            alt="Responsive image"
          ></b-img>

          <video
            v-else-if="mediaType === 'video'"
            controls
            controlsList="nodownload"
          >
            <source :src="src" :type="media.mime" />
            Dein Browser unterstützt das Videoformat nicht.
          </video>

          <audio
            v-else-if="mediaType === 'audio'"
            controls
            controlsList="nodownload"
          >
            <source :src="src" :type="media.mime" />
            Dein Browser unterstützt das Audioformat nicht.
          </audio>

          <div v-else>Unbekannter Mediantyp: {{ mediaType }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  defineComponent,
  PropType,
  computed,
  useContext,
} from '@nuxtjs/composition-api'
import { IMedia } from '~/types/blog'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      required: true,
    },
    media: {
      type: Object as PropType<IMedia>,
      required: true,
    },
    layout: {
      type: String as PropType<'left' | 'right'>,
      default: 'right',
    },
  },
  setup(props) {
    const context = useContext()
    const axios = (context as any).$axios as NuxtAxiosInstance

    const appendApiHost = (url: string): string => {
      return `${axios.defaults.baseURL ?? ''}${url}`
    }

    const src = computed((): string => appendApiHost(props.media.url))

    const mediaType = computed((): string => props.media.mime.split('/')[0])

    return { src, mediaType }
  },
})
</script>

<style scoped lang="scss">
video {
  max-width: 100%;
}
</style>
