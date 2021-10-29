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
        class="col-lg-9"
      >
        <template v-if="!isLoading">
          <p v-if="!blogPosts.length" class="text-muted">
            Wir haben keine Blog Beiträge gefunden.
          </p>

          <div class="row">
            <div v-for="post of blogPosts" :key="post.id" class="col-lg-6 mb-4">
              <BlogPost
                :title="post.title"
                :excerpt="
                  post.description.length > excerptLength
                    ? `${post.description.slice(0, excerptLength)}...`
                    : post.description
                "
                :src="
                  post.featuredImage
                    ? appendApiHost(post.featuredImage.url)
                    : ''
                "
                :post-id="post.id"
              />
            </div>
          </div>
        </template>
      </b-overlay>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import BlogPost from '~/components/BlogPost.vue'
import { IBlogPost } from '~/types/blog'

export default defineComponent({
  components: { BlogPost },
  layout: 'blog',
  setup() {
    const isLoading = ref(true)
    const blogPosts = ref<IBlogPost[]>([])

    const context = useContext()
    const axios = (context as any).$axios as NuxtAxiosInstance

    axios
      .get<IBlogPost[]>('blog-posts')
      .then(({ data }) => {
        blogPosts.value = data
      })
      .catch((e) => {
        console.error(e)
      })
      .finally(() => {
        isLoading.value = false
      })

    const excerptLength = ref(80)

    const appendApiHost = (url: string): string => {
      return `${axios.defaults.baseURL ?? ''}${url}`
    }

    return { isLoading, blogPosts, excerptLength, appendApiHost }
  },
})
</script>

<style scoped lang="scss"></style>
