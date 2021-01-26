import React, { useEffect, useState } from 'react'
import ModalViewerFull from './Modal/ViewerFull'
import ModalViewer from './Modal/Viewer'
import { ARLinkProps } from './types'

const ARLinkIOS: React.FC<ARLinkProps> = ({
  resize = false,
  glb = '',
  usdz = '',
  linkRef = null,
  onClick = () => undefined,
  children,
  fallbackOptions,
}: ARLinkProps) => {
  const a = document.createElement('a')
  const supportsAr = a.relList.supports('ar')

  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (fallbackOptions?.alertMessage && !supportsAr && clicked) {
      // eslint-disable-next-line no-alert
      alert(fallbackOptions.alertMessage)
    }
  }, [clicked])

  const onClickAnchor = (e: { preventDefault: () => void }) => {
    setClicked(true)
    onClick()
    if (!supportsAr) {
      e.preventDefault()
    }
  }

  if (fallbackOptions?.fallback && !supportsAr && clicked) {
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
    <a
      ref={linkRef}
      rel="ar"
      href={`${usdz}${resize ? '' : '#allowsContentScaling=0'}`}
      onClick={onClickAnchor}
    >
      <img alt="" />
      {children}
    </a>
  )
}

export default ARLinkIOS
