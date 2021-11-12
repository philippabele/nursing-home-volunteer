export type BootstrapColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'

export interface IButton {
  text: string
  href: string
  disabled?: boolean
}

export interface ICarouselSlide {
  id: number
  caption?: string
  text?: string
  imgSrc?: string
  btn?: IButton
  align?: 'left' | 'center' | 'right'
}

export interface IIconCard {
  id: number
  icon: string
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

export interface ITeamMember {
  id: number
  avatar: string
  name: string
  description: string
}

export interface IStep {
  title: string
  description: string
}
