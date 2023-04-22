import * as THREE from 'three';

export function sizes() {

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    
    return sizes
}

export function canvas() {

    const canvas = document.querySelector('canvas.webgl')

    return canvas
}

export function scene() {

    const scene = new THREE.Scene();

    return scene
}

