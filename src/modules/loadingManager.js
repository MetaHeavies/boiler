import * as THREE from 'three'

export function createLoadingManager() {

    const loadingManager = new THREE.LoadingManager()

    const progressBarWrap = document.querySelector('.progress-bar-wrap')
    const progressBar = document.getElementById('progress-bar')

    loadingManager.onStart = function (url, item, total) {
        console.log(`Started loading ${url}`)
    }

    loadingManager.onProgress = function (url, loaded, total) {
        progressBar.value = (loaded / total) * 100    
    }

    loadingManager.onLoad = function () {
        console.log('remove')
        progressBarWrap.style.display = 'none'
    }

    loadingManager.onError = function (url) {
        console.log(`Problem loading ${url}`)
    }

    return loadingManager
}