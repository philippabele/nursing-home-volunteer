<template>
  <main>
    <Hero
      :src="
        post && post.featuredImage ? appendApiHost(post.featuredImage.url) : ''
      "
      :title="post ? post.title : ''"
      :height="400"
    />
    <b-overlay
      :show="isLoading"
      rounded
      opacity="0.6"
      spinner-small
      spinner-variant="primary"
      class="pt-6"
    >
      <template v-if="!isLoading">
        <div class="container">
          <b-button to="/blog" variant="transparent">
            <BIconArrowLeft />
            Zurück zum Blog
          </b-button>
        </div>

        <div v-if="!post" class="container">
          <p>Der Blog Beitrag konnte nicht geladen werden.</p>
        </div>

        <div v-else>
          <section class="pb-6 text-center container">
            <p>{{ post.description }}</p>
          </section>

          <MediaSection
            v-for="(section, index) of post.sections"
            :key="section.id"
            :title="section.title"
            :description="section.description"
            :media="section.media"
            :layout="section.layout"
            :class="{ 'bg-light': index % 2 == 0 }"
          />
        </div>
      </template>
    </b-overlay>
  </main>
</template>

<script lang="ts">
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  defineComponent,
  useRoute,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import { BIconArrowLeft } from 'bootstrap-vue'
import { IBlogPost } from '~/types/blog'
import Hero from '~/components/Hero.vue'
import MediaSection from '~/components/MediaSection.vue'

export default defineComponent({
  components: { Hero, BIconArrowLeft, MediaSection },
  layout: 'landing-page',
  setup() {
    const route = useRoute()
    const blogId = Number.parseInt(route.value.params.id) || -1
    const isLoading = ref(true)
    const post = ref<IBlogPost | null>(null)
    const context = useContext()
    const axios = (context as any).$axios as NuxtAxiosInstance
    if (blogId !== -1) {
      axios
        .get<IBlogPost>(`blog-posts/${blogId}`)
        .then(({ data }) => {
          post.value = data
        })
        .catch((e) => {
          console.error(e)
        })
        .finally(() => {
          isLoading.value = false
        })
    }

    const appendApiHost = (url: string): string => {
      return `${axios.defaults.baseURL ?? ''}${url}`
    }

    return { isLoading, post, appendApiHost }
  },
})
</script>

<style scoped lang="scss"></style>
