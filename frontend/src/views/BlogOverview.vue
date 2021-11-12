<script lang="ts" setup>
import AppBlogPost from '../components/AppBlogPost.vue'
import AppLayoutDefault from '../components/layouts/AppLayoutDefault.vue'
import { config } from '../config'
import { useBlogStore } from '../store/blog'
import { trimPostDescription } from '../utils/strapi'

const blogStore = useBlogStore()

blogStore.fetchPosts()

const getExcerpt = (description: string) =>
  trimPostDescription(description, config.blog.excerptLength)
</script>

<template>
  <AppLayoutDefault>
    <main class="py-6 container">
      <section class="text-center">
        <h1>Blog</h1>
        <p class="pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum.
        </p>
      </section>

      <section class="pt-5 row">
        <div class="col-lg-3 pb-5 pb-lg-0">
          <h3>Filter</h3>
        </div>

        <div class="col-lg-9 mx-3 mx-md-0">
          <div v-if="blogStore.isLoading" class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <div v-else-if="blogStore.error">
            <div class="alert alert-danger" role="alert">
              Beim Laden der Blogbeiträge ist ein Fehler aufgetreten.

              <span
                class="fw-bold error-toggle"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBlogError"
                aria-expanded="false"
                aria-controls="collapseBlogError"
              >
                Details anzeigen
              </span>

              <div id="collapseBlogError" class="collapse">
                <pre class="mb-0 mt-3">{{ blogStore.error }}</pre>
              </div>
            </div>
          </div>

          <div v-else-if="!blogStore.posts.length" class="alert alert-primary" role="alert">
            Aktuell gibt es keine Blogbeiträge.
          </div>

          <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
            <div v-for="post of blogStore.posts" :key="post.id" class="col">
              <AppBlogPost
                :src="post.featuredImage ? post.featuredImage.url : ''"
                :excerpt="getExcerpt(post.description)"
                :title="post.title"
                :href="`/blog/${post.id}`"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </AppLayoutDefault>
</template>

<style lang="scss" scoped>
.error-toggle {
  cursor: pointer;
}
</style>
