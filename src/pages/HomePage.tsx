import Headline from "../components/headlines/Headline";
import Subheadline from "../components/headlines/Subheadline";
import AnimatedPrimaryButton from "../components/buttons/AnimatedPrimaryButton";
import ONBOARDING_STEPS from "../../onboarding-pages.json";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "../store";

export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { firstOnboardingPage } = useOnboardingStore();

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();

    if (e.key === "Enter") {
      e.stopPropagation();

      navigate(`/onboarding/${firstOnboardingPage}`);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="grid grid-rows-[3fr,2fr,1fr] ">
      <div className="flex items-end justify-center text-center">
        <Headline>{t("pages.home.headline")}</Headline>
      </div>

      <Subheadline>{t("pages.home.subheadline")}</Subheadline>

      <div className="flex flex-row justify-center items-end pb-4">
        <AnimatedPrimaryButton
          link={`/onboarding/${ONBOARDING_STEPS[0].slug}`}
          testId="homepage-cta"
          className="md:w-auto px-10 py-4 text-xl"
        >
          {t("pages.home.cta")}
        </AnimatedPrimaryButton>
      </div>
    </div>
  );
}
