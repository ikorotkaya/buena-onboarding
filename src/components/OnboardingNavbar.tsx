import { Link } from "react-router-dom";
import { pages } from "../utils/onboarding-routing";
import { useOnboardingStore } from "../store";
import SecondaryButton from "./buttons/SecondaryButton";
import { useState, useEffect } from "react";
import logo from "../../public/icons/logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";

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
      className={`flex h-20 max-h-20 w-full items-center justify-between ${className}`}
    >
      <Link className="grow-0" to="/">
        <img className="h-5 grow-0" src={logo} alt="Buena" />
      </Link>

      <div className="flex items-center">
        {currentPageIndex > 0 && (
          <SecondaryButton
            className="mr-5"
            link={`/onboarding/${previousPage}`}
          />
        )}

        <div className="mr-6 leading-none text-neutral-500 md:hidden">
          {currentPageIndex + 1} / {pages.length}
        </div>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}
