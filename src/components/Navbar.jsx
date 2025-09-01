import { useEffect, useState } from "react";

const tabs = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Builds" },
];

// Lightning bolt SVG as inline icon (right of text), now flashes indefinitely
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

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeTab, setActiveTab] = useState("#home");
  const [showLightning, setShowLightning] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // No timeout—animation will loop until mouse leaves or button loses focus

  const tabBase =
    "relative px-4 py-2 font-medium rounded-lg text-blue-400 transition-colors overflow-visible";

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-white "
          >
            BioEchem
            <span className="font-bold mb-3 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight">
            ⚡Builds
            </span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {tabs.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`${tabBase} ${
                  activeTab === href
                    ? "text-blue-300 font-bold"
                    : "hover:text-cyan-400"
                }`}
                onClick={() => setActiveTab(href)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className={`${tabBase} font-extrabold hover:text-cyan-400 focus:outline-none`}
              onMouseEnter={() => setShowLightning(true)}
              onFocus={() => setShowLightning(true)}
              onMouseLeave={() => setShowLightning(false)}
              onBlur={() => setShowLightning(false)}
            >
              Add Your Build
              {showLightning && <Lightning />}
            </a>
          </div>
          {/* Mobile nav */}
          <div className="flex md:hidden">
            <a
              href="#contact"
              className="relative px-3 py-2 font-extrabold text-cyan-300 focus:outline-none"
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
      </div>
      {/* Lightning animation CSS with infinite flashing */}
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
    </nav>
  );
};