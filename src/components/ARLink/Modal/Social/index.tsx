/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { Content } from './styles'
import Canvas from '../Canvas'
import instructions from './instructions.png'

interface Props {
  onClose: () => void
}

const ModalSocial: React.FC<Props> = ({ onClose }: Props) => {
  return (
    <Canvas onClose={onClose} color="rgba(0, 0, 0, 0.3)">
      <Content data-cy="social-modal">
        <div className="balloon">
          <div className="info">
            <h2>
              Para visualizar a experiência,
              <br />
              abra essa página no
              <br />
              seu navegador
            </h2>
            <p>
              Clique no botão de <u>menu</u> localizado no
              <br />
              canto superior direito da tela e selecione
              <br />a opção de <u>abrir no navegador.</u>
            </p>
            <img src={instructions} alt="" />
          </div>
          <button type="button" onClick={onClose} data-cy="social-exit">
            OK
          </button>
        </div>
      </Content>
    </Canvas>
  )
}

export default ModalSocial
