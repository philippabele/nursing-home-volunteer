import { defineStore } from 'pinia'
import axiosInstance from '../axios'
import { IBlogPost, StrapiResult } from '../types/strapi'
import { addApiHostToMedia } from '../utils/strapi'

const blogPopulateQueryParam = 'populate=featuredImage,sections,sections.media'

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
        const { data } = await axiosInstance.get<StrapiResult<IBlogPost[]>>(
          `api/blog-posts?${blogPopulateQueryParam}`
        )
        const posts = data.data

        // strapi media (images, videos etc.) urls are only relative paths, so add the api host here
        posts.forEach((post) => {
          if (post.attributes.featuredImage) {
            post.attributes.featuredImage = addApiHostToMedia(post.attributes.featuredImage)
          }

          post.attributes.sections?.forEach(
            (section) => (section.media = addApiHostToMedia(section.media))
          )
        })

        this.posts = posts
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
        const { data } = await axiosInstance.get<StrapiResult<IBlogPost>>(
          `api/blog-posts/${id}?${blogPopulateQueryParam}`
        )
        const post = data.data

        // strapi media (images, videos etc.) urls are only relative paths, so add the api host here
        if (post.attributes.featuredImage) {
          post.attributes.featuredImage = addApiHostToMedia(post.attributes.featuredImage)
        }

        post.attributes.sections?.forEach(
          (section) => (section.media = addApiHostToMedia(section.media))
        )

        this.posts.push(post)
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
