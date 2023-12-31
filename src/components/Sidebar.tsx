import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import ONBOARDING_PAGES from "../../onboarding-pages.json";
import { useOnboardingStore } from "../store";
import Navbar from "./Navbar";
import type { OnboardingStore } from "../store";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t } = useTranslation();

  const { currentPageIndex } = useOnboardingStore();
  const onboardingStore = useOnboardingStore();

  const isStepChecked = (stepIndex: number) => {
    const step = ONBOARDING_PAGES[stepIndex];
    const storeKey = step.storeKey as keyof OnboardingStore;

    return storeKey && onboardingStore[storeKey];
  };

  const isStepActive = (stepIndex: number) => {
    return !isStepChecked(stepIndex) && currentPageIndex === stepIndex;
  };

  const isStepCurrent = (stepIndex: number) => {
    return currentPageIndex === stepIndex;
  };

  return (
    <div className="hidden h-screen	 bg-sky-100 md:block">
      <div className="mb-32">
        <Navbar showLanguageSwitcher={false} />
      </div>

      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex justify-center" aria-label="Progress">
          <ol role="list" className="space-y-6">
            {ONBOARDING_PAGES.map((step, index) => (
              <li key={step.slug}>
                {isStepActive(index) && (
                  <Link
                    to={step.slug}
                    className="flex items-start"
                    aria-current="step"
                    data-testid="active-step"
                  >
                    <span
                      className="relative flex h-5 w-5 shrink-0 items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="absolute h-4 w-4 rounded-full bg-cyan-300/50" />
                      <span className="relative block h-2 w-2 rounded-full bg-cyan-700" />
                    </span>
                    <span className="ml-3 text-sm font-medium text-cyan-700">
                      {t(`pages.${step.slug}.onboardingStepName`)}
                    </span>
                  </Link>
                )}

                {isStepChecked(index) && (
                  <Link
                    to={step.slug}
                    className="group"
                    data-testid="completed-step"
                  >
                    <span className="flex items-start">
                      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                        <CheckCircleIcon
                          className={`h-full w-full text-cyan-700`}
                          aria-hidden="true"
                        />
                      </span>
                      <span
                        className={`ml-3 text-sm font-medium ${
                          isStepCurrent(index)
                            ? "text-cyan-700"
                            : "text-gray-500"
                        }`}
                      >
                        {t(`pages.${step.slug}.onboardingStepName`)}
                      </span>
                    </span>
                  </Link>
                )}

                {!isStepActive(index) && !isStepChecked(index) && (
                  <Link data-testid="inactive-step" to={step.slug}>
                    <div className="flex items-start">
                      <div
                        className="relative flex h-5 w-5 shrink-0 items-center justify-center"
                        aria-hidden="true"
                      >
                        <div className="h-2 w-2 rounded-full bg-gray-400" />
                      </div>
                      <p className="ml-3 text-sm font-medium text-gray-500">
                        {t(`pages.${step.slug}.onboardingStepName`)}
                      </p>
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
