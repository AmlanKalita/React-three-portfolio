import React, { useRef,useEffect,useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrthographicCamera, PerspectiveCamera, useHelper } from '@react-three/drei';
import { CameraHelper } from 'three';
import * as THREE from "three"
import { lerp } from 'three/src/math/MathUtils';
import GSAP from 'gsap';

export default function CameraPrc() {
  const {gl, scene} = useThree();
  const perspectiveCameraRef = useRef();
  const orthographicCameraRef = useRef();
  const [lerp, setLerp] = useState({
    current : 0,
    target : 0,
    ease : 0.1
  });
  useHelper(orthographicCameraRef, CameraHelper, 1, 'hotpink')
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width /height;
  const pixelRatio = Math.min(window.devicePixelRatio, 2);
  const frustrum = 5;
  
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0, 10),
    new THREE.Vector3(-5, 5, 5),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(5, -5, 5),
    new THREE.Vector3(10, 0, 10)
  ],true);
const handleScroll = (event)=>{
  const delta = event.deltaY;
  let newTarget = delta > 0 ? lerp.target + 0.1 : lerp.target - 0.1;
  newTarget = GSAP.utils.clamp(0,1,newTarget);
  let current = GSAP.utils.interpolate(
    lerp.current,
    lerp.target,
    lerp.ease
  )
  current = GSAP.utils.clamp(0,1,current)
  setLerp({
    ...lerp,
    target : newTarget,
    current : current

  })
  console.log(lerp,current);
  
  const orthographicCamera = orthographicCameraRef.current;
  if (orthographicCamera) {
    const cameraPosition = new THREE.Vector3(0,0,0);
    const cameraTarget = new THREE.Vector3(0,0,0);
    curve.getPointAt(lerp.current, cameraPosition);
    curve.getPointAt(lerp.current+0.00001, cameraTarget);
    orthographicCamera.position.copy(cameraPosition);
    orthographicCamera.lookAt(cameraTarget);
  }
  
};
useEffect(() => {
  window.addEventListener('wheel', handleScroll);
  return () => {
    window.removeEventListener('wheel', handleScroll);
  };
}, [lerp]);

useFrame(() => {
  gl.setViewport(0, 0, width, height);
        gl.render(scene, orthographicCameraRef.current);
        // Second Screen
        gl.setScissorTest(true);
        gl.setViewport(
            width - width / 3,
            height - height / 3,
            width / 3,
            height / 3
        );

        gl.setScissor(
            width - width / 3,
            height - height / 3,
            width / 3,
            height / 3
        );

        gl.render(scene, perspectiveCameraRef.current);

        gl.setScissorTest(false);
},1)
  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={perspectiveCameraRef}
        fov={35}
        aspect={width / height}
        near={0.1}
        far={1000}
        position={[50, -10, 50]}
      />
      <OrthographicCamera
        // makeDefault
        ref={orthographicCameraRef}
        left={(-aspect *frustrum) / 2}
        right={(aspect * frustrum) / 2}
        top={frustrum / 2}
        bottom={-frustrum / 2}
        near={-50}
        far={50}
        position={[0, 5.65, 10]}
        rotation={[-Math.PI / 6, 0, 0]}
      />
    </>
  );
}
