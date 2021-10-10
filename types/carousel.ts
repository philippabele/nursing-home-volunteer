export interface CarouselSlide {
  id: number
  caption?: string
  text?: string
  imgSrc?: string
  imgAlt?: string
  btn?: {
    text: string
    to: string
    /** If true, will use href instead of to attribute for navigating */
    external?: boolean
  }
}
