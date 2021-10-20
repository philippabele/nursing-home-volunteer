export interface IButton {
  text: string
  to: string
  /** If true, will use href instead of to attribute for navigating */
  external?: boolean
}

export interface ICarouselSlide {
  id: number
  caption?: string
  text?: string
  imgSrc?: string
  imgAlt?: string
  btn?: IButton
  align?: 'left' | 'center' | 'right'
}

export interface IIconCard {
  id: number
  icon: Function
  title: string
  description: string
  btn?: IButton
}

export interface IFeature {
  id: number
  src?: string
  title: string
  description: string
  btn?: IButton
}

export interface IImageBlock {
  id: number
  src: string
  title: string
  titleMuted?: string
  description: string
}

export interface ITestimonial {
  id: number
  quote: string
  name: string
  avatar?: string
  position?: string
  location?: string
}
