import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden"
    >
      {/* Subtle gray grid overlay background with fade top and bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 [background-image:linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(180deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:32px_32px] opacity-80 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_80%,transparent)]"
      />
      <RevealOnScroll>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Builds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CARD 1 */}
            <div className="p-6 rounded-xl border border-white/10 bg-black/60 min-h-[480px] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-white">
                Microbial Bioreactor
              </h3>
              <p className="text-gray-400 mb-4">
                3D printable electrochemical bioreactor for lab scale microbial electrochemistry.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CAD", "Part List", "Protocol.io", "NIH 3D"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 justify-center items-center mt-6">
                <a
                  href="https://swath1pen.github.io/bioreactor/"
                  className="px-4 py-2 font-medium rounded-lg text-blue-400 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:text-blue-300 transition-colors"
                >
                  Build Page
                </a>
                <a
                  href="https://swath1pen.github.io/bioreactor/model"
                  className="px-4 py-2 font-medium rounded-lg text-blue-400 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:text-blue-300 transition-colors"
                >
                  Explore 3D Model
                </a>
              </div>
              {/* Image below buttons, scaled smaller */}
              <div className="flex justify-center mt-4">
                <img
                  src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/bioreactor.png"
                  alt="Microbial Bioreactor preview"
                  className="rounded-lg shadow-md max-h-64 max-w-64 object-contain filter invert"
                />
              </div>
            </div>
            {/* CARD 2 */}
            <div className="p-6 rounded-xl border border-white/10 bg-black/60 min-h-[480px] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-white">
                Mixed Gassing Manifold
              </h3>
              <p className="text-gray-400 mb-4">
                Build for gassing manifold with oxygen scrubber for typical laboratory chemical fume hood.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CAD", "Part List", "Protocol.io"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 justify-center items-center mt-6">
                <a
                  href="#"
                  className="px-4 py-2 font-medium rounded-lg text-blue-400 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:text-blue-300 transition-colors"
                >
                  Build Page
                </a>
              </div>
              {/* Image below buttons, scaled smaller */}
              <div className="flex justify-center mt-4">
                <img
                  src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/manifold.png"
                  alt="Mixed Gassing Manifold preview"
                  className="rounded-lg shadow-md max-h-64 max-w-64 object-contain filter invert"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

