import "./style.css";
import * as THREE from "three";

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
let prevTime = Date.now();

// Animation
const tick = () => {
  // Current time
  const curTime = Date.now();
  const delta = curTime - prevTime;
  prevTime = curTime;

  // Update
  mesh.rotation.y += 0.001 * delta;
  mesh.rotation.z += 0.004 * delta;
  mesh.position.z -= 0.0005 * delta;

  // Rerender
  renderer.render(scene, camera);

  globalThis.requestAnimationFrame(tick);
};

tick();
