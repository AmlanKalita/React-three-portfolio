import React, { useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from "three";

const Renderer = () => {
  const { gl, scene, camera, size } = useThree();
  console.log(camera);
  // console.log(camera,"<---1");
    const resizeHandler = () => {
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    gl.setSize(size.width, size.height);
    };
    useFrame(() => {
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    });

  useEffect(() => {
    // Customize renderer properties
    gl.physicallyCorrectLights = true;
    gl.outputEncoding = THREE.sRGBEncoding;
    gl.toneMapping = THREE.CineonToneMapping;
    gl.toneMappingExposure = 1.75;
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
  }, [gl]);

  return null; // No need to render anything from this component
}

export default Renderer;