import { Link } from "react-router-dom";
import { pages } from "../../utils/onboarding-routing";
import { useEffect, useState } from "react";
import { useOnboardingStore } from "../../store";
import ArrowRightIcon from "../ArrowRightIcon";

type NextButtonProps = {
  className?: string;
  disabled: boolean;
};

export default function NextButton({
  className = "",
  disabled
}: NextButtonProps) {
  const { currentPageIndex } = useOnboardingStore();
  const [nextPage, setNextPage] = useState(pages[currentPageIndex + 1]);

  useEffect(() => {
    setNextPage(pages[currentPageIndex + 1]);
  }, [currentPageIndex]);

  return (
    <div
      className={`flex flex-row justify-between gap-4 px-8 py-4 md:p-0 w-full ${className}`}
    >
      {nextPage && (
        <Link
          to={`/onboarding/${nextPage}`}
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
          Next
          <ArrowRightIcon className="ml-2" />
        </Link>
      )}
    </div>
  );
}
