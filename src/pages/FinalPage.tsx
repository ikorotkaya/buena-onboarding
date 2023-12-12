import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Headline from "../components/Headline";
import Subheadline from "../components/Subheadline";

export default function FinalPage() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid grid-rows-[3fr,2fr] pt-36">
      <Confetti width={windowSize.width} height={windowSize.height} />

      <div className="flex items-end justify-center text-center">
        <Headline>Thank you for your submission!</Headline>
      </div>

      <Subheadline>We will be in touch shortly.</Subheadline>
    </div>
  );
}
