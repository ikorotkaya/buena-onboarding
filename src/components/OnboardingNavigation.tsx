import { Link } from "react-router-dom";
import { pages, getCurrentPageIndex } from "../utils/onboarding-routing";
import { useEffect, useState } from "react";

export default function OnboardingNavigation() {
  const [currentPageIndex, setCurrentPageIndex] = useState(getCurrentPageIndex());
  const [nextPage, setNextPage] = useState(pages[currentPageIndex + 1]);
  const [previousPage, setPreviousPage] = useState(pages[currentPageIndex - 1]);

  useEffect(() => {
    setNextPage(pages[currentPageIndex + 1]);
    setPreviousPage(pages[currentPageIndex - 1]);
  }, [currentPageIndex]);

  return (
    <div>
      { previousPage && (
        <Link 
          onClick={() => setCurrentPageIndex(currentPageIndex - 1)}
          to={`/onboarding/${previousPage}`}>
          Back
        </Link>
      )}
      { nextPage && (
        <Link 
          onClick={() => setCurrentPageIndex(currentPageIndex + 1)}
          to={`/onboarding/${nextPage}`}>
          Next
        </Link>
      )}
    </div>
  )
}