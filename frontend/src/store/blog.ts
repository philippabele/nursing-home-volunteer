import { defineStore } from 'pinia'
import axiosInstance from '../axios'
import { IBlogPost } from '../types/blog'
import { addApiHostToMedia } from '../utils/strapi'

export const useBlogStore = defineStore('blog', {
  state() {
    return {
      posts: [] as IBlogPost[],
      isLoading: false,
      error: null as Error | null,
    }
  },
  actions: {
    async fetchPosts(): Promise<void> {
      this.isLoading = true

      try {
        const { data } = await axiosInstance.get<IBlogPost[]>('blog-posts')

        // strapi medai (images, videos etc.) urls are only relative paths, so add the api host here
        data.forEach((post) => {
          if (post.featuredImage) {
            post.featuredImage = addApiHostToMedia(post.featuredImage)
          }

          post.sections.forEach((section) => (section.media = addApiHostToMedia(section.media)))
        })

        this.posts = data
      } catch (e) {
        console.error(e)
        this.error = e as Error
      } finally {
        this.isLoading = false
      }
    },
  },
})
