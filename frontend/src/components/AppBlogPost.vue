<script lang="ts" setup>
import { stripMarkdown } from '../utils/strings'
import BButton from './bootstrap/BButton.vue'

interface BlogPostProps {
  src?: string
  title: string
  excerpt: string
  href: string
}

defineProps<BlogPostProps>()
</script>

<template>
  <article class="card shadow-sm">
    <img v-if="src" :src="src" class="card-img-top" :alt="title" />

    <div class="card-body">
      <h3 class="card-title h4">{{ title }}</h3>
      <p class="card-text">
        {{ stripMarkdown(excerpt) }}
      </p>

      <BButton :href="href">Weiterlesen</BButton>
    </div>
  </article>
</template>

<style scoped lang="scss"></style>
