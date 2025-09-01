import { RevealOnScroll } from "../RevealOnScroll";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

// Rotating GLTF model component with hardcoded URL
const GLTF_URL = "https://raw.githubusercontent.com/swath1pen/bioreactor/main/public/scene1.gltf";

function RotatingGLTF() {
  const group = useRef();
  const { scene } = useGLTF(GLTF_URL);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += 0.0;
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} scale={0.4} castShadow receiveShadow>
      <primitive object={scene} />
    </group>
  );
}
useGLTF.preload(GLTF_URL);

// Lightning bolt SVG as inline icon, flashes indefinitely
const Lightning = () => (
  <svg
    className="inline-block ml-2 w-4 h-4 md:w-5 md:h-5 opacity-90 animate-lightning align-middle"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M13 3v7h6l-8 11v-7H5L13 3z"
      fill="#38bdf8"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinejoin="round"
      filter="drop-shadow(0 0 4px #99f6e4)"
    />
  </svg>
);

// Reliable floating "bacteria" background adapted from top examples
function OrganicsBackground({ count = 10000 }) {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        time: Math.random() * 100,
        factor: Math.random() * 20 + 10,
        speed: Math.random() * 0.01 + 0.001,
        x: Math.random() * 16 - 8,
        y: Math.random() * 8 - 4,
        z: Math.random() * 16 - 8,
        elongate: Math.random() * 1.2 + 0.8 // For oval/rod look
      })),
    [count]
  );

  useFrame(() => {

    particles.forEach((particle, i) => {
      particle.time += particle.speed;
      dummy.position.set(
        particle.x + Math.cos((particle.time / 10) * particle.factor) + (Math.sin(particle.time) * particle.factor) / 10,
        particle.y + Math.sin((particle.time / 10) * particle.factor) + (Math.cos(particle.time) * particle.factor) / 10,
        particle.z + Math.cos((particle.time / 10) * particle.factor) + (Math.sin(particle.time) * particle.factor) / 10
      );
      // Stretched in Y for a bacteria/rod look
      dummy.scale.set(0.03, 0.03 * particle.elongate, 0.03);
      dummy.rotation.set(
        Math.sin(particle.time * 0.7 + i) * 2.5,
        Math.cos(particle.time * 0.3 + i) * 2.5,
        Math.sin(particle.time * 0.5 + i) * 2.5
      );
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      {/* You can try <dodecahedronGeometry args={[1]} /> for chunkier particles */}
      <sphereGeometry args={[1, 8, 8]} />
      {/* Use "white" for visible, or "#aaffbb" for pale green */}
      <meshStandardMaterial color="teal" transparent opacity={0.94} />
    </instancedMesh>
  );
}

export const Home = () => {
  const [showLightning, setShowLightning] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative bg-black overflow-hidden"
    >
      {/* Floating “bacteria/organics” animation background! */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={1.1} />
          <OrganicsBackground count={100} />
        </Canvas>
      </div>
      <RevealOnScroll>
        <div className="relative z-10 px-2 pt-10 md:px-4 md:pt-24 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-6 
            bg-gradient-to-r from-teal-600 to-cyan-400 bg-clip-text text-transparent leading-tight">
            BioEchem
            <span className="font-bold mb-3 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight">
              ⚡Builds
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 md:mb-8 max-w-xs sm:max-w-md md:max-w-lg mx-auto">
            The increasing interdisciplinarity of biology requires an accessible toolkit.
            This serves as a repository to open-source custom builds for scientists.
          </p>
          <div className="mx-auto my-6 w-full max-w-md h-64 rounded-xl bg-gray-800 flex items-center justify-center shadow-lg">
            <Canvas camera={{ position: [0, 0, 4] }} style={{ background: 'black' }}>
              <ambientLight intensity={0.9} />
              <directionalLight position={[2, 2, 5]} />
              <RotatingGLTF />
              <OrbitControls />
            </Canvas>
          </div>
          <div className="w-full flex justify-center items-center mt-8 mb-8 space-x-8">
            {/* ... Github & lab logos ... */}
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-950 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Builds
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 focus:outline-none relative flex items-center"
              onMouseEnter={() => setShowLightning(true)}
              onFocus={() => setShowLightning(true)}
              onMouseLeave={() => setShowLightning(false)}
              onBlur={() => setShowLightning(false)}
            >
              Add Your Build
              {showLightning && <Lightning />}
            </a>
          </div>
        </div>
      </RevealOnScroll>
      <style>
        {`
          @keyframes lightning-burst {
            0% { opacity: 0; transform: scale(0.6);}
            25% { opacity: 1; transform: scale(1.18);}
            70% { opacity: 1; transform: scale(1);}
            100% { opacity: 0; transform: scale(0.7);}
          }
          .animate-lightning {
            animation: lightning-burst 0.5s cubic-bezier(.38,1.29,.68,-0.21) infinite;
          }
        `}
      </style>
    </section>
  );
};



