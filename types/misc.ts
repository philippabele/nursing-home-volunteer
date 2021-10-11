export interface IButton {
  text: string
  to: string
  /** If true, will use href instead of to attribute for navigating */
  external?: boolean
}

export interface IFeature {
  id: number
  src?: string
  title: string
  description: string
  btn?: IButton
}
