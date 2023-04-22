import * as THREE from 'three'

export function createPlaceholder(scene) {

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const placeHolder = new THREE.Mesh( geometry, material );
    scene.add( placeHolder );

    return placeHolder
}