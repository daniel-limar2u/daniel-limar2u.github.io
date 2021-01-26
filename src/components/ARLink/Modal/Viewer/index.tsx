import React from 'react'

import { Content } from './styles'

import ModelViewer from '../../../ModelViewer'
import Canvas from '../Canvas'
import WaterMark from '../../../WaterMark'
import { ViewerText } from '../../types'

interface Props {
  onClose: () => void
  glb: string
  text?: ViewerText
}

const defaultText: ViewerText = {
  title: <>Dispositivo não compatível</>,
  top: (
    <>
      Sentimos muito, mas infelizmente seu dispositivo
      <br />
      <b> não é compatível </b>
      <br />
      com a visualização em Realidade Aumentada.
    </>
  ),
  bottom: (
    <>
      Utilize o modelo 3D acima para
      <b> visualizar todos os detalhes!</b>
    </>
  ),
}

// TODO: add i18n

const ModalViewer: React.FC<Props> = ({
  glb,
  onClose,
  text = defaultText,
}: Props) => {
  return (
    <Canvas onClose={onClose} exit>
      <Content>
        <div className="text error">{text.title}</div>
        <div className="text top">{text.top}</div>
        <div className="fallback-viewer-container">
          <ModelViewer glb={glb} popup={false} />
        </div>
        <div className="text bottom">{text.bottom}</div>
        <div className="watermark">
          <WaterMark position="centerAbsolute" />
        </div>
      </Content>
    </Canvas>
  )
}

export default ModalViewer
