import React, { useEffect, useState } from 'react'
import ModalViewerFull from './Modal/ViewerFull'
import ModalViewer from './Modal/Viewer'
import { ARLinkProps } from './types'

// https://github.com/google/model-viewer/blob/master/packages/model-viewer/src/features/ar.ts

const ARLinkAndroid: React.FC<ARLinkProps> = ({
  resize = false,
  glb = '',
  linkRef = null,
  onClick = () => undefined,
  title,
  children,
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
  const modelUrl = new URL(glb as string)
  const scheme = modelUrl.protocol.replace(':', '')

  locationUrl.hash = noArViewerSigil

  const intentParams = `?file=${encodeURIComponent(
    modelUrl.toString()
  )}&mode=ar_only&link=${location}&title=${encodeURIComponent(title ?? '')}${
    resize ? '' : `&resizable=false`
  }`

  const intent = `intent://arvr.google.com/scene-viewer/1.0${intentParams}#Intent;scheme=${scheme};package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(
    locationUrl.toString()
  )};end;`

  const undoHashChange = () => {
    if (window.location.hash === noArViewerSigil) {
      window.location.hash = ''
    } else if (window.location.hash === '') {
      setFallbackInvoked(true)
      setClicked(true)
    }
  }

  window.addEventListener('hashchange', undoHashChange)

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
    <a ref={linkRef} rel="ar" href={intent} onClick={onClick}>
      <img alt="" />
      {children}
    </a>
  )
}

export default ARLinkAndroid
