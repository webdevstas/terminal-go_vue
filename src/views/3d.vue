<template>
  <div id="scene" />
</template>

<script>
/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {defineComponent} from "vue"

export default defineComponent({
  mounted () {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(devicePixelRatio)
    document.getElementById('scene').appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.screenSpacePanning = true
    controls.target.set(0, 1, 0)

    let mixer
    const animationActions = []
    let activeAction
    let lastAction
    let modelReady = false
    const fbxLoader = new FBXLoader()

    fbxLoader.load('Test (2).fbx', (object) => {
      console.log('Loaded')
      // object.traverse(function (child) {
      // if (child.isMesh) {
      //   child.material = cubeMaterial
      //   if (child.material) {
      //     child.material.transparent = false
      //   }
      // }
      // })
      object.position.set(0, 0, 0)
      object.scale.set(0.001, 0.001, 0.001)

      mixer = new THREE.AnimationMixer(object)
      const animationAction = mixer.clipAction(object.animations[0])
      animationActions.push(animationAction)
      activeAction = animationActions[0]
      modelReady = true
      // animationAction.play()
      scene.add(object)
    }, (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    }, (error) => {
      console.log(error)
    })

    const light = new THREE.AmbientLight(0x404040)
    scene.add(light)

    const frontLight = new THREE.PointLight('#fff', 1, 300)
    frontLight.position.set(2, 10, 7)
    frontLight.rotation.y = -0.05
    scene.add(frontLight)

    const backLight = new THREE.PointLight('#fff', 1, 300)
    backLight.position.set(0, 10, -12)
    backLight.rotation.y = 0.05
    scene.add(backLight)

    camera.position.set(4, 1, 7)

    camera.rotation.y = 0.6

    const clock = new THREE.Clock()

    const animate = function () {
      requestAnimationFrame(animate)
      controls.update()
      if (modelReady) {
        mixer.update(clock.getDelta())
      }
      renderer.render(scene, camera)
    }
    animate()
  }
})
</script>

<style scoped>

</style>
