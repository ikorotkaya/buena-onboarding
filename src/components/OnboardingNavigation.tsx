import { Link } from "react-router-dom";
import { pages } from "../utils/onboarding-routing";
import { useEffect, useState } from "react";
import { useOnboardingStore } from "../store";

type OnboardingNavigationProps = {
  className?: string;
  disabled: boolean;
}

export default function OnboardingNavigation({
  className = '',
  disabled,
}: OnboardingNavigationProps) {
  const { currentPageIndex } = useOnboardingStore();
  const [nextPage, setNextPage] = useState(pages[currentPageIndex + 1]);

  useEffect(() => {
    setNextPage(pages[currentPageIndex + 1]);
  }, [currentPageIndex]);

  return (
    <div className={`flex flex-row justify-between gap-4 px-8 py-4 md:p-0 w-full ${className}`}>
      {nextPage &&  (
        <Link
          to={`/onboarding/${nextPage}`}
          data-testid="next-button"
          className={`w-full md:w-auto flex md:ml-auto items-center justify-center px-4 py-2 text-base font-medium whitespace-no-wrap text-white rounded
          ${disabled ? 'bg-neutral-400 pointer-events-none' : 'bg-neutral-900  md:hover:bg-neutral-700 focus:outline-none'}`}
        >
          Next
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </Link>
      )}      
    </div>
  );
}
