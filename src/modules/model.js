import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export function loadModels(modelPath, scene, loadingManager) { 
    
    const dracoLoader = new DRACOLoader()
    const loader = new GLTFLoader(loadingManager)
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    dracoLoader.setDecoderConfig({ type: 'js' })
    loader.setDRACOLoader(dracoLoader)

    const model = ''

    const material = new THREE.MeshPhysicalMaterial({})
    material.reflectivity = 1
    material.transmission = 0
    material.roughness = 0.2
    material.metalness = 0
    material.clearcoat = 0.3
    material.clearcoatRoughness = 0.25
    material.color = new THREE.Color(0xffffff)
    material.ior = 1.2
    material.thickness = 10.0

    loader.load(modelPath, function (model) {

        model.scene.traverse((o) => {
    
            if (o.isMesh) { 
                o.material = material
                o.castShadow = true
                o.receiveShadow = true
                o.material.metalness = 0.5
                console.log(o.name)
            }
          })
        
        model.scene.position.set(0,0,0)
        scene.add(model.scene)
    })

    return model
}