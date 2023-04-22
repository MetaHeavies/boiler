import * as THREE from 'three'

export function createFloor(scene) {

    const geometry = new THREE.PlaneGeometry( 100, 100);
    const material = new THREE.MeshStandardMaterial( { 
        color: 0xffffff,
    } );

    const floor = new THREE.Mesh( geometry, material );

    floor.rotation.x = - Math.PI * 0.5
    floor.receiveShadow = true

    scene.add( floor );

    return floor
}