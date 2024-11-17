"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  OrbitControls,
  Text,
} from "@react-three/drei";
import * as THREE from "three";

export default function RefractiveHero() {
  const [zIndex, setZIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newZIndex = Math.floor(scrollY / 50);
      setZIndex(newZIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        className="h-[50vh] sm:h-[70vh] top-200 md:ml-24 md:mr-24 w-full bg-black"
        style={{ zIndex: zIndex }}
      >
        <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>
      <div
        className="absolute top-0 left-0 w-full p-4 text-white text-center"
        style={{ zIndex: zIndex + 1 }}
      ></div>
      {/* <div className="h-[50vh] sm:h-[70vh] bg-gray-900 flex items-center justify-center"> */}
      {/*   <p className="text-white text-lg sm:text-2xl px-4 text-center"> */}
      {/*     Discover more below */}
      {/*   </p> */}
      {/* </div> */}
    </div>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Text
        position={[0, 0, -0.5]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        ASCENZEN
      </Text>
      <RefractiveBox />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

function RefractiveBox() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  return (
    <mesh ref={mesh} scale={1.8}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.5}
        chromaticAberration={1}
        distortion={0.5}
        distortionScale={0.1}
        temporalDistortion={0.2}
        iridescence={1}
        iridescenceIOR={1}
        iridescenceThicknessRange={[0, 1400]}
      />
    </mesh>
  );
}
