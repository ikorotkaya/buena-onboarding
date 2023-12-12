import { Link } from "react-router-dom";
import { pages } from "../utils/onboarding-routing";
import { useOnboardingStore } from "../store";
import SecondaryButton from "./buttons/SecondaryButton";
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
          <SecondaryButton link={`/onboarding/${previousPage}`} />
        )}

        <div className="leading-none text-neutral-500">
          {currentPageIndex + 1} / {pages.length}
        </div>
      </div>
    </nav>
  );
}
