import OnboardingNavigation from "../../components/OnboardingNavigation";
import { useOnboardingStore } from "../../store";

export default function PhoneNumber() {
  const { phoneNumber, setPhoneNumber } = useOnboardingStore();

  return (
    <div className="flex flex-col pt-48 md:max-w-xl">
      <h2 className="block mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
        What is your phone number?
      </h2>

      <div className="mb-4">
        <input
          defaultValue={phoneNumber}
          type="text"
          placeholder="+49 123 456 7890"
          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <OnboardingNavigation
        className="hidden md:flex" />
    </div>
  );
}
