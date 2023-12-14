import Headline from "../components/Headline";
import Subheadline from "../components/Subheadline";
import AnimatedPrimaryButton from "../components/buttons/AnimatedPrimaryButton";
import ONBOARDING_STEPS from "../../onboarding-pages.json";

export default function HomePage() {
  return (
    <div className="grid grid-rows-[3fr,2fr,1fr] ">
      <div className="flex items-end justify-center text-center">
        <Headline>Welcome to Buena</Headline>
      </div>

      <Subheadline>
        Enter your personal details and start your journey today.
      </Subheadline>

      <div className="flex flex-row justify-center items-end pb-4">
        <AnimatedPrimaryButton
          link={`/onboarding/${ONBOARDING_STEPS[0].slug}`}
          testId="homepage-cta"
          className="md:w-auto"
        >
          Get started
        </AnimatedPrimaryButton>
      </div>
    </div>
  );
}
