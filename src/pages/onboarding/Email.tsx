import { useEffect } from "react";
import NextButton from "../../components/buttons/NextButton";
import { useOnboardingStore } from "../../store";
import TextInput from "../../components/TextInput";
import Headline from "../../components/headlines/Headline";
import ErrorMessage from "../../components/ErrorMessage";
import { useTranslation } from "react-i18next";

export default function Email() {
  const { t } = useTranslation();
  const { email, setEmail, emailValid, setEmailValid } = useOnboardingStore();

  const validateEmail = (input: string) => {
    const emailRegex = /^[a-zA-Z0-9/]+@[a-zA-Z0-9/]+\.[a-zA-Z0-9/]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  useEffect(() => {
    setEmailValid(validateEmail(email));
  }, [email]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col pt-52 md:max-w-xl">
      <Headline style="3xl">{t("pages.email.headline")}</Headline>

      <div className="mb-4">
        <TextInput
          defaultValue={email}
          type="email"
          placeholder="you@example.com"
          onChange={handleEmailChange}
        />

        {!emailValid && email && (
          <ErrorMessage>{t("pages.email.errorMessage")}</ErrorMessage>
        )}
      </div>

      <NextButton className="hidden md:flex" disabled={!emailValid} />
    </div>
  );
}
