import { ReactNode } from 'react'

export interface ModelViewerJSX {
  src: string
  poster?: string | null
  autoplay?: boolean
  autoRotate?: boolean
  cameraControls?: boolean
  alt?: string
  style?: Record<string, unknown>
  class?: string
  exposure?: string
  shadowIntensity?: string
  shadowSoftness?: string
  children?: ReactNode
  reveal?: 'auto' | 'interaction'
  ar?: boolean
}

export interface ModelViewerElement extends HTMLElement {
  getCameraOrbit(): { theta: number; phi: number; radius: number }
  getCameraTarget(): { x: number; y: number; z: number }
  positionAndNormalFromPoint(
    x: number,
    y: number
  ): { position: { x: number; y: number; z: number } }
  interactionPrompt: string
  cameraTarget: string
  activateAR: () => void
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerJSX &
        React.DetailedHTMLProps<
          React.HTMLAttributes<ModelViewerElement>,
          ModelViewerElement
        >
    }
  }
}

export interface ViewerProps {
  glb?: string
  big?: boolean
  dataCy?: string
  poster?: string | null
  autoplay?: boolean
  autoRotate?: boolean
  cameraControls?: boolean
  name?: string
  ar?: boolean
  arScale?: string
  className?: string
  exposure?: string
  shadowIntensity?: string
  shadowSoftness?: string
  progressBarColor?: string
  progressBarPosition?: string
  children?: ReactNode
  componentDidMount?: () => void
  onClick?: () => void
  waterMarkPosition?: 'bottomLeft' | 'bottomRight' | 'bottomCenter'
  pan?: boolean
  reveal?: 'auto' | 'interaction'
}

export interface PopupViewerProps extends ViewerProps {
  exitImgSrc?: string
  expandImgSrc?: string
  popup?: boolean
  children?: ReactNode
}
