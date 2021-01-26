import React, { useState } from 'react'
import ModalSocial from './Modal/Social'

import { ARLinkProps } from './types'

const ARLinkSocial: React.FC<ARLinkProps> = ({
  onClick = () => undefined,
  children,
}: ARLinkProps) => {
  const [clicked, setClicked] = useState(false)

  const onClickAnchor = () => {
    onClick()
    setClicked(true)
  }

  if (clicked) {
    return <ModalSocial onClose={() => setClicked(false)} />
  }

  return (
    <div data-cy="social-button" role="none" onClick={onClickAnchor}>
      {children}
    </div>
  )
}

export default ARLinkSocial
