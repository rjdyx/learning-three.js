import '../../main'
import '@config/setRem' // 设置html的font-size
import '@assets/css/index.less'
import * as THREE from 'three'

import { autoResizeMixinInit } from './fullScreen' // 全屏

$(function () {
  autoResizeMixinInit()
  /* eslint-disable new-cap */
  const scene = new THREE.Scene()
  const camere = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
  camere.position.set(0, 0, 100)
  camere.lookAt(0, 0, 0)
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('dv-full-screen-container').appendChild(renderer.domElement)

  // const geometry = new THREE.BoxGeometry(1, 1, 1)
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  // const cube = new THREE.Mesh(geometry, material)

  // const geometry = new THREE.BufferGeometry()
  // // 创建一个简单的矩形. 在这里我们左上和右下顶点被复制了两次。
  // // 因为在两个三角面片里，这两个顶点都需要被用到。
  // const vertices = new Float32Array([
  //   -1.0, -1.0, 1.0,
  //   1.0, -1.0, 1.0,
  //   1.0, 1.0, 1.0,
  //   1.0, 1.0, 1.0,
  //   -1.0, 1.0, 1.0,
  //   -1.0, -1.0, 1.0
  // ])

  // // itemSize = 3 因为每个顶点都是一个三元组。
  // geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  // const cube = new THREE.Mesh(geometry, material)

  // scene.add(cube)
  // camere.position.z = 5

  // function animate () {
  //   requestAnimationFrame(animate)
  //   cube.rotation.x += 0.01
  //   cube.rotation.y += 0.01
  //   renderer.render(scene, camere)
  // }

  // animate()

  const material = new THREE.LineBasicMaterial({ color: 0x0000ff })
  const geometry = new THREE.Geometry()
  geometry.vertices.push(new THREE.Vector3(-10, 0, 0))
  geometry.vertices.push(new THREE.Vector3(0, 10, 0))
  geometry.vertices.push(new THREE.Vector3(10, 0, 0))

  const line = new THREE.Line(geometry, material)

  scene.add(line)
  renderer.render(scene, camere)
})
