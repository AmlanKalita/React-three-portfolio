import * as THREE from 'three'
import { useThree,useFrame } from '@react-three/fiber';
// import {useEffect, useRef} from 'react';
import React, { useRef, useState,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const MyCubeControls = (props) =>{
    const {camera,scene} = useThree();
    console.log(scene);
    const {group,rectLightRef,mfref} = props;
    GSAP.registerPlugin(ScrollTrigger);
    const [lerp, setLerp] = useState({
        current : 0,
        target : 0,
        ease : 0.05
    });
    const onMouseMove = (e) => {
        const rotation = ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
        setLerp({
        ...lerp,
        target : rotation,
        });
        const current = GSAP.utils.interpolate(
        lerp.current,
        lerp.target,
        lerp.ease
        )
        group.current.rotation.y = current;
    }
    useEffect(()=>{
        rectLightRef.current.rotation.x = -Math.PI / 2;
        rectLightRef.current.rotation.z = Math.PI / 4;
        ScrollTrigger.matchMedia({
            "(min-width: 969px)": () => {
                group.current.scale.set(0.11, 0.11, 0.11);
                rectLightRef.current.width = 0.5;
                rectLightRef.current.height = 0.7;
                group.current.position.set(0, 0, 0);
                const firstMoveTL = GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                }
                });
                firstMoveTL.fromTo(
                    group.current.position,
                    { x: 0, y: 0, z: 0 },
                    {
                        x: () => {
                            return window.innerWidth * 0.0014;
                        },
                    }
                );
                const secondMoveTL =  GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                .to(
                    group.current.position,
                    {
                        x: () => {
                            return 1;
                        },
                        z: () => {
                            return window.innerHeight * 0.0032;
                        },
                    },
                    "same"
                )
                .to(
                    group.current.scale,
                    {
                        x: 0.4,
                        y: 0.4,
                        z: 0.4,
                    },
                    "same"
                )
                .to(
                    rectLightRef.current,
                    {
                        width: 0.5 * 4,
                        height: 0.7 * 4,
                    },
                    "same"
                );
                const thirdMoveTL = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                }).to(camera.position, {
                    y: 1.5,
                    x: -4.0,
                });
                camera.updateProjectionMatrix();
                
            },

                "(max-width: 968px)": () => {
                    // console.log("fired mobile");

                    // Resets
                    group.current.scale.set(0.07, 0.07, 0.07);
                    group.current.position.set(0, 0, 0);
                    rectLightRef.current.width = 0.3;
                    rectLightRef.current.height = 0.4;


                    // First section -----------------------------------------
                    const firstMoveTL = GSAP.timeline({
                        scrollTrigger: {
                            trigger: ".first-move",
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.6,
                            // invalidateOnRefresh: true,
                        },
                    }).to(group.current.scale, {
                        x: 0.1,
                        y: 0.1,
                        z: 0.1,
                    });

                // Second section -----------------------------------------
                const secondMoveTL = GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(
                        group.current.scale,
                        {
                            x: 0.25,
                            y: 0.25,
                            z: 0.25,
                        },
                        "same"
                    )
                    .to(
                        rectLightRef.current,
                        {
                            width: 0.3 * 3.4,
                            height: 0.4 * 3.4,
                        },
                        "same"
                    )
                    .to(
                        group.current.position,
                        {
                            x: 1.5,
                        },
                        "same"
                    );

                    const thirdMoveTL = GSAP.timeline({
                        scrollTrigger: {
                            trigger: ".third-move",
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.6,
                            invalidateOnRefresh: true,
                        },
                    }).to(group.current.position, {
                        z: -4.5,
                    });
                },
                all: () => {
                    const secondPartTimeline =  GSAP.timeline({
                        scrollTrigger: {
                            trigger: ".third-move",
                            start: "center center",
                        },
                    }).to(mfref.current.position, {
                                    x: -5.44055,
                                    z: 13.6135,
                                    duration: 0.3,
                                });
                    // Object.keys(nodes).forEach(key => {
                    //     console.log(key); // 👉️ name, country
                    //     console.log(nodes[key]); // 👉️ James, Chile
                    //   });
                    //   Object.keys(nodes).forEach((child) => {
                    //     if (child === "Mini_Floor") {
                    //         GSAP.to(nodes[child].position, {
                    //             x: -5.44055,
                    //             z: 13.6135,
                    //             duration: 0.3,
                    //         });
                    //     }
                    //     if (child === "Mailbox") {
                    //         GSAP.to(child.scale, {
                    //             x: 1,
                    //             y: 1,
                    //             z: 1,
                    //             duration: 0.3,
                    //         });
                    //     }
                    //     if (child === "Lamp") {
                    //         GSAP.to(child.scale, {
                    //             x: 1,
                    //             y: 1,
                    //             z: 1,
                    //             ease: "back.out(2)",
                    //             duration: 0.3,
                    //         });
                    //     }
                    //     if (child === "FloorFirst") {
                    //         GSAP.to(child.scale, {
                    //             x: 1,
                    //             y: 1,
                    //             z: 1,
                    //             ease: "back.out(2)",
                    //             duration: 0.3,
                    //         });
                    //     }
                    //     if (child === "FloorSecond") {
                    //         GSAP.to(child.scale, {
                    //             x: 1,
                    //             y: 1,
                    //             z: 1,
                    //             duration: 0.3,
                    //         });
                    //     }
                    //     if (child=== "FloorThird") {
                    //         GSAP.to(child.scale, {
                    //             x: 1,
                    //             y: 1,
                    //             z: 1,
                    //             ease: "back.out(2)",
                    //             duration: 0.3,
                    //         });
                    //     }
                    //     if (child === "Dirt") {
                    //         GSAP.to(child.scale, {
                    //             x: 1,
                    //             y: 1,
                    //             z: 1,
                    //             ease: "back.out(2)",
                    //             duration: 0.3,
                    //         });
                    //     }
                    //     if (child === "Flower1") {
                    //         GSAP.to(child.scale, {
                    //             x: 1,
                    //             y: 1,
                    //             z: 1,
                    //             ease: "back.out(2)",
                    //             duration: 0.3,
                    //         });
                    //     }
                    //     if (child === "Flower2") {
                    //         const ninth = GSAP.to(child.scale, {
                    //             x: 1,
                    //             y: 1,
                    //             z: 1,
                    //             ease: "back.out(2)",
                    //             duration: 0.3,
                    //         });
                    //     }
                    // });
                    // secondPartTimeline.add(first);
                    // secondPartTimeline.add(second);
                    // secondPartTimeline.add(third);
                    // secondPartTimeline.add(fourth, "-=0.2");
                    // secondPartTimeline.add(fifth, "-=0.2");
                    // secondPartTimeline.add(sixth, "-=0.2");
                    // secondPartTimeline.add(seventh, "-=0.2");
                    // secondPartTimeline.add(eighth);
                    // secondPartTimeline.add(ninth, "-=0.1");
                },

            })}

            

    ,[])
    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        return () => {
        window.removeEventListener('mousemove', onMouseMove);
        };
    }, [lerp]);

    return null; // This component doesn't render anything in the DOM

}

