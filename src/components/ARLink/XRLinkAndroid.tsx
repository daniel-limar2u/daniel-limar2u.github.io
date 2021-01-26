import React, { useEffect, useState } from 'react'

import ModalViewerFull from './Modal/ViewerFull'
import ModalViewer from './Modal/Viewer'
import { ARLinkProps } from './types'
import { ModelViewerElement } from '../ModelViewer/types'
import activateAR from './ar'
// https://github.com/google/model-viewer/blob/master/packages/model-viewer/src/features/ar.ts

const XRLinkAndroid: React.FC<ARLinkProps> = ({
  glb = '',
  onClick = () => undefined,
  fallbackOptions,
}: ARLinkProps) => {
  const noArViewerSigil = '#no-ar-fallback'

  const [fallbackInvoked, setFallbackInvoked] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (fallbackOptions?.alertMessage && fallbackInvoked && clicked) {
      // eslint-disable-next-line no-alert
      alert(fallbackOptions.alertMessage)
    }
  }, [fallbackInvoked, clicked])

  const location = window.location.toString()
  const locationUrl = new URL(location)

  locationUrl.hash = noArViewerSigil

  const undoHashChange = () => {
    if (window.location.hash === noArViewerSigil) {
      window.location.hash = ''
    } else if (window.location.hash === '') {
      setFallbackInvoked(true)
      setClicked(true)
    }
  }

  window.addEventListener('hashchange', undoHashChange)

  const activateXR = () => {
    const modelViewer = document.querySelector(
      '#model-viewer'
    ) as ModelViewerElement

    modelViewer.activateAR()
    // activateAR(glb)
  }

  if (fallbackOptions?.fallback && fallbackInvoked && clicked) {
    return fallbackOptions.fallback === 'full' ? (
      <ModalViewerFull onClose={() => setClicked(false)} glb={glb} />
    ) : (
      <ModalViewer
        onClose={() => setClicked(false)}
        glb={glb}
        text={fallbackOptions.text}
      />
    )
  }

  return (
    <button type="button" onClick={activateXR}>
      Veja em XR
    </button>
  )
}

export default XRLinkAndroid
