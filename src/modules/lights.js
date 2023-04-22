import * as THREE from 'three'

export function createLights(scene) {

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
 
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7)

  directionalLight.castShadow = true
  directionalLight.shadow.mapSize.width = 2048
  directionalLight.shadow.mapSize.height = 2048
  directionalLight.shadow.camera.far = 100
  directionalLight.shadow.camera.left = -50
  directionalLight.shadow.camera.top = 50
  directionalLight.shadow.camera.right = 50
  directionalLight.shadow.camera.bottom = - 50
  directionalLight.shadow.bias = -0.001
  directionalLight.position.set(20, 25, -30)

  scene.add(ambientLight, directionalLight)

  console.log ('Lights created')

  return { ambientLight, directionalLight }
}