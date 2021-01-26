import React from 'react'

import { ViewerDiv } from './styles'

import ModelViewer from '../../../ModelViewer'
import Canvas from '../Canvas'

interface Props {
  glb: string
  onClose: () => void
}

const ModalViewerFull: React.FC<Props> = ({ glb, onClose }: Props) => {
  return (
    <Canvas onClose={onClose} exit>
      <ViewerDiv>
        <ModelViewer glb={glb} popup={false} />
      </ViewerDiv>
    </Canvas>
  )
}

export default ModalViewerFull
