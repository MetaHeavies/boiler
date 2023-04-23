import * as THREE from 'three'

export function createLoadingManager() {

    const loadingManager = new THREE.LoadingManager()

    const messageDiv = document.querySelector('.loading-message')
    const progressBarWrap = document.querySelector('.progress-bar-wrap')
    const progressBar = document.getElementById('progress-bar')

    const isLoaded = () => progressBarWrap.classList.contains('loaded')


    loadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
        console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
    }

    loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
        progressBar.value = (itemsLoaded / itemsTotal) * 100    
        messageDiv.innerHTML = 'Loading ' + url + '<br>File ' + itemsLoaded + ' of ' + itemsTotal
    }

    loadingManager.onLoad = function () { 
        progressBarWrap.classList.add('loaded')
        progressBar.style.display = "none"
        messageDiv.style.display = "none"

        setTimeout(() => {
            progressBarWrap.parentNode.removeChild(progressBarWrap)
        }, 4000);           
    }

    loadingManager.onError = function (url) {
        console.log(`Problem loading ${url}`)
    }

    return loadingManager
}