import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function FinalPage() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }
  , []);

  return (
    <div className="grid grid-rows-[3fr,2fr,1fr]">
      <Confetti width={windowSize.width} height={windowSize.height} />
      
      <h2 className="flex items-end justify-center text-4xl font-bold text-gray-900 sm:text-6xl mb-4">
        Thank you for submitting your application!
      </h2>

      <div className="flex justify-center text-lg text-gray-600">
        We will contact you shortly to discuss the next steps.
      </div>
    </div>
  );
}
