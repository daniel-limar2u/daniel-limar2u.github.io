import { ReactNode, Ref } from 'react'

export interface ViewerText {
  title?: string | JSX.Element
  top?: string | JSX.Element
  bottom?: string | JSX.Element
}

export interface ARLinkProps {
  usdz?: string
  glb?: string
  title?: string
  linkRef?: Ref<HTMLAnchorElement>
  onClick?: () => void
  componentDidMount?: () => void
  resize?: boolean
  children?: ReactNode
  fallbackOptions?: {
    alertMessage?: string
    fallback?: 'viewer' | 'full'
    text?: ViewerText
  }
}
