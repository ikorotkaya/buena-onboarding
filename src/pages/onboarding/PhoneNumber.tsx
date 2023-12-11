import { useEffect } from "react";
import NextButton from "../../components/NextButton";
import { useOnboardingStore } from "../../store";

export default function PhoneNumber() {
  const { phoneNumber, setPhoneNumber, phoneNumberValid, setPhoneNumberValid } =
    useOnboardingStore();

  const validatePhoneNumber = (input: string): boolean => {
    return input.length >= 10;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newPhoneNumber: string = e.target.value;
    setPhoneNumber(newPhoneNumber);
  };

  useEffect(() => {
    setPhoneNumberValid(validatePhoneNumber(phoneNumber));
  }, [phoneNumber]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col pt-52 md:max-w-xl">
      <h2 className="block mb-8 text-3xl font-bold text-stone-900 sm:text-4xl">
        What is your phone number?
      </h2>

      <div className="mb-4">
        <input
          defaultValue={phoneNumber}
          type="text"
          placeholder="+49 123 456 7890"
          className="block w-full rounded-md border-0 px-4 py-1.5 text-stone-900 
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
          onChange={handleInputChange}
        />
        {!phoneNumberValid && phoneNumber && (
          <div
            data-testid="input-error"
            className="absolute mt-2 text-sm text-red-500"
          >
            Please enter a valid phone number.
          </div>
        )}
      </div>

      <NextButton
        className="hidden md:flex"
        disabled={!phoneNumberValid}
      />
    </div>
  );
}
