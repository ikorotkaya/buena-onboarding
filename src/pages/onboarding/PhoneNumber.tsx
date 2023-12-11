import { useEffect } from "react";
import NextButton from "../../components/NextButton";
import { useOnboardingStore } from "../../store";
import TextInput from "../../components/TextInput";
import Headline from "../../components/Headline";
import ErrorMessage from "../../components/ErrorMessage";

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
      <Headline style="3xl">What is your phone number?</Headline>

      <div className="mb-4">
        <TextInput
          defaultValue={phoneNumber}
          type="text"
          placeholder="+49 123 456 7890"
          onChange={handlePhoneNumberChange}
        />

        {!phoneNumberValid && phoneNumber && (
          <ErrorMessage type="phone number" />
        )}
      </div>

      <NextButton className="hidden md:flex" disabled={!phoneNumberValid} />
    </div>
  );
}
