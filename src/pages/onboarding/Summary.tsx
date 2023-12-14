import { useOnboardingStore } from "../../store";
import Headline from "../../components/Headline";
import AnimatedPrimaryButton from "../../components/buttons/AnimatedPrimaryButton";
import { OnboardingStore } from "../../store";
import ONBOARDING_PAGES from "../../../onboarding-pages.json";

export default function Summary() {
  const { name, email, phoneNumber, income } = useOnboardingStore();
  const onboardingStore = useOnboardingStore();

  const validityStoreKeys = ONBOARDING_PAGES.filter(
    (step) => step.storeKey
  ).map((step) => step.storeKey);

  const buttonEnabled = validityStoreKeys.every(
    (storeKey) => onboardingStore[storeKey as keyof OnboardingStore]
  );

  return (
    <div className="flex flex-col pt-52 md:max-w-xl">
      <Headline style="3xl">Check your info:</Headline>

      <div
        data-testid="summary"
        className="mb-12 grid grid-cols-[1fr,2fr] gap-1 border-dashed border-[1px] border-stone-300 rounded-md"
      >
        <div className="px-4 py-2">Name:</div>
        <div className="px-4 py-2">{name}</div>
        <div className="px-4 py-2">Email:</div>
        <div className="px-4 py-2">{email}</div>
        <div className="px-4 py-2">Phone Number:</div>
        <div className="px-4 py-2">{phoneNumber}</div>
        <div className="px-4 py-2">Income:</div>
        <div className="px-4 py-2">{income}</div>
      </div>

      <div className="py-4 px-8 md:p-0 w-full fixed md:relative bottom-0 left-0">
        <AnimatedPrimaryButton
          link="/final-page"
          textId="submit-button"
          disabled={!buttonEnabled}
        >
          Submit
        </AnimatedPrimaryButton>
      </div>
    </div>
  );
}
