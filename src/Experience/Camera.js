import React, { useRef,useEffect,useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrthographicCamera, PerspectiveCamera, useHelper } from '@react-three/drei';
import { CameraHelper } from 'three';
import * as THREE from "three"
import { lerp } from 'three/src/math/MathUtils';
import GSAP from 'gsap';

export default function Camera() {
  const {gl, scene} = useThree();
  console.log(scene);
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
  

//   const onMouseMove = (e) => {
//     const rotation = ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
//     setLerp({
//       ...lerp,
//       target : rotation*0.05,
//     });
//     const current = GSAP.utils.interpolate(
//       lerp.current,
//       lerp.target,
//       lerp.ease
//     )
//     scene.rotation.y = current;
//     console.log(lerp);

//   }
  
// useEffect(() => {
//   window.addEventListener('mousemove', onMouseMove);
//   return () => {
//     window.removeEventListener('mousemove', onMouseMove);
//   };
// }, [lerp]);

// useFrame(() => {
  
// },1)
  return (
    <>
      <PerspectiveCamera
        // makeDefault
        ref={perspectiveCameraRef}
        fov={35}
        aspect={width / height}
        near={0.1}
        far={1000}
        position={[50, -10, 50]}
      />
      <OrthographicCamera
        makeDefault
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
