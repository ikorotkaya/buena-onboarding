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
    <div className="flex">
      { previousPage && (
        <Link
          className="py-2 px-4 rounded bg-gray-200 mr-2" 
          to={`/onboarding/${previousPage}`}>
          Back
        </Link>
      )}
      { nextPage && (
        <Link
        className="py-2 px-4 rounded bg-gray-200" 
          to={`/onboarding/${nextPage}`}>
          Next
        </Link>
      )}
    </div>
  )
}