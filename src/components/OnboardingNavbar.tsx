import { Link } from "react-router-dom";
import { pages } from "../utils/onboarding-routing";
import { useOnboardingStore } from "../store";

export default function OnboardingNavbar() {
  const { currentPageIndex } = useOnboardingStore();

  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link
          to="/">
          <img src="/logo.svg" alt="Buena" />
        </Link>
      </div>

      <div>
        { currentPageIndex + 1 } / { pages.length }  
      </div>
    </nav>
  )
}