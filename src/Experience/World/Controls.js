import * as THREE from 'three'
import { useThree,useFrame } from '@react-three/fiber';
import {useEffect, useRef} from 'react';
const Curve = () =>{
    const { scene,camera} = useThree();
    // console.log(scene);
    // const setCurve = () =>{
    //     const curve = new THREE.CatmullRomCurve3([
    //         new THREE.Vector3(-10, 0, 10),
    //         new THREE.Vector3(-5, 5, 5),
    //         new THREE.Vector3(0, 0, 0),
    //         new THREE.Vector3(5, -5, 5),
    //         new THREE.Vector3(10, 0, 10)
    //     ],true);
    //     if (camera.type === "OrthographicCamera"){
    //         const cameraPosition = new THREE.Vector3(0,0,0);
    //         curve.getPointAt(0, cameraPosition);
    //         console.log(cameraPosition);
    //         camera.position.copy(cameraPosition);
    //         }
    //     const points = curve.getPoints(50);
    //     const geometry = new THREE.BufferGeometry().setFromPoints(points);

    //     const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

    //     // Create the final object to add to the scene
    //     const curveObject = new THREE.Line(geometry, material);
    //     scene.add(curveObject);

    //     // Move camera alongside the curve
        

    // }
    // useEffect(() => {
       
    //     setCurve();
  
    // }, []);

    return null; // This component doesn't render anything in the DOM

}

export default Curve;

