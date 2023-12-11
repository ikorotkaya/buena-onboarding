import { useOnboardingStore } from "../store";
import { Link } from "react-router-dom";
import ONBOARDING_PAGES from "../../onboarding-pages.json";
import type { OnboardingStore } from "../store";

export default function SubmitButton() {
  const onboardingStore = useOnboardingStore();

  const validityStoreKeys = ONBOARDING_PAGES.filter((step) => step.storeKey).map((step) => step.storeKey);
  const buttonEnabled = validityStoreKeys.every((storeKey) => onboardingStore[storeKey as keyof OnboardingStore]);

  return (
    <>
      <Link
        to="/final-page"
        data-testid="submit-button"
        className={`relative w-full inline-flex items-center 
          justify-center px-6 py-3 overflow-hidden font-medium 
          transition duration-300 ease-out bg-cyan-500 text-white 
          rounded-md group 
          ${buttonEnabled ? "cursor-pointer " : "bg-neutral-400 pointer-events-none"}`}
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-500 group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
          Submit
        </span>
        <span className="relative invisible">Submit</span>
      </Link>
    </>
  );
}
