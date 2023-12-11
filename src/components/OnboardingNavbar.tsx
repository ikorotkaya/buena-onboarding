import { Link } from "react-router-dom";
import { pages } from "../utils/onboarding-routing";
import { useOnboardingStore } from "../store";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import logo from "../icons/logo.svg";

export default function OnboardingNavbar({
  className = ""
}: {
  className?: string;
}) {
  const { currentPageIndex } = useOnboardingStore();
  const [previousPage, setPreviousPage] = useState(pages[currentPageIndex - 1]);

  useEffect(() => {
    setPreviousPage(pages[currentPageIndex - 1]);
  }, [currentPageIndex]);

  return (
    <nav
      className={`flex w-full h-20 max-h-20 items-center justify-between ${className}`}
    >
      <Link className="grow-0" to="/">
        <img className="h-5 grow-0" src={logo} alt="Buena" />
      </Link>

      <div className="flex items-center ">
        {currentPageIndex > 0 && (
          <Link
            to={`/onboarding/${previousPage}`}
            className="flex text-sm items-center px-4 py-1 mr-6 border rounded-full"
          >
            <ArrowLeftIcon className="w-4 mr-2" />
            Back
          </Link>
        )}

        <div className="leading-none text-neutral-500">
          {currentPageIndex + 1} / {pages.length}
        </div>
      </div>
    </nav>
  );
}
