<script lang="ts" setup>
import { computed, ref } from 'vue'
import { IMedia } from '../types/strapi'
import { markdownToHtml } from '../utils/strings'
import VueEasyLightbox from 'vue-easy-lightbox'
import AppLightboxImage from './AppLightboxImage.vue'

interface MediaSectionProps {
  title?: string
  description: string
  media: IMedia
  layout?: 'left' | 'right'
}

const props = withDefaults(defineProps<MediaSectionProps>(), {
  title: '',
  layout: 'right',
})

const mediaType = computed((): string => props.media.data?.attributes.mime.split('/')[0] ?? '')
const isLightBoxVisible = ref(false)
</script>

<template>
  <section class="py-6 px-4 px-lg-0">
    <div class="container">
      <div class="row align-items-center" :class="{ 'flex-row-reverse': layout === 'left' }">
        <div
          class="col-lg-6"
          :class="{
            'pl-lg-5': layout === 'left',
            'pr-lg-5': layout === 'right',
          }"
        >
          <h2 v-if="title">{{ title }}</h2>
          <div v-html="markdownToHtml(description)"></div>
        </div>

        <div v-if="media.data" class="col-lg-6 justify-content-lg-center d-flex mt-4 mt-lg-0">
          <AppLightboxImage
            v-if="mediaType === 'image'"
            :src="media.data.attributes.url"
            :alt="media.data.attributes.alternativeText || media.data.attributes.caption"
          />

          <video v-else-if="mediaType === 'video'" controls controlsList="nodownload">
            <source :src="media.data.attributes.url" :type="media.data.attributes.mime" />
            Dein Browser unterstützt das Videoformat nicht.
          </video>

          <audio v-else-if="mediaType === 'audio'" controls controlsList="nodownload">
            <source :src="media.data.attributes.url" :type="media.data.attributes.mime" />
            Dein Browser unterstützt das Audioformat nicht.
          </audio>

          <div v-else>Unbekannter Medientyp: {{ mediaType }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
video {
  max-width: 100%;
}

img {
  cursor: pointer;
}
</style>
