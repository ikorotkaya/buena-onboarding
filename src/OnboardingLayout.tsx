import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/OnboardingNavbar";
import NextButton from "./components/buttons/NextButton";
import { useOnboardingStore } from "./store";
import { useEffect } from "react";
import ONBOARDING_PAGES from "../onboarding-pages.json";
import { useState } from "react";
import type { OnboardingStore } from "./store";

export default function OnboardingLayout() {
  const { currentPageIndex } = useOnboardingStore();

  const onboardingStore = useOnboardingStore();

  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  useEffect(() => {
    const step = ONBOARDING_PAGES[currentPageIndex];
    if (step && step.storeKey) {
      setIsNextButtonDisabled(
        !step.storeKey ||
          !onboardingStore[step.storeKey as keyof OnboardingStore]
      );
    }
  }, [currentPageIndex, onboardingStore]);

  return (
    <div className="grid col-auto	p-8 md:p-0 md:grid-cols-[1fr,2fr] md:h-screen">
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      <main className="">
        <Navbar className="px-8 py-7 fixed top-0 left-0 md:hidden" />

        <div className="px-0 md:px-16">
          <Outlet />
        </div>

        <NextButton
          disabled={isNextButtonDisabled}
          className="fixed bottom-0 left-0 md:hidden"
        />
      </main>
    </div>
  );
}
