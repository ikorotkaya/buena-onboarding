import { Link } from "react-router-dom";
import { pages } from "../utils/onboarding-routing";
import { useOnboardingStore } from "../store";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import logo from "../icons/logo.svg";

export default function OnboardingNavbar({ className = ""}: { className?: string}) {
  const { currentPageIndex } = useOnboardingStore();
  const [previousPage, setPreviousPage] = useState(pages[currentPageIndex - 1]);

  useEffect(() => {
    setPreviousPage(pages[currentPageIndex - 1]);
  }, [currentPageIndex]);

  return (
    <nav className={`flex w-full items-center justify-between ${className}`}>
      <div>
        <Link
          to="/">
          <img src={logo} alt="Buena" />
        </Link>
      </div>

      <div className="flex items-center">
        { currentPageIndex > 0 && (<Link
          to={`/onboarding/${previousPage}`}
          className="flex items-center px-4 py-1 mr-6 border rounded-full">
          <ArrowLeftIcon
            className="w-4 mr-2" />
          Back
        </Link>)}

        { currentPageIndex + 1 } / { pages.length }  
      </div>
    </nav>
  )
}