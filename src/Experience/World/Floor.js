// Floor component
import React from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Plane } from '@react-three/drei';

const Floor = () => {
  return (
    <Plane args={[10, 10]} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.7, 0]} receiveShadow >
         <meshStandardMaterial color={0xffe6a2} side={THREE.BackSide} />
    </Plane>
  )
};

export default Floor;
