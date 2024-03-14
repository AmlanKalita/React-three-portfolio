import React, { useRef,useEffect,useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrthographicCamera, PerspectiveCamera, useHelper } from '@react-three/drei';
import { CameraHelper } from 'three';
import * as THREE from "three"
import { lerp } from 'three/src/math/MathUtils';
import GSAP from 'gsap';
import { useVariables } from '../Context/GlobalContext';

export default function Camera() {
  const {camera} = useThree();
  const {sizes} = useVariables(); 
  const perspectiveCameraRef = useRef();
  const pixelRatio = Math.min(window.devicePixelRatio, 2);
  useEffect(()=>{
        camera.left =
            (-sizes.aspect * sizes.frustrum) / 2;
        camera.right =
            (sizes.aspect * sizes.frustrum) / 2;
        camera.top = sizes.frustrum / 2;
        camera.bottom = -sizes.frustrum / 2;
        camera.near = -50;
        camera.far = 50;
        camera.position.set(0,6,10);
        camera.rotation.set(-Math.PI/6,0,0);
        camera.updateProjectionMatrix();
  })
  const handleResize = () => {
        camera.left =
            (-sizes.aspect * sizes.frustrum) / 2;
        camera.right =
            (sizes.aspect * sizes.frustrum) / 2;
        camera.top = sizes.frustrum / 2;
        camera.bottom = -sizes.frustrum / 2;
        camera.updateProjectionMatrix();
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
        ref={perspectiveCameraRef}
        fov={35}
        aspect={sizes.width / sizes.height}
        near={0.1}
        far={1000}
        position={[50, -10, 50]}
      />
    </>
  );
}
