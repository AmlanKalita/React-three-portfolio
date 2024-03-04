import React, { useRef } from "react";
import {useThree, useFrame } from "@react-three/fiber";
import { DirectionalLight, AmbientLight } from "three";

const Light = () => {
    const sunLightRef = useRef();
    const ambientLightRef = useRef();

    useFrame(() => {

        sunLightRef.current.color.setRGB(1, 1, 1);
        ambientLightRef.current.color.setRGB(1, 1, 1);
        sunLightRef.current.intensity = 3;
        ambientLightRef.current.intensity = 1;
        

        // if (theme === "dark") {
        //     sunLightRef.current.color.setRGB(0.17254901960784313, 0.23137254901960785, 0.6862745098039216);
        //     ambientLightRef.current.color.setRGB(0.17254901960784313, 0.23137254901960785, 0.6862745098039216);
        //     sunLightRef.current.intensity = 0.78;
        //     ambientLightRef.current.intensity = 0.78;
        // } else {
            
        // }
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