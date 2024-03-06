import React, { useRef,useEffect,useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrthographicCamera, PerspectiveCamera, useHelper } from '@react-three/drei';
import { CameraHelper } from 'three';
import * as THREE from "three"
import { lerp } from 'three/src/math/MathUtils';
import GSAP from 'gsap';
import { useSize } from '../Context/SizesContext';

export default function Camera() {
  const {gl, scene} = useThree();
  const {sizes} = useSize(); 
  // console.log(scene);
  const perspectiveCameraRef = useRef();
  const orthographicCameraRef = useRef();
  // useHelper(orthographicCameraRef, CameraHelper, 1, 'hotpink')
 
  const pixelRatio = Math.min(window.devicePixelRatio, 2);
  const handleResize = () => {
    const orthographicCamera = orthographicCameraRef.current;
        orthographicCamera.left =
            (-sizes.aspect * sizes.frustrum) / 2;
        orthographicCamera.right =
            (sizes.aspect * sizes.frustrum) / 2;
        orthographicCamera.top = sizes.frustrum / 2;
        orthographicCamera.bottom = -sizes.frustrum / 2;
        orthographicCamera.updateProjectionMatrix();
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sizes]);
  
  return (
    <>
      <PerspectiveCamera
        // makeDefault
        ref={perspectiveCameraRef}
        fov={35}
        aspect={sizes.width / sizes.height}
        near={0.1}
        far={1000}
        position={[50, -10, 50]}
      />
      <OrthographicCamera
        makeDefault
        ref={orthographicCameraRef}
        left={(-sizes.aspect *sizes.frustrum) / 2}
        right={(sizes.aspect * sizes.frustrum) / 2}
        top={sizes.frustrum / 2}
        bottom={-sizes.frustrum / 2}
        near={-50}
        far={50}
        position={[0, 6, 10]}
        rotation={[-Math.PI / 6, 0, 0]}
      />
    </>
  );
}
