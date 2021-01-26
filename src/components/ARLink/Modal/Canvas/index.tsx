import React, { ReactNode, useState } from 'react'

import { Background, Exit, GlobalStyle } from './styles'

import exitImage from './exit-icon.svg'

interface Props {
  // eslint-disable-next-line react/require-default-props
  exit?: boolean
  children?: ReactNode
  onClose: () => void
  color?: string
}

const Canvas: React.FC<Props> = ({
  exit = false,
  children,
  onClose,
  color = 'white',
}: Props) => {
  const [expanded, setExpanded] = useState(true)

  const toggle = () => {
    setExpanded(!expanded)
    onClose()
  }

  return (
    <Background expanded={expanded} color={color}>
      <GlobalStyle expanded={expanded} />
      {exit && (
        <Exit type="button" onClick={toggle} data-cy="exit-button">
          <img alt="" src={exitImage} />
        </Exit>
      )}
      {children}
    </Background>
  )
}

export default Canvas
