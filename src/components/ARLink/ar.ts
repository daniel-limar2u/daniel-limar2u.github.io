import { Scene, WebGLRenderer, PerspectiveCamera } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

async function activateAR(glb: string) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const scene = new Scene()
  const camera = new PerspectiveCamera()
  scene.add(camera)
  camera.position.set(0, 1, 0)
  const renderer = new WebGLRenderer({ alpha: true })
  renderer.autoClear = false
  container.appendChild(renderer.domElement)

  // Add custom content

  const loader = new GLTFLoader()
  loader.load(
    glb,
    function (gltf) {
      scene.add(gltf.scene)
    },
    undefined,
    function (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  )

  // End custom content
  /* const session = await navigator.xr.requestSession('immersive-vr')
  console.log(session)
  const worldRefSpace = await session.requestReferenceSpace('immersive-vr')
  console.log(worldRefSpace)
  session.requestAnimationFrame(renderer) */

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(function () {
    renderer.render(scene, camera)
  })
}

export default activateAR
