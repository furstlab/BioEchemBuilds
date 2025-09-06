import { RevealOnScroll } from "../RevealOnScroll";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef, useMemo, useState } from "react";

// Floating bacteria background
function OrganicsBackground({ count = 100 }) {
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
        elongate: Math.random() * 1.2 + 0.8
      })),
    [count]
  );

  useFrame(() => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      particle.time += particle.speed;
      dummy.position.set(
        particle.x +
          Math.cos((particle.time / 10) * particle.factor) +
          (Math.sin(particle.time) * particle.factor) / 10,
        particle.y +
          Math.sin((particle.time / 10) * particle.factor) +
          (Math.cos(particle.time) * particle.factor) / 10,
        particle.z +
          Math.cos((particle.time / 10) * particle.factor) +
          (Math.sin(particle.time) * particle.factor) / 10
      );
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
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="teal" transparent opacity={0.94} />
    </instancedMesh>
  );
}

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

export const About = () => {
  const frontendSkills = ["CAD Files", "Fabrication Protocols", "Usage Guides"];
  const backendSkills = ["Iterative Improvements", "Open Source"];
  const [showLightning, setShowLightning] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Floating background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={1.1} />
          <OrganicsBackground count={100} />
        </Canvas>
      </div>
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-black/70">
            <p className="text-gray-300 mb-6 text-center">
              Collection of builds for biological electrochemistry.
              Published designs/protocols on GitHub and protocols.io for community engagement.
              Add your build to support other scientists.
            </p>

            {/* BUTTON: Add Your Build! */}
            <div className="flex justify-center mb-8">
              <a
                href="https://github.com/swath1pen/build_page"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500/50 text-blue-500 py-3 px-8 rounded font-bold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 focus:outline-none relative flex items-center"
                onMouseEnter={() => setShowLightning(true)}
                onFocus={() => setShowLightning(true)}
                onMouseLeave={() => setShowLightning(false)}
                onBlur={() => setShowLightning(false)}
              >
                Add Your Build!
                {showLightning && <Lightning />}
              </a>
            </div>

            <p className="font-bold text-gray-300 mb-6 text-center">
              Step 1: Deploy your build github-page using template.
            </p>
            <p className="font-bold text-gray-300 mb-6 text-center">
              Step 2: Contact us to add to main repository.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🔧Tools🔨</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💡Why?⚡ </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <style>{`
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
