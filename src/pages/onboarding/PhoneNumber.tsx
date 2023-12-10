import { useEffect } from "react";
import OnboardingNavigation from "../../components/OnboardingNavigation";
import { useOnboardingStore } from "../../store";

export default function PhoneNumber() {
  const { phoneNumber, setPhoneNumber, phoneNumberValid, setPhoneNumberValid} = useOnboardingStore();

  const validatePhoneNumber = (input: string): boolean => {
    return input.length >= 10;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newPhoneNumber: string = e.target.value;
    setPhoneNumber(newPhoneNumber);
  };

  useEffect(() => {
    setPhoneNumberValid(validatePhoneNumber(phoneNumber));
  }, [phoneNumber]);

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
          onChange={handleInputChange}
        />
        {!phoneNumberValid && phoneNumber && (
          <div className="absolute mt-2 text-sm text-red-500">
            Please enter a valid phone number.
          </div>
        )}
      </div>

      <OnboardingNavigation
        className="hidden md:flex"
        disabled={!phoneNumberValid}
      />
    </div>
  );
}
