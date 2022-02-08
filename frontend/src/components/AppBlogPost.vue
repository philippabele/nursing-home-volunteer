<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { stripMarkdown } from '../utils/strings'
import BButton from './bootstrap/BButton.vue'

interface BlogPostProps {
  src?: string
  title: string
  excerpt: string
  href: string
}

defineProps<BlogPostProps>()

const router = useRouter()
</script>

<template>
  <article class="card shadow-sm">
    <img v-if="src" :src="src" class="card-img-top" :alt="title" @click="router.push(href)" />

    <div class="card-body">
      <h3 class="card-title h4">{{ title }}</h3>
      <p class="card-text">
        {{ stripMarkdown(excerpt) }}
      </p>

      <BButton :href="href">Weiterlesen</BButton>
    </div>
  </article>
</template>

<style scoped lang="scss">
img {
  cursor: pointer;
}
</style>
