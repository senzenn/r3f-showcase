import { Canvas } from "@react-three/fiber";
import { OrbotModal } from "../experience/orbit";
import {
  MeshDistortMaterial,
  MeshReflectorMaterial,
  OrbitControls,
  Stars,
} from "@react-three/drei";

export default function OrbitExperience() {
  return (
    <>
      <Canvas className="w-full h-screen ">
        <mesh scale={2}>
          <OrbotModal />

          <OrbitControls
            autoRotate
            enableZoom={false}
            enableRotate={false}
            enableDamping={false}
            autoRotateSpeed={1}
          />

          <MeshDistortMaterial distort={4} speed={10} />
          <Stars count={100} speed={3} saturation={2} />
        </mesh>
      </Canvas>
    </>
  );
}
