import React from 'react'

import ARLink from './components/ARLink'
import ModelViewer from './components/ModelViewer'
import QRCode from './components/QRCode'

const glb = 'https://integrations.r2u.io/woodprime/products/33461.glb'
const usdz = 'https://integrations.r2u.io/woodprime/products/33461.usdz'

const url = `https://viewer.r2u.io/?glb=${encodeURIComponent(
  glb
)}&usdz=${encodeURIComponent(usdz)}`

const poster =
  'https://storage.googleapis.com/invoker2u-public/thumbnails/64519794-9259-47aa-9fc8-0722d9da4046.jpg'
declare global {
  interface Window {
    onClickFunction: () => void
  }
}

const App: React.FC = () => {
  window.onClickFunction = () => undefined
  const onClick = () => {
    window.onClickFunction()
  }

  return (
    <div>
      <ARLink
        glb={glb}
        usdz={usdz}
        fallbackOptions={{
          alertMessage: 'This device does not support AR',
          fallback: 'viewer',
        }}
      >
        <button type="button">Veja em 3D</button>
      </ARLink>

      <div
        className="viewer"
        data-cy="first-viewer"
        style={{ width: '800px', height: '500px', marginBottom: '50px' }}
      >
        <ModelViewer
          glb={glb}
          popup={false}
          progressBarColor="#c5c5c5"
          progressBarPosition="top"
          autoRotate={false}
          onClick={onClick}
          waterMarkPosition="bottomRight"
          reveal="interaction"
          poster={poster}
        />
      </div>
      <div data-cy="qrCode">
        <QRCode url={url} />
      </div>
      <div
        className="viewer"
        data-cy="second-viewer"
        style={{ width: '800px', height: '500px' }}
      >
        <ModelViewer
          glb={glb}
          popup
          progressBarColor="#c5c5c5"
          progressBarPosition="middle"
          autoRotate={false}
          onClick={onClick}
          waterMarkPosition="bottomLeft"
        />
      </div>
    </div>
  )
}

export default App
