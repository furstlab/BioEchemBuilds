import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[600px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Share Your Build with BioEchem<span className="text-blue-500">⚡Builds</span>
          </h2>
          {/* Numbered List + Logos Side by Side */}
          <div className="flex flex-row gap-10 items-start mb-10">
            {/* Numbered List (left) */}
            <ol className="list-decimal pl-8 space-y-5 text-lg flex-1">
              <li className="font-mono text-xl font-bold text-white flex items-center gap-2">
                <span>
                  Clone the BioEchem<span className="text-blue-500">⚡Builds</span> example_build_repo repository.
                </span>
                <a
                  href="https://github.com/furstlab/example_build_repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <img
                    src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/github_logo.png"
                    alt="GitHub"
                    className="w-18 h-12 hover:scale-110 transition inline"
                  />
                </a>
              </li>
              <li className="font-semibold text-sm text-blue-400">
                Add your builds <span className="italic">CAD files</span>, <span className="italic">protocol.io links, 3D object files</span>, and any supplementary materials.
              </li>
              <li className="font-semibold text-sm text-cyan-400">
                Deploy your github.io web page and send us the link below!
              </li>
              <li className="font-semibold text-sm text-cyan-300">
                Detailed instructions are available in the Github repo at: furstlab/example_build_repo/READ.ME.
              </li>
            </ol>
          </div>
          {/* Contact Info + Social Media */}
          <div className="mt-10 text-center">
            <p className="text-xl font-semibold text-white mb-4">
              Contact us:
            </p>
            <div className="flex justify-center gap-8 pt-2">
              {/* BlueSky */}
              <a href="https://bsky.app/profile/furstlab.bsky.social" target="_blank" rel="noopener noreferrer">
                <img src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/bluesky_logo.png" alt="Bluesky" className="w-12 h-10 hover:scale-110 transition" />
              </a>
              {/* Lab */}
              <a href="https://furstlab.mit.edu/" target="_blank" rel="noopener noreferrer">
                <img src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/lab_logo.png" alt="Lab Website" className="w-13 h-13 hover:scale-110 transition" />
              </a>
              {/* Gmail/Email */}
              <a href="mailto:furstlab@gmail.com" className="hover:scale-110 transition">
                <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Gmail" className="w-10 h-10" />
              </a>
              {/* GitHub */}
              <a href="https://github.com/furstlab/BioEchemBuilds" target="_blank" rel="noopener noreferrer">
                <img src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/github_logo.png" alt="GitHub" className="w-10 h-9 hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
