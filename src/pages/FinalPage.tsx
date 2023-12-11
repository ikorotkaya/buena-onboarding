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
    <div className="grid grid-rows-[3fr,2fr] pt-36">
      <Confetti width={windowSize.width} height={windowSize.height} />
      
      <h2 className="flex items-end justify-center text-center text-3xl font-bold text-stone-900 sm:text-5xl mb-4">
        Thank you for your submission!
      </h2>

      <div 
        data-testid="submission-confirmation"
        className="flex justify-center text-lg leading-8 text-stone-600">
        We will be in touch shortly.
      </div>
    </div>
  );
}
