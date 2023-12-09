import { Link } from "react-router-dom";
import { pages } from "../utils/onboarding-routing";
import { useEffect, useState } from "react";
import { useOnboardingStore } from "../store";

export default function OnboardingNavigation() {
  const { currentPageIndex } = useOnboardingStore();
  const [nextPage, setNextPage] = useState(pages[currentPageIndex + 1]);
  const [previousPage, setPreviousPage] = useState(pages[currentPageIndex - 1]);

  useEffect(() => {
    setNextPage(pages[currentPageIndex + 1]);
    setPreviousPage(pages[currentPageIndex - 1]);
  }, [currentPageIndex]);

  return (
    <div className="flex flex-row gap-4">
      {previousPage && (
        <Link
          to={`/onboarding/${previousPage}`}
          className="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 rounded-full shadow-md hover:bg-black hover:text-white hover:border-black focus:outline-none"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back
        </Link>
      )}

      {nextPage && (
        <Link
          to={`/onboarding/${nextPage}`}
          className="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 rounded-full shadow-lg hover:bg-black hover:text-white hover:border-black focus:outline-none"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </Link>
      )}
    </div>
  );
}
