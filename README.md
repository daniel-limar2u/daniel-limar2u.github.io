# React AR Components

React components for Augmented Reality on the web.

### Components

- ModelViewer: used to interact with a 3D model on the browser (desktop)
- ARLink: similar to an `a`nchor tag (mobile)
- ARButton: similar to a `button` tag (mobile)
- ARImage: similar to an `img` tag (mobile)
- ARCarousel: similar to a carousel component to interact with multiple 3D models (mobile, desktop)

##### ModelViewer

| param                 | description                                                           | default                                                                   |
| --------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `style`               | object containing custom CSS classes to customize this component      | `{ modelViewerSmall: '', modelViewerBig: '', modelViewerBackground: '' }` |
| `onClick`             | function to handle click event                                        | `() => undefined`                                                         |
| `componentDidMount`   | funciton to handle mount event                                        | `() => undefined`                                                         |
| `name`                | model name                                                            | `''`                                                                      |
| `progressBarPosition` | progress bar position (`'top'`, `'middle'` or `'bottom'`)             | `'top'`                                                                   |
| `progressBarColor`    | progress bar color (`'gray'`, `'rgba(89, 84, 84, 0.6)'`, `'#c5c5c5'`) | `null`                                                                    |
| `exposure`            | controls the exposure of both the model and skybox                    | '0.5'                                                                     |
| `shadowIntensity`     | opacity of the shadow                                                 | '1'                                                                       |
| `shadowSoftness`      | blurriness of the shadow                                              | '0'                                                                       |
| `poster`              | image url displayed before loading the model                          | `null`                                                                    |
| `glb`                 | url of the GLB file for desktop devices                               | `''`                                                                      |
| `autoRotate`          | determines if the model will rotate automatically                     | `true`                                                                    |
| `cameraControls`      | determines if the user will control the camera                        | `true`                                                                    |
| `popup`               | determines if the viewer will be able to open a popup window          | `true`                                                                    |
| `onToggle`            | function to handle popup toggle event                                 | `''`                                                                      |
| `pan`                 | determines if the model will have pan interaction                     | `true`                                                                    |

##### ARLink

| param               | description                                                      | default           |
| ------------------- | ---------------------------------------------------------------- | ----------------- |
| `style`             | object containing custom CSS classes to customize this component | `{ link : '' }`   |
| `onClick`           | function to handle click event                                   | `() => undefined` |
| `componentDidMount` | funciton to handle mount event                                   | `() => undefined` |
| `usdz`              | url of the USDZ file for iOS devices                             | `''`              |
| `glb`               | url of the GLB file for Android devices                          | `''`              |
| `name`              | model name                                                       | `''`              |
| `resize`            | determines if model allows rescale                               | `false`           |

##### ARButton

| param     | description                                                      | default                        |
| --------- | ---------------------------------------------------------------- | ------------------------------ |
| `style`   | object containing custom CSS classes to customize this component | `{ container : '', text: '' }` |
| `...rest` | same as `ARLink`                                                 |                                |

##### ARImage

| param     | description      | default |
| --------- | ---------------- | ------- |
| `...rest` | same as `ARLink` |         |

The `ARImage` component adds a transparent overlay on top of an existing `img`, which is why it should be mounted as a child of an enclosing container.

##### ARCarousel

| param     | description                           | default |
| --------- | ------------------------------------- | ------- |
| `glbs`    | array of GLB urls for desktop devices | `[]`    |
| `...rest` | same as `ModelViewer`                 |         |

### Example

```jsx
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import '@google/model-viewer'
import {
  ARImage,
  ModelViewer,
  ARButton,
  ARCarousel,
  ARLink,
} from '@real2u/react-ar-components'

import style from './style.module.css'
const usdz = 'http://localhost:8080/mesh_01000.usdz'
const glb = 'http://localhost:8080/mesh_01000.glb'
const imageUrl = 'https://via.placeholder.com/150'

const App = () => (
  <div>
    <div>
      <h1>ARLink</h1>
      <ARLink glb={glb} usdz={usdz}>
        View in 3D
      </ARLink>
    </div>
    <div>
      <h1>ARImage</h1>
      <div style={{ width: '200px' }}>
        <img src={imageUrl} alt="3D model" style={{ width: '100%' }} />
        <ARImage glb={glb} usdz={usdz} style={style} />
      </div>
    </div>
    <div>
      <h1>ModelViewer</h1>
      <ModelViewer glb={glb} name="3D model" style={style} />
    </div>
    <div>
      <h1>ARButton</h1>
      <ARButton glb={glb} usdz={usdz} text="View in 3D" style={style} />
    </div>
    <div>
      <h1>ARCarousel</h1>
      <ARCarousel glbs={[glb, glb, glb]} style={style} />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
```

### Local Testing

- Start local webpack server with `yarn dev`
- Access `http://localhost:8080`
- Or expose local port if testing on another device or on mobile
  - Ex: using [ngrok](https://ngrok.com/)
  - Access exposed link
  - If receiving `Invalid Host header`, run:
    - `yarn dev --disable-host-check`
