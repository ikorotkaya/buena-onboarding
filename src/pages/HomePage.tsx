import Headline from "../components/headlines/Headline";
import Subheadline from "../components/headlines/Subheadline";
import AnimatedPrimaryButton from "../components/buttons/AnimatedPrimaryButton";
import ONBOARDING_STEPS from "../../onboarding-pages.json";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
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
          className="md:w-auto"
        >
          {t("pages.home.cta")}
        </AnimatedPrimaryButton>
      </div>
    </div>
  );
}
