import * as THREE from 'three';
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"

export function createEnvironment(envTexture, scene, renderer, loadingManager) {

    const rgbLoader = new RGBELoader(loadingManager)
    const envmaploader = new THREE.PMREMGenerator( renderer )

    rgbLoader.load(envTexture,  
        (hdrmap) => { 

            envmaploader.mapping = THREE.EquirectangularReflectionMapping 

            let envmap = envmaploader.fromCubemap(hdrmap)
            hdrmap.mapping = THREE.EquirectangularReflectionMapping;

            scene.background = hdrmap;
            scene.environment = hdrmap;
        }
    )

    return rgbLoader
}