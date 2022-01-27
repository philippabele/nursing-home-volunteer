export interface IMediaFormat {
  /** Image extension, starting with dot, uppercase */
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  size: number
  width: number
  height: number
}

export interface IMedia extends IMediaFormat {
  id: number
  alternativeText?: string
  caption: string
  created_at: string
  updated_at: string
  formats?: {
    small: IMediaFormat
    medium: IMediaFormat
    large: IMediaFormat
    thumbnail: IMediaFormat
  }
}

export interface IMediaSection {
  id: number
  title: string
  description: string
  media: IMedia
  layout: 'left' | 'right'
}

export interface IBlogPost {
  id: number
  title: string
  description: string
  featuredImage?: IMedia
  sections: IMediaSection[]
  published_at: string
  created_at: string
  updated_at: string
}
