import { ModelViewerElement } from '../types'
// reference code found on https://modelviewer.dev/examples/stagingandcameras/index.html#panning

function addPanEventListeners(modelViewer: ModelViewerElement): void {
  const tapDistance = 2
  let panning = false
  let panX: number[]
  let panY: number[]
  let startX: number
  let startY: number
  let lastX: number
  let lastY: number
  let metersPerPixel: number

  const startPan = () => {
    const orbit = modelViewer.getCameraOrbit()
    const { theta, phi, radius } = orbit
    metersPerPixel =
      (0.75 * radius) / modelViewer.getBoundingClientRect().height
    panX = [-Math.cos(theta), 0, Math.sin(theta)]
    panY = [
      -Math.cos(phi) * Math.sin(theta),
      Math.sin(phi),
      -Math.cos(phi) * Math.cos(theta),
    ]
    // eslint-disable-next-line no-param-reassign
    modelViewer.interactionPrompt = 'none'
  }

  const movePan = (thisX: number, thisY: number) => {
    const dx = (thisX - lastX) * metersPerPixel
    const dy = (thisY - lastY) * metersPerPixel
    lastX = thisX
    lastY = thisY

    const target = modelViewer.getCameraTarget()
    target.x += dx * panX[0] + dy * panY[0]
    target.y += dx * panX[1] + dy * panY[1]
    target.z += dx * panX[2] + dy * panY[2]
    // eslint-disable-next-line no-param-reassign
    modelViewer.cameraTarget = `${target.x}m ${target.y}m ${target.z}m`
  }

  const recenter = (pointer: { clientX: number; clientY: number }) => {
    panning = false
    if (
      Math.abs(pointer.clientX - startX) > tapDistance ||
      Math.abs(pointer.clientY - startY) > tapDistance
    )
      return
    const rect = modelViewer.getBoundingClientRect()

    const x = pointer.clientX - rect.left
    const y = pointer.clientY - rect.top
    const hit = modelViewer.positionAndNormalFromPoint(x, y)

    // eslint-disable-next-line no-param-reassign
    modelViewer.cameraTarget =
      hit === null ? 'auto auto auto' : hit.position.toString()
  }

  modelViewer.addEventListener(
    'pointerup',
    ((event: TouchEvent & MouseEvent) => {
      const pointer = event.clientX ? event : event.changedTouches[0]
      if (
        Math.abs(pointer.clientX - startX) < tapDistance &&
        Math.abs(pointer.clientY - startY) < tapDistance
      ) {
        recenter(pointer)
      }
      panning = false
    }) as EventListener,
    true
  )

  modelViewer.addEventListener(
    'mousedown',
    ((event: MouseEvent) => {
      startX = event.clientX
      startY = event.clientY
      panning =
        event.button === 2 || event.ctrlKey || event.metaKey || event.shiftKey
      if (!panning) return

      lastX = startX
      lastY = startY
      startPan()
      event.stopPropagation()
    }) as EventListener,
    true
  )

  modelViewer.addEventListener(
    'contextmenu',
    (e) => {
      e.preventDefault()
    },
    false
  )

  modelViewer.addEventListener(
    'touchstart',
    ((event: TouchEvent) => {
      startX = event.touches[0].clientX
      startY = event.touches[0].clientY
      panning = event.touches.length === 2
      if (!panning) return

      const { touches } = event
      lastX = 0.5 * (touches[0].clientX + touches[1].clientX)
      lastY = 0.5 * (touches[0].clientY + touches[1].clientY)
      startPan()
    }) as EventListener,
    true
  )

  modelViewer.addEventListener(
    'mousemove',
    ((event: MouseEvent) => {
      if (!panning) return

      movePan(event.clientX, event.clientY)
      event.stopPropagation()
    }) as EventListener,
    true
  )

  modelViewer.addEventListener(
    'touchmove',
    ((event: TouchEvent) => {
      if (!panning || event.touches.length !== 2) return

      const { touches } = event
      const thisX = 0.5 * (touches[0].clientX + touches[1].clientX)
      const thisY = 0.5 * (touches[0].clientY + touches[1].clientY)
      movePan(thisX, thisY)
    }) as EventListener,
    true
  )
  modelViewer.addEventListener(
    'mouseup',
    ((event: MouseEvent) => {
      recenter(event)
    }) as EventListener,
    true
  )

  modelViewer.addEventListener(
    'touchend',
    ((event: TouchEvent) => {
      if (event.touches.length === 0) {
        recenter(event.changedTouches[0])
      }
    }) as EventListener,
    true
  )
}

export default addPanEventListeners
