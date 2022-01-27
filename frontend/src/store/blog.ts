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

        // strapi media (images, videos etc.) urls are only relative paths, so add the api host here
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
    async fetchPost(id: number): Promise<void> {
      // check if post was already loaded
      const post = this.getPostById(id)
      if (post) return

      this.isLoading = true

      try {
        const { data } = await axiosInstance.get<IBlogPost>(`blog-posts/${id}`)

        // strapi medai (images, videos etc.) urls are only relative paths, so add the api host here
        if (data.featuredImage) {
          data.featuredImage = addApiHostToMedia(data.featuredImage)
        }

        data.sections.forEach((section) => (section.media = addApiHostToMedia(section.media)))

        this.posts.push(data)
      } catch (e) {
        console.error(e)
        this.error = e as Error
      } finally {
        this.isLoading = false
      }
    },
  },
  getters: {
    getPostById(): (id: number) => IBlogPost | undefined {
      return (id: number) => this.posts.find((post) => post.id === id)
    },
  },
})
