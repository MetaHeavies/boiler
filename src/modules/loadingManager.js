import * as THREE from 'three'

export function createLoadingManager() {

    const loadingManager = new THREE.LoadingManager()

    const progressBarWrap = document.querySelector('.progress-bar-wrap')
    const progressBar = document.getElementById('progress-bar')

    const isLoaded = () => progressBarWrap.classList.contains('loaded')


    loadingManager.onStart = function (url, item, total) {
        console.log(`Started loading ${url}`)
    }

    loadingManager.onProgress = function (url, loaded, total) {
        progressBar.value = (loaded / total) * 100    
    }

    loadingManager.onLoad = function () { 
        progressBarWrap.classList.add('loaded')

        progressBar.style.display = "none"

        setTimeout(() => {
            progressBarWrap.parentNode.removeChild(progressBarWrap);
        }, 4000);           
    }

    loadingManager.onError = function (url) {
        console.log(`Problem loading ${url}`)
    }

    return loadingManager
}