import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import ONBOARDING_PAGES from "../../onboarding-pages.json";
import { useOnboardingStore } from "../store";

export default function Sidebar() {
  const { currentPageIndex } = useOnboardingStore();
  const onboardingStore = useOnboardingStore();

  const isStepChecked = (stepIndex: number) => {
    const step = ONBOARDING_PAGES[stepIndex];

    return step.storeKey && !!onboardingStore[step.storeKey];
  };

  const isStepActive = (stepIndex: number) => {
    return !isStepChecked(stepIndex) && currentPageIndex === stepIndex;
  };

  const isStepCurrent = (stepIndex: number) => {
    return currentPageIndex === stepIndex;
  };

  return (
    <div className="h-screen bg-slate-300 hidden md:block">
      <div className="px-8 py-4 mb-36">
        <Link to="/">
          <img src="/logo.svg" alt="Buena" />
        </Link>
      </div>

      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex justify-center" aria-label="Progress">
          <ol role="list" className="space-y-6">
            {ONBOARDING_PAGES.map((step, index) => (
              <li key={step.name}>
                {isStepActive(index) && (
                  <Link
                    to={step.slug}
                    className="flex items-start"
                    aria-current="step"
                  >
                    <span
                      className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="absolute h-4 w-4 rounded-full bg-indigo-300" />
                      <span className="relative block h-2 w-2 rounded-full bg-indigo-600" />
                    </span>
                    <span className="ml-3 text-sm font-medium text-indigo-600">
                      {step.name}
                    </span>
                  </Link>
                )}

                {isStepChecked(index) && (
                  <Link to={step.slug} className="group">
                    <span className="flex items-start">
                      <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                        <CheckCircleIcon
                          className={`h-full w-full text-indigo-600`}
                          aria-hidden="true"
                        />
                      </span>
                      <span
                        className={`ml-3 text-sm font-medium ${
                          isStepCurrent(index)
                            ? "text-indigo-600"
                            : "text-gray-500"
                        }`}
                      >
                        {step.name}
                      </span>
                    </span>
                  </Link>
                )}

                {!isStepActive(index) && !isStepChecked(index) && (
                  <Link to={step.slug}>
                    <div className="flex items-start">
                      <div
                        className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                        aria-hidden="true"
                      >
                        <div className="h-2 w-2 rounded-full bg-gray-400" />
                      </div>
                      <p className="ml-3 text-sm font-medium text-gray-500">
                        {step.name}
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
