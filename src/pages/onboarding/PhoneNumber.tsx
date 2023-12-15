import { useEffect } from "react";
import NextButton from "../../components/buttons/NextButton";
import { useOnboardingStore } from "../../store";
import TextInput from "../../components/TextInput";
import Headline from "../../components/headlines/Headline";
import ErrorMessage from "../../components/ErrorMessage";
import { useTranslation } from "react-i18next";

export default function PhoneNumber() {
  const { t } = useTranslation();
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
      <Headline style="3xl">{t("pages.phone.headline")}</Headline>

      <div className="mb-4">
        <TextInput
          defaultValue={phoneNumber}
          type="text"
          placeholder="+49 123 456 7890"
          onChange={handlePhoneNumberChange}
        />

        {!phoneNumberValid && phoneNumber && (
          <ErrorMessage>{t("pages.phone.errorMessage")}</ErrorMessage>
        )}
      </div>

      <NextButton className="hidden md:flex" disabled={!phoneNumberValid} />
    </div>
  );
}
