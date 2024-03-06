import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment,OrbitControls,OrthographicCamera, PerspectiveCamera, useHelper } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { DirectionalLightHelper } from 'three';

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Cube from '../Models/cube';
import Light from './World/Light.js';
import Renderer from './Renderer.js';
import Camera from './Camera.js';
import Floor from './World/Floor.js';
import Curve from './World/Controls.js';

const Experience = () => {
  const canvasProps = {
    gl: {
      antialias: true,
      physicallyCorrectLights : true,
      outputEncoding : THREE.sRGBEncoding,
      toneMapping : THREE.CineonToneMapping,
      toneMappingExposure : 1.75,
      
    },
    shadows : {
      shadowMap : {
        enabled : true,
        type : THREE.PCFSoftShadowMap
      }
    }
    
  };
  return (
    <Canvas {...canvasProps}>
        <Camera/>
        <Light/>
        <Suspense fallback={null}>
          <Cube scale={[0.11,0.11,0.11]} />
        </Suspense>
        <Floor/>
        {/* <axesHelper args={[5]} /> */}
        {/* <gridHelper args={[20, 20, 0xff0000, 'teal']} /> */}
        {/* <OrbitControls/> */}
        <Curve/>
    </Canvas>
  );
}


export default Experience;