import { RevealOnScroll } from "../RevealOnScroll";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

// Rotating GLTF model component with hardcoded URL
const GLTF_URL = "https://raw.githubusercontent.com/swath1pen/bioreactor/main/public/scene1.gltf"; // <-- replace with your gltf/glb file URL

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

// optional: preload for performance
useGLTF.preload(GLTF_URL);

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative bg-black"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 pt-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-100 to-blue-700 bg-clip-text text-transparent leading-right">
            BioEchem⚡Builds
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            The increasing interdisciplinarity of biology requires an accessible toolkit.
            This database provides fabrication solutions for bioelectrochemcial experiments
            and serves as a repository to open-source custom builds for scientists.
          </p>
          {/* 3D object viewer centered and close to the title */}
          <div className="mx-auto my-6 w-full max-w-md h-64 rounded-xl bg-gray-800 flex items-center justify-center shadow-lg">
            <Canvas
              camera={{ position: [0, 0, 4] }}
              style={{ background: 'black' }} // <-- add this line for black background
            >
              <ambientLight intensity={0.9} />
              <directionalLight position={[2, 2, 5]} />
              <RotatingGLTF />
              <OrbitControls />
            </Canvas>
          </div>
          
          <div className="w-full flex justify-center items-center mt-8 mb-8 space-x-12">
            <a
              href="https://github.com/furstlab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <svg
                className="w-18 h-18 fill-current text-white drop-shadow-lg transition"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 .296c-6.6 0-12 5.4-12 12 0 5.3 3.438 9.799 8.207 11.387.6.113.793-.262.793-.583 0-.288-.011-1.244-.016-2.26-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.808 1.304 3.493.997.108-.775.418-1.304.762-1.605-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.469-2.381 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.874.119 3.176.77.841 1.234 1.912 1.234 3.222 0 4.61-2.803 5.625-5.473 5.924.429.37.823 1.1.823 2.219 0 1.604-.015 2.897-.015 3.293 0 .323.192.699.801.581C20.565 22.092 24 17.592 24 12.296c0-6.6-5.4-12-12-12"/>
              </svg>
            </a>
            <a href="https://furstlab.mit.edu/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logo.png"
                alt="Furst Lab Logo"
                className="w-24 h-auto mx-auto cursor-pointer opacity-90 hover:opacity-100 transition"
              />
            </a>
            <a href="https://www.protocols.io/workspaces/furstlab" target="_blank" rel="noopener noreferrer">
              <img
                src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logomark.png"
                alt="protocol.io Logo"
                className="w-24 h-auto mx-auto cursor-pointer opacity-90 hover:opacity-100 transition"
              />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-200 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Builds
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

