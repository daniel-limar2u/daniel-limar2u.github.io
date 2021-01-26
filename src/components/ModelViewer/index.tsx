import React, { useState } from 'react'
import DefaultModelViewer from './DefaultModelViewer'

import { PopupViewerProps } from './types'
import { Background, Exit, Expand } from './styles'

import expandImage from './ExpandButtonImage.png'
import exitImage from './ExitButtonImage.png'

const ModelViewer: React.FC<PopupViewerProps> = (props: PopupViewerProps) => {
  const {
    exitImgSrc = exitImage,
    expandImgSrc = expandImage,
    popup = true,
    children = null,
  } = props

  const [expanded, setExpanded] = useState(false)

  const toggle = () => {
    setExpanded(!expanded)
  }

  return popup ? (
    <>
      <DefaultModelViewer {...props} dataCy="small-viewer">
        {children}
        <Expand type="button" onClick={toggle} data-cy="expand-button">
          <img alt="" src={expandImgSrc} />
        </Expand>
      </DefaultModelViewer>
      <Background expanded={expanded} onMouseDown={toggle} data-cy="modal">
        <DefaultModelViewer big {...props} dataCy="expanded-viewer">
          {children}
          <Exit type="button" onClick={toggle} data-cy="exit-button">
            <img alt="" src={exitImgSrc} />
          </Exit>
        </DefaultModelViewer>
      </Background>
    </>
  ) : (
    <DefaultModelViewer {...props} />
  )
}

export default ModelViewer
