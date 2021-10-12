import { IButton } from './misc'

export interface ICarouselSlide {
  id: number
  caption?: string
  text?: string
  imgSrc?: string
  imgAlt?: string
  btn?: IButton
  align?: 'left' | 'center' | 'right'
}
