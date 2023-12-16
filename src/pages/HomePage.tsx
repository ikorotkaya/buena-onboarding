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
    <div className="pt-24 flex flex-col items-center justify-center">
      <Headline>{t("pages.home.headline")}</Headline>

      <Subheadline className="mb-12">{t("pages.home.subheadline")}</Subheadline>

      <div className="flex flex-col items-center justify-center max-w-xl">
        <AnimatedPrimaryButton
          link={`/onboarding/${ONBOARDING_STEPS[0].slug}`}
          testId="homepage-cta"
          className="md:w-auto mb-4 px-10 py-4 text-xl"
        >
          {t("pages.home.cta")}
        </AnimatedPrimaryButton>

        <div className="text-xs text-stone-500">
          {t("pages.home.press_enter_to_start_onboarding")}
        </div>
      </div>
    </div>
  );
}
