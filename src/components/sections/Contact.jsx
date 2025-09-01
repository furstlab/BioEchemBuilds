import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-5 sm:py-10"
    >
      {/* SVG grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/lightning.svg')] bg-[length:288px_288px] opacity-10"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      />
      <RevealOnScroll>
        <div className="relative z-10 p-8 rounded-xl border-white/10 border bg-black/60 hover:-translate-y-1 transition-all max-w-xl w-full mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Add Your Build to{' '}
            <span className="font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              BioEchem
            </span>
            <span className="font-extrabold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              {' '}⚡Builds
            </span>
          </h2>
          <div className="flex flex-col gap-6 items-center mb-6">
            <ol className="list-decimal pl-4 space-y-2 text-gray-300 text-base text-left mx-auto">
              <li className="font-mono font-semibold flex flex-col sm:flex-row items-center gap-3 text-left">
                <span className="flex items-center flex-wrap justify-center sm:justify-start w-full">
                  Clone the{' '}
                  <span className="font-bold bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent ml-1">
                    BioEchem
                  </span>
                  <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent ml-1">
                    ⚡Builds
                  </span>{' '}
                  example_build_repo repository.
                  <a
                    href="https://github.com/furstlab/example_build_repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 hover:scale-110 transition rounded-full bg-slate-700/30 p-0.5 inline-block"
                    title="GitHub Repo"
                  >
                    <img
                      src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/github_logo.png"
                      alt="GitHub"
                      className="w-10 h-10 align-right"
                    />
                  </a>
                </span>
              </li>
              <li>
                Add your builds <span className="italic">CAD files</span>, <span className="italic">protocol.io links, 3D object files, NIH 3D deposit</span>.
              </li>
              <li>
                Deploy your build web page at{' '}
                <span className="break-all">https://github_username.github.io/build_name</span>{' '}
                and contact us with the links below!
              </li>
              <li>
                Detailed instructions are available in the Github repo.
              </li>
            </ol>
          </div>
          <div className="mt-4">
            <p className="text-base font-semibold text-slate-100 mb-2">Contact us:</p>
            <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-xs mx-auto">
              {/* BlueSky */}
              <a
                href="https://bsky.app/profile/furstlab.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition drop-shadow"
                title="BlueSky Profile"
              >
                <img
                  src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/bluesky_logo.png"
                  alt="Bluesky"
                  className="w-6 h-5"
                />
              </a>
              {/* Lab */}
              <a
                href="https://furstlab.mit.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition drop-shadow"
                title="Lab Website"
              >
                <img
                  src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/lab_logo.png"
                  alt="Lab Website"
                  className="w-7 h-7"
                />
              </a>
              {/* Gmail/Email */}
              <a
                href="mailto:furstlab@gmail.com"
                className="hover:scale-105 transition drop-shadow"
                title="Email"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/gmail-new.png"
                  alt="Gmail"
                  className="w-6 h-6"
                />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/furstlab"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition drop-shadow"
                title="GitHub Builds"
              >
                <img
                  src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/github_logo.png"
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};



