import { useEffect } from "react";
import NextButton from "../../components/NextButton";
import { useOnboardingStore } from "../../store";
import TextInput from "../../components/TextInput";

export default function Email() {
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
      <h2 className="block mb-8 text-3xl font-bold text-stone-900 sm:text-4xl">
        What is your email?
      </h2>

      <div className="mb-4">
        <TextInput
          defaultValue={email}
          type="email"
          placeholder="you@example.com"
          onChange={handleEmailChange}
        />

        {!emailValid && email && (
          <div
            data-testid="input-error"
            className="absolute mt-2 text-sm text-red-500"
          >
            Please enter a valid email address.
          </div>
        )}
      </div>

      <NextButton className="hidden md:flex" disabled={!emailValid} />
    </div>
  );
}
