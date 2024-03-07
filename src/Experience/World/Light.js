import React, { useRef } from "react";
import {useThree, useFrame } from "@react-three/fiber";
import { DirectionalLight, AmbientLight } from "three";
import { useVariables } from "../../Context/GlobalContext";
import GSAP from "gsap";
const Light = () => {
    const sunLightRef = useRef();
    const ambientLightRef = useRef();
    // const rectLightRef = useRef();
    const {theme} = useVariables();



    useFrame(() => {

        // rectLightRef.current.position.set(1, 0.7, -0.2);
        // rectLightRef.current.rotation.x = -Math.PI / 2;
        // rectLightRef.current.rotation.z = Math.PI / 4;
        if (theme === "dark") {
            GSAP.to(sunLightRef.current.color, {
                r: 0.17254901960784313,
                g: 0.23137254901960785,
                b: 0.6862745098039216,
            });
            GSAP.to(ambientLightRef.current.color, {
                r: 0.17254901960784313,
                g: 0.23137254901960785,
                b: 0.6862745098039216,
            });
            GSAP.to(sunLightRef.current, {
                intensity: 0.78,
            });
            GSAP.to(ambientLightRef.current, {
                intensity: 0.78,
            });
        } else {
            GSAP.to(sunLightRef.current.color, {
                r: 255 / 255,
                g: 255 / 255,
                b: 255 / 255,
            });
            GSAP.to(ambientLightRef.current.color, {
                r: 255 / 255,
                g: 255 / 255,
                b: 255 / 255,
            });
            GSAP.to(sunLightRef.current, {
                intensity: 3,
            });
            GSAP.to(ambientLightRef.current, {
                intensity: 1,
            });
        }
        

    });

    return (
        <>
            <directionalLight 
                ref={sunLightRef} 
                position={[-1.5, 7, 3]}  
                castShadow = {true} 
                shadow-camera-far={20}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-normalBias={0.05}
            />
            <ambientLight ref={ambientLightRef} />
        </>
    );
}

export default Light;