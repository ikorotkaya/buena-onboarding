import { pages } from "../utils/onboarding-routing";
import { useOnboardingStore } from "../store";

export default function Navbar() {
  const { currentPageIndex } = useOnboardingStore();

  return (
    <nav className="flex items-center justify-between">
      <div>
        <img src="/logo.svg" alt="Buena" />
      </div>

      <div>
        { currentPageIndex + 1 } / { pages.length }  
      </div>
    </nav>
  )
}