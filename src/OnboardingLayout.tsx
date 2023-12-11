import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/OnboardingNavbar";
import OnboardingNavigation from "./components/OnboardingNavigation";
import { useOnboardingStore } from "./store";
import { useEffect } from "react";
import ONBOARDING_PAGES from "../onboarding-pages.json";
import { useState } from "react";

export default function OnboardingLayout() {
  const {
    currentPageIndex,
    nameValid,
    emailValid,
    phoneNumberValid,
    incomeValid,
  } = useOnboardingStore();

  const onboardingStore = useOnboardingStore();

  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  useEffect(() => {
    const step = ONBOARDING_PAGES[currentPageIndex];
    if (step && step.storeKey) {
      setIsNextButtonDisabled(
        !step.storeKey || !onboardingStore[step.storeKey]
      );
    }
  }, [currentPageIndex, nameValid, emailValid, phoneNumberValid, incomeValid]);

  return (
    <div className="grid col-auto	p-8 md:p-0 md:grid-cols-[1fr,2fr] md:gap-4 md:h-screen">
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      <main className="">
        <Navbar className="px-8 py-4 min-h-8 fixed top-0 left-0 md:hidden" />

        <Outlet />

        <OnboardingNavigation
          disabled={isNextButtonDisabled}
          className="fixed bottom-0 left-0 md:hidden"
        />
      </main>
    </div>
  );
}
