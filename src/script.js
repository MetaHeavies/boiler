///////////////////////////////////////
/// Load basic dependencies
import './main.css'

///////////////////////////////////////
/// Load Three dependencies
import * as THREE from 'three';

///////////////////////////////////////
/// Load project modules
import * as setup from './modules/setup.js'
import { debug } from './modules/debug.js'
import { createLoadingManager } from './modules/loadingManager.js'
import { createRenderer, createResizeHandler } from './modules/renderer.js'
import { createCamera, createOrbitControls} from './modules/cameras.js'
import { createLights } from './modules/lights.js'
import { createEnvironment } from './modules/environment.js'
import { loadModels } from './modules/model.js';
import { createPlaceholder } from './modules/placeholder.js'
import { createFloor } from './modules/floor.js'

///////////////////////////////////////
/// Set basic parameters
const setupParams = {
    modelPath: '/models/gltf/truck.gltf',
    showModel: true,
    envTexture: 'models/textures/empty_warehouse_01_4k.hdr',
    showEnv: false,
    showFloor: true,
    showPlaceholder: false,
    cameraFOV: 50,
}

///////////////////////////////////////
/// Load sizes
const loadingManager = new createLoadingManager()

///////////////////////////////////////
/// Load sizes
const sizes = new setup.sizes()

///////////////////////////////////////
/// Create canvas
const canvas = new setup.canvas

///////////////////////////////////////
/// Create scene
const scene = new setup.scene
scene.background = new THREE.Color('#1c1c21')

///////////////////////////////////////
/// Create basic camera
const camera = createCamera(setupParams.cameraFOV, sizes, scene)

///////////////////////////////////////
/// Create 2 basic lights
const { ambientLight, directionalLight } = createLights(scene);

///////////////////////////////////////
/// Create renderer
const renderer = createRenderer(canvas, sizes)

///////////////////////////////////////
/// Create resize handler
const resize = createResizeHandler(camera, sizes, renderer)

///////////////////////////////////////
/// Create HDRI evnironmnet

if (setupParams.showEnv == true) {

    const environment = createEnvironment(setupParams.envTexture, scene, renderer, loadingManager)
}

///////////////////////////////////////
/// Load orbit controls
const controls = new createOrbitControls(camera, renderer.domElement)

///////////////////////////////////////
/// Load model or placeholder geometry
if (setupParams.showModel == true) {

    const model = new loadModels(setupParams.modelPath, scene, loadingManager)
}

if (setupParams.showPlaceholder == true) {

    const placeHolder = new createPlaceholder(scene)
}

if (setupParams.showFloor == true) {

    const floor = new createFloor(scene)
}

///////////////////////////////////////
/// Load basic debug GUI
const debugScene = debug(camera, ambientLight, directionalLight, scene)

///////////////////////////////////////
/// Animate render
function animate() {

    controls.update() // update orbit controls
	renderer.render( scene, camera )

    requestAnimationFrame( animate )
}

animate();