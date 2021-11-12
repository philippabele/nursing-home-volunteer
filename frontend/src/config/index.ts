import { IConfig } from '../types/config'

export const isProduction: boolean = import.meta.env.PROD
export const baseUrl: string = import.meta.env.BASE_URL

// for type annotaions for env variables, see env.d.ts file

export const config: IConfig = {
  api: {
    host: import.meta.env.VITE_APP_API_HOST ?? '',
  },
}
