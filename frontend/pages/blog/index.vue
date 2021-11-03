<template>
  <main class="py-6 container">
    <section class="text-center">
      <h1>Blog</h1>
      <p class="pt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
    </section>

    <section class="pt-5 row">
      <div class="col-lg-3 pb-5 pb-lg-0">
        <h3>Filter</h3>
      </div>

      <b-overlay
        :show="isLoading"
        rounded
        opacity="0.6"
        spinner-small
        spinner-variant="primary"
        class="col-lg-9 mx-3 mx-md-0"
      >
        <template v-if="!isLoading">
          <p v-if="hasError" class="text-muted">
            Beim Laden der Blog Beiträge ist ein Fehler aufgetreten.
          </p>

          <p v-else-if="!blogPosts.length" class="text-muted">
            Wir haben keine Blog Beiträge gefunden.
          </p>

          <div v-else class="row">
            <b-card-group columns>
              <BlogPost
                v-for="post of blogPosts"
                :key="post.id"
                class="mb-5"
                :title="post.title"
                :excerpt="
                  post.description.length > excerptLength
                    ? `${post.description.slice(0, excerptLength)}...`
                    : post.description
                "
                :src="
                  post.featuredImage
                    ? getStrapiMediaUrl(post.featuredImage.url)
                    : ''
                "
                :post-id="post.id"
              />
            </b-card-group>
          </div>
        </template>
      </b-overlay>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import BlogPost from '~/components/BlogPost.vue'
import { IBlogPost } from '~/types/blog'
import { getStrapiMediaUrl, useAxios } from '~/utils/strapi'

export default defineComponent({
  components: { BlogPost },
  layout: 'blog',
  setup() {
    const isLoading = ref(true)
    const hasError = ref(false)
    const blogPosts = ref<IBlogPost[]>([])

    const { axios } = useAxios()

    axios
      .get<IBlogPost[]>('blog-posts')
      .then(({ data }) => {
        blogPosts.value = data
      })
      .catch((e) => {
        console.error('Error while fetching blog posts', e)
        hasError.value = true
      })
      .finally(() => {
        isLoading.value = false
      })

    const excerptLength = ref(80)

    return { isLoading, hasError, blogPosts, excerptLength, getStrapiMediaUrl }
  },
})
</script>

<style scoped lang="scss">
@import '../../assets/css/main.scss';

@include media-breakpoint-down(md) {
  .card-columns {
    column-count: 2;
  }
}

@include media-breakpoint-down(sm) {
  .card-columns {
    column-count: 1;
  }
}
</style>
