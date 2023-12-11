import { useEffect } from "react";
import OnboardingNavigation from "../../components/OnboardingNavigation";
import { useOnboardingStore } from "../../store";

export default function Email() {
  const {
    email,
    setEmail,
    emailValid,
    setEmailValid,
  } = useOnboardingStore();

  const validateEmail = (input: string) => {
    const emailRegex = /^[a-zA-Z0-9/]+@[a-zA-Z0-9/]+\.[a-zA-Z0-9/]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };
  useEffect(() => {
    setEmailValid(validateEmail(email));
  }, [email]);

  return (
    <div className="flex flex-col pt-52 md:max-w-xl">
      <h2 className="block mb-8 text-3xl font-bold text-stone-900 sm:text-4xl">
        What is your email?
      </h2>

      <div className="mb-4">
        <input
          defaultValue={email}
          type="email"
          placeholder="you@example.com"
          className="block w-full rounded-md border-0 px-4 py-1.5 text-stone-900 
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
          onChange={handleEmailChange}
        />
        {!emailValid && email && (
          <div 
            data-testid="input-error"
            className="absolute mt-2 text-sm text-red-500">
            Please enter a valid email address.
          </div>
        )}
      </div>

      <OnboardingNavigation
        className="hidden md:flex"
        disabled={!emailValid}
      />
    </div>
  );
}
