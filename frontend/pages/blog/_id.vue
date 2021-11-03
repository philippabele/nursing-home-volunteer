<template>
  <main>
    <Hero
      :src="
        post && post.featuredImage
          ? getStrapiMediaUrl(post.featuredImage.url)
          : ''
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

        <div v-if="!post" class="container pb-6">
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
import { defineComponent, useRoute, ref } from '@nuxtjs/composition-api'
import { BIconArrowLeft } from 'bootstrap-vue'
import { IBlogPost } from '~/types/blog'
import Hero from '~/components/Hero.vue'
import MediaSection from '~/components/MediaSection.vue'
import { getStrapiMediaUrl, useAxios } from '~/utils/strapi'

export default defineComponent({
  components: { Hero, BIconArrowLeft, MediaSection },
  layout: 'landing-page',
  setup() {
    const isLoading = ref(true)

    const route = useRoute()
    const blogId = Number.parseInt(route.value.params.id) || -1
    const post = ref<IBlogPost | null>(null)

    const { axios } = useAxios()

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

    return { isLoading, post, getStrapiMediaUrl }
  },
})
</script>

<style scoped lang="scss"></style>
