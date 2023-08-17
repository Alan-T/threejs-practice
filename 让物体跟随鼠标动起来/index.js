import * as THREE from 'three'
// 引入轨道控制器扩展库OrbitControls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// 创建一个三维场景，相当于一个画布
const scene = new THREE.Scene()

// 创建一个几何体，相当于在画布上想要呈现的物体
const geometry = new THREE.BoxGeometry(50,50,50)

// 创建材质，相当于画画时的颜料
const material = new THREE.MeshBasicMaterial({
  color:0xff0000,//设置颜色
  transparent:true,//开启透明
  opacity:0.5//设置透明度
})
// // 添加辅助坐标轴
// const axeshelper = new THREE.AxesHelper(100)
// scene.add(axeshelper)

// 创建物体,相当于在画物体的过程，将上面的几何体和材质结合起来形成物体
const mesh = new THREE.Mesh(geometry,material)
// 设置物体在场景中的位置
mesh.position.set(0,10,0)
// 将物体添加到场景中，相当于将物体添加到画布汇总
scene.add(mesh)
// console.log(mesh);

// 创建一个相机，相机相当于画家的眼睛，
// PerspectiveCamera 透视相机：有四个参数，fov：视角，aspect:宽高比，一般定位为相机照射物体的宽高比值，
// near：近端点，离相机最近的点，far：远端点，离相机最远的点
const width = 400
const height = 300
const camera = new THREE.PerspectiveCamera(30,width/height,0.1,3000)
// 设置相机的位置，即画家的眼睛离画布的位置
camera.position.set(200,200,200)
// 设置相机要看的位置，即眼睛要看的物体的位置
// 相机看原点
// camera.lookAt(0,0,0)
// 相机看向物体
camera.lookAt(mesh.position)
// 创建webgl渲染器
const renderer = new THREE.WebGLRenderer()
// canvas画布宽高
renderer.setSize(width,height)
// 执行渲染操作，将scene和camera关联起来，
// 相当于太阳，你有一个空间scene，空间中有物体，有人的眼睛camera，但是没有光是看不到物体的
renderer.render(scene,camera)
// 把渲染结果canvas画布，添加到网页上
// document.body.appendChild(renderer.domElement)
document.getElementById('webgl').appendChild(renderer.domElement)

// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera,renderer.domElement)
// 监听轨道控制器的change事件，监听到改变时，重新执行渲染操作渲染三维场景
controls.addEventListener('change',function(){
  renderer.render(scene,camera)
})

