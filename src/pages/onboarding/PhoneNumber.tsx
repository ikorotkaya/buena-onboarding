import { useEffect } from "react";
import NextButton from "../../components/NextButton";
import { useOnboardingStore } from "../../store";
import TextInput from "../../components/TextInput";

export default function PhoneNumber() {
  const { phoneNumber, setPhoneNumber, phoneNumberValid, setPhoneNumberValid } =
    useOnboardingStore();

  const validatePhoneNumber = (input: string): boolean => {
    return input.length >= 10;
  };

  const handlePhoneNumberChange = (newPhoneNumber: string): void => {
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
        <TextInput
          defaultValue={phoneNumber}
          type="text"
          placeholder="+49 123 456 7890"
          onChange={handlePhoneNumberChange}
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

      <NextButton className="hidden md:flex" disabled={!phoneNumberValid} />
    </div>
  );
}
