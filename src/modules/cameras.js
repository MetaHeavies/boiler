import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function createCamera(cameraFOV, sizes, scene) {
    
    const camera = new THREE.PerspectiveCamera(cameraFOV, sizes.width / sizes.height, 1, 1000)
    camera.position.set(0,50,0)

    scene.add(camera)

    return camera
}

export function createOrbitControls(camera, renderer) {

    const controls = new OrbitControls(camera, renderer)

    controls.enabled = true 
    controls.enableDamping = true
    controls.dampingFactor = 0.04
    controls.minDistance = 0
    controls.enableRotate = true
    controls.enableZoom = true
    controls.maxPolarAngle = Math.PI / 2

    return controls
}