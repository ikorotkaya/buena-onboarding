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
          className={`w-full md:w-auto flex md:ml-auto items-center justify-center px-4 py-2 text-base font-medium whitespace-no-wrap 
          border-2 rounded
          ${disabled ? 'bg-gray-400 text-gray-500 border-gray-400 pointer-events-none' : 'bg-indigo-700 text-white hover:text-indigo-300 border-indigo-700 focus:outline-none'}`}
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
