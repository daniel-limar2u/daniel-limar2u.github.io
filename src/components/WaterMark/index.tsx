import React from 'react'

import { Icon } from './styles'

interface Props {
  position?: string
}

const WaterMark: React.FC<Props> = ({ position }: Props) => {
  return (
    <Icon position={position}>
      <a
        href="https://r2u.io"
        target="_blank"
        rel="noopener noreferrer"
        data-cy="waterMark"
      >
        <img alt="" />
      </a>
    </Icon>
  )
}

export default WaterMark
