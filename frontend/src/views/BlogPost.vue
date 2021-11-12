<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHero from '../components/AppHero.vue'
import AppMediaSection from '../components/AppMediaSection.vue'
import BAlert from '../components/bootstrap/BAlert.vue'
import BSpinner from '../components/bootstrap/BSpinner.vue'
import AppLayoutDefault from '../components/layouts/AppLayoutDefault.vue'
import { useBlogStore } from '../store/blog'
import { IBlogPost } from '../types/blog'
import { markdownToHtml } from '../utils/strings'

const { params } = useRoute()
const blogId = Number.parseInt(Array.isArray(params.id) ? '' : params.id) || -1

const blogStore = useBlogStore()

const post = computed((): IBlogPost | undefined => blogStore.getPostById(blogId))
if (blogId !== -1) blogStore.fetchPost(blogId)
</script>

<template>
  <AppLayoutDefault>
    <main>
      <AppHero
        :src="post && post.featuredImage ? post.featuredImage.url : ''"
        :title="post ? post.title : ''"
        :height="400"
      />

      <div class="container py-6">
        <BAlert
          v-if="blogId === -1"
          msg="Die aufgerufene Beitrags-URL ist ungültig."
          color="danger"
        />

        <BAlert
          v-else-if="blogStore.error"
          msg="Beim Laden des Beitrags ist ein Fehler aufgetreten."
          :details="blogStore.error.message"
          color="danger"
        />

        <BSpinner v-if="blogStore.isLoading" />

        <div
          v-else-if="post"
          class="text-center"
          v-html="markdownToHtml(post ? post.description : '')"
        ></div>
      </div>

      <template v-if="post">
        <AppMediaSection
          v-for="(section, index) of post.sections"
          :key="section.id"
          :title="section.title"
          :description="section.description"
          :media="section.media"
          :layout="section.layout"
          :class="{ 'bg-light': index % 2 == 0 }"
        />
      </template>
    </main>
  </AppLayoutDefault>
</template>

<style scoped lang="scss"></style>
