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

    loader.load(modelPath, function (model) {

        model.scene.traverse((o) => {
    
            if (o.isMesh) { 
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