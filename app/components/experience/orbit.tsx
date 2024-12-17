import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { motion } from "framer-motion";
import gsap from "gsap";

type GLTFResult = GLTF & {
  nodes: {
    Planet_0: THREE.Mesh;
    Clouds_0_0: THREE.Mesh;
    Clouds_1_0: THREE.Mesh;
  };
  materials: {
    PurplePlanet: THREE.MeshStandardMaterial;
    Clouds_0: THREE.MeshStandardMaterial;
    Clouds_1: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Take 01";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function OrbotModal(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/purple_planet.glb",
  ) as GLTFResult;
  useAnimations<GLTFActions>(animations, group);

  // Ref record
  const boxRef = useRef(null);

  useEffect(() => {
    // Step 2: Run the GSAP animation when the component mounts
    gsap.to(boxRef.current, {
      x: 100, // Move element 100px to the right
      backgroundColor: "red", // Change background color
      duration: 1, // Animation duration (1 second)
      delay: 0.5, // Delay before starting
      ease: "power2.inOut", // Easing function
      stagger: 0.1, // Stagger animation start times (useful for arrays)
      paused: false, // Play animation immediately
      repeat: 2, // Repeat animation 2 times (-1 for infinite)
      repeatDelay: 1, // Delay between repeats
      yoyo: true, // Reverse animation on repeat (A->B->B->A)
      onComplete: () => {
        console.log("Animation Complete!");
      },
    });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Sketchfab_model" }}
        >
          <group name="Root" userData={{ name: "Root" }}>
            <group
              name="Planet"
              rotation={[0, 0, Math.PI / 2]}
              userData={{ name: "Planet" }}
            >
              <mesh
                /// <reference path="" />
                ref={boxRef}
                name="Planet_0"
                castShadow
                receiveShadow
                geometry={nodes.Planet_0.geometry}
                material={materials.PurplePlanet}
                userData={{ name: "Planet_0" }}
              />

              <group
                name="Clouds_0"
                rotation={[0, 0, -Math.PI / 2]}
                scale={1.013}
                userData={{ name: "Clouds_0" }}
              >
                <mesh
                  name="Clouds_0_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Clouds_0_0.geometry}
                  material={materials.Clouds_0}
                  userData={{ name: "Clouds_0_0" }}
                />
              </group>
            </group>
            <group
              name="Clouds_1"
              scale={1.019}
              userData={{ name: "Clouds_1" }}
            >
              <motion.mesh
                name="Clouds_1_0"
                castShadow
                receiveShadow
                geometry={nodes.Clouds_1_0.geometry}
                material={materials.Clouds_1}
                userData={{ name: "Clouds_1_0" }}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/purple_planet.glb");
