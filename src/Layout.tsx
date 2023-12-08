import { Outlet } from "react-router-dom";
import { pages } from "./utils/onboarding-routing";
import { useOnboardingStore } from "./store";

export default function Layout() {
  const { currentPageIndex } = useOnboardingStore();
  
  return (
    <div>
      <nav className="flex justify-end">
        { currentPageIndex + 1 } / { pages.length }  
      </nav>

      <Outlet />
    </div>
  );
}
