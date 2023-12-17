import { Link } from "react-router-dom";
import { useOnboardingStore } from "../../store";
import ArrowRightIcon from "../ArrowRightIcon";
import { useTranslation } from "react-i18next";

export type NextButtonProps = {
  className?: string;
  disabled: boolean;
};

export default function NextButton({
  className = "",
  disabled
}: NextButtonProps) {
  const { t } = useTranslation();
  const { nextOnboardingPage } = useOnboardingStore();

  return (
    <div
      className={`flex w-full flex-row justify-between gap-4 px-8 py-4 md:p-0 ${className}`}
    >
      {nextOnboardingPage && (
        <Link
          to={`/onboarding/${nextOnboardingPage}`}
          data-testid="next-button"
          className={`flex w-full items-center justify-center whitespace-nowrap rounded-md 
            px-6 py-3 text-base font-medium text-white md:ml-auto md:w-auto
            ${
              disabled
                ? "pointer-events-none bg-neutral-400"
                : "bg-neutral-900  focus:outline-none md:hover:bg-neutral-700"
            }
          `}
        >
          {t("nextButton")}
          <ArrowRightIcon className="ml-2" />
        </Link>
      )}
    </div>
  );
}
