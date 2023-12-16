import { useOnboardingStore } from "../../store";
import Headline from "../../components/headlines/Headline";
import AnimatedPrimaryButton from "../../components/buttons/AnimatedPrimaryButton";
import ONBOARDING_PAGES from "../../../onboarding-pages.json";
import { OnboardingStore } from "../../store";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Summary() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { name, email, phoneNumber, income } = useOnboardingStore();
  const onboardingStore = useOnboardingStore();

  const validityStoreKeys = ONBOARDING_PAGES.filter(
    (step) => step.storeKey
  ).map((step) => step.storeKey);

  const submitButtonEnabled = validityStoreKeys.every(
    (storeKey) => onboardingStore[storeKey as keyof OnboardingStore]
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && submitButtonEnabled) {
      navigate(`/final-page`);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col pt-52 md:max-w-xl">
      <Headline style="3xl">{t("pages.summary.headline")}</Headline>

      <div
        data-testid="summary"
        className="mb-12 grid grid-cols-[1fr,2fr] gap-1 border-dashed border-[1px] border-stone-300 rounded-md"
      >
        <div className="px-4 py-2">{t(`pages.name.onboardingStepName`)}:</div>
        <div className="px-4 py-2">{name}</div>
        <div className="px-4 py-2">{t(`pages.email.onboardingStepName`)}:</div>
        <div className="px-4 py-2">{email}</div>
        <div className="px-4 py-2">{t(`pages.phone.onboardingStepName`)}:</div>
        <div className="px-4 py-2">{phoneNumber}</div>
        <div className="px-4 py-2">{t(`pages.income.onboardingStepName`)}:</div>
        <div className="px-4 py-2">{income}</div>
      </div>

      <div className="py-4 px-8 md:p-0 w-full fixed md:relative bottom-0 left-0">
        <AnimatedPrimaryButton
          link="/final-page"
          testId="submit-button"
          disabled={!submitButtonEnabled}
        >
          {t("pages.summary.cta")}
        </AnimatedPrimaryButton>
      </div>
    </div>
  );
}
