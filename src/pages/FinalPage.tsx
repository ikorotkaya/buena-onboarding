import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Headline from "../components/headlines/Headline";
import Subheadline from "../components/headlines/Subheadline";
import { useTranslation } from "react-i18next";

export default function FinalPage() {
  const { t } = useTranslation();

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
        <Headline>{t("finalPageHeadline")}</Headline>
      </div>

      <Subheadline>{t("finalPageSubheadline")}</Subheadline>
    </div>
  );
}
