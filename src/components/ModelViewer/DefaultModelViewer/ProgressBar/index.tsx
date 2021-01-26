import React from 'react'

import { Bar, Progress } from './styles'
import { Props } from './types'

const ProgressBar: React.FC<Props> = (props: Props) => {
  const {
    progressBarColor,
    progressBarPosition,
    showProgress,
    scaleBar,
  } = props

  return (
    <Progress
      show={showProgress}
      color={progressBarColor}
      position={progressBarPosition}
      slot="progress-bar"
      data-cy="progress-bar"
    >
      <Bar scale={scaleBar} />
    </Progress>
  )
}

export default ProgressBar
