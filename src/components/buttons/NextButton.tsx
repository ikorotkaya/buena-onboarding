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
      className={`flex flex-row justify-between gap-4 px-8 py-4 md:p-0 w-full ${className}`}
    >
      {nextOnboardingPage && (
        <Link
          to={`/onboarding/${nextOnboardingPage}`}
          data-testid="next-button"
          className={`w-full md:w-auto flex md:ml-auto items-center justify-center 
            px-6 py-3 text-base font-medium whitespace-no-wrap text-white rounded-md
            ${
              disabled
                ? "bg-neutral-400 pointer-events-none"
                : "bg-neutral-900  md:hover:bg-neutral-700 focus:outline-none"
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
