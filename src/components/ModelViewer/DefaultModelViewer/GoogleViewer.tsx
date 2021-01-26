import React, { useEffect, useRef, useState } from 'react'

import { ModelViewerElement, ViewerProps } from '../types'
import ProgressBar from './ProgressBar'
import WaterMark from '../../WaterMark'
import addPanEventListeners from './pan'

// eslint-disable-next-line no-unused-expressions
customElements.get('model-viewer') ||
  import(/* webpackMode: "eager" */ '@google/model-viewer/dist/model-viewer')

const GoogleViewer: React.FC<ViewerProps> = (props: ViewerProps) => {
  const {
    glb = '',
    className,
    big = false,
    dataCy = 'model-viewer',
    poster = null,
    name = '',
    exposure = '0.5',
    shadowIntensity = '1',
    shadowSoftness = '0',
    progressBarColor,
    progressBarPosition = 'top',
    autoRotate = true,
    cameraControls = true,
    ar = false,
    arScale,
    children,
    componentDidMount = () => undefined,
    onClick = () => undefined,
    waterMarkPosition,
    pan = true,
    reveal = 'auto',
  } = props

  const viewerRef = useRef<ModelViewerElement>(null)

  const [showProgress, setShowProgress] = useState(true)
  const [scaleBar, setScaleBar] = useState(0)

  useEffect(() => {
    componentDidMount()
  }, [])

  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.addEventListener('progress', ((event: CustomEvent) => {
        const { totalProgress } = event.detail
        setShowProgress(totalProgress < 1)
        setScaleBar(totalProgress)
      }) as EventListener)

      if (big)
        viewerRef.current.addEventListener('mousedown', ((event: Event) => {
          event.preventDefault()
          event.stopPropagation()
          event.stopImmediatePropagation()
          return false
        }) as EventListener)

      if (pan) {
        addPanEventListeners(viewerRef.current)
      }
    }

    const removeEventListenerRef = viewerRef

    return () => {
      removeEventListenerRef.current?.removeEventListener(
        'progress',
        () => undefined
      )
      removeEventListenerRef.current?.removeEventListener(
        'load',
        () => undefined
      )
    }
  }, [])

  return (
    <model-viewer
      class={className}
      ref={viewerRef}
      src={glb}
      poster={poster}
      alt={name}
      exposure={exposure}
      shadow-intensity={shadowIntensity}
      shadow-softness={shadowSoftness}
      {...(ar ? { ar: '' } : {})}
      {...(autoRotate ? { 'auto-rotate': '' } : {})}
      {...(cameraControls ? { 'camera-controls': '' } : {})}
      interaction-prompt-threshold={500}
      onClick={onClick}
      data-js-focus-visible
      autoplay
      ar
      ar-scale={arScale}
      data-cy={dataCy}
      reveal={reveal}
      id="model-viewer"
      ar-placement="wall"
    >
      {children}
      <ProgressBar
        progressBarColor={progressBarColor}
        progressBarPosition={progressBarPosition}
        showProgress={showProgress}
        scaleBar={scaleBar}
      />
      {waterMarkPosition && <WaterMark position={waterMarkPosition} />}
      <button type="button" slot="ar-button" style={{ visibility: 'hidden' }}>
        Activate AR
      </button>
    </model-viewer>
  )
}

export default GoogleViewer
