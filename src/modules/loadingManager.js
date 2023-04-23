import * as THREE from 'three'

export function createLoadingManager() {

    const loadingManager = new THREE.LoadingManager()

    const messageDiv = document.querySelector('.loading-message')
    const progressBarWrap = document.querySelector('.progress-bar-wrap')
    const progressBar = document.getElementById('progress-bar')
    const percentLoaded = document.querySelector('.percent-loaded')

    const isLoaded = () => progressBarWrap.classList.contains('loaded')


    loadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
        console.log('Loading files')
    }

    loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
        progressBar.value = (itemsLoaded / itemsTotal) * 100    
        percentLoaded.innerHTML = Math.round(itemsLoaded / itemsTotal * 100, 2)
        messageDiv.innerHTML =  itemsLoaded + ' of ' + itemsTotal + ' ' + url
    }

    loadingManager.onLoad = function () { 
        progressBarWrap.classList.add('loaded')
        progressBar.style.display = "none"
        messageDiv.style.display = "none"
        percentLoaded.style.display = "none"

        setTimeout(() => {
            progressBarWrap.parentNode.removeChild(progressBarWrap)
        }, 2500);           
    }

    loadingManager.onError = function (url) {
        console.log(`Problem loading ${url}`)
    }

    return loadingManager
}