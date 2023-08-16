import * as THREE from 'three'

// 创建一个场景
const scene = new THREE.Scene()
// 创建一个几何体
const geometry = new THREE.BoxGeometry(50,50,50)
// 创建材质
const material = new THREE.MeshBasicMaterial({
  color:0xff0000,
  transparent:true,
  opacity:0.5
})
// 创建一个物体
const mesh = new THREE.Mesh(geometry,material)
// 设置物体在场景中的位置
mesh.position.set(0,10,10)
// 将物体添加到场景中
scene.add(mesh)
// 创建相机，四个参数：角度、宽高比、近端点、远端点
const camera = new THREE.PerspectiveCamera(30, 400 / 300, 0.1, 2000);
// 设置相机的位置  // 先设置相机的位置，再设置相机聚焦的位置
camera.position.set(200, 200, 200);
// 设置相机聚焦的位置为坐标原点
camera.lookAt(0, 0, 0);
//创建渲染器
const renderer = new THREE.WebGLRenderer();
//设置大小
renderer.setSize(400, 300);
//将场景和相机交给渲染器
renderer.render(scene, camera);
// 将渲染器添加到html当中
document.querySelector("#webgl").appendChild(renderer.domElement);
