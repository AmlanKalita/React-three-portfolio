import React, { useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from "three";
import { useVariables } from '../Context/GlobalContext';
const Renderer = () => {
  const { gl, scene, camera, size } = useThree();
  const {sizes } = useVariables();
  // console.log(camera);
  // console.log(camera,"<---1");
    gl.setSize(sizes.width, sizes.height);
    gl.setPixelRatio(sizes.setPixelRatio);
    
    const resizeHandler = () => {
      gl.setSize(sizes.width, sizes.height);
      gl.setPixelRatio(sizes.setPixelRatio);
      gl.render(scene,camera)
    };
    useFrame(() => {
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    });

  // useEffect(() => {
  //   // Customize renderer properties
    
  // }, [gl]);

  return null; // No need to render anything from this component
}

export default Renderer;