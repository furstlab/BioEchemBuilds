import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "BioEchem⚡Builds";
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-teal-600 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold w-full text-center">
        {text.startsWith("BioEchem⚡") ? (
          <>
            BioEchem
            <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-sans">
              {text.slice(8)}
            </span>
          </>
        ) : text}
        <span className="animate-blink">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

