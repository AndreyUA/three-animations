import "./style.css";
import * as THREE from "three";
// import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshMatcapMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Previous time
// let prevTime = Date.now();

// Clock by three.js
const clock = new THREE.Clock();

// gsap.to(mesh.position, {
//   duration: 1,
//   delay: 1,
//   x: 2,
// });

// Animation
const tick = () => {
  // Current time
  // const curTime = Date.now();
  // const delta = curTime - prevTime;
  // prevTime = curTime;

  // Clock
  const elapsedTime = clock.getElapsedTime();

  // Update
  // mesh.rotation.y += 0.001 * delta;
  // mesh.rotation.z += 0.004 * delta;
  // mesh.position.z -= 0.0005 * delta;

  // Update with clock
  mesh.rotation.y = elapsedTime;
  mesh.rotation.z = elapsedTime;

  mesh.position.y = Math.sin(elapsedTime);
  mesh.position.x = Math.cos(elapsedTime);
  mesh.position.z = elapsedTime * -0.25;

  // Rerender
  renderer.render(scene, camera);

  globalThis.requestAnimationFrame(tick);
};

tick();
