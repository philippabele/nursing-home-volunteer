export interface IMedia {
  id: number
  alternativeText: string
  caption: string
  ext: string
  name: string
  size: number
  url: string
  mime: string
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
}
