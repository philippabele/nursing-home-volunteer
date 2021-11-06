import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { useContext } from '@nuxtjs/composition-api'

export function getStrapiMediaUrl(url: string): string {
  const { axios } = useAxios()

  return `${axios.defaults.baseURL ?? ''}${url}`
}

export function useAxios(): { axios: NuxtAxiosInstance } {
  const context = useContext()
  const axios = (context as typeof context & { axios: NuxtAxiosInstance })
    .$axios

  return { axios }
}
