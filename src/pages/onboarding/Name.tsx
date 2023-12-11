import { useEffect } from "react";
import NextButton from "../../components/NextButton";
import { useOnboardingStore } from "../../store";
import TextInput from "../../components/TextInput";

export default function Name() {
  const { name, setName, nameValid, setNameValid } = useOnboardingStore();

  const validateName = (input: string) => {
    return input.length >= 2;
  };

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  useEffect(() => {
    setNameValid(validateName(name));
  }, [name]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col pt-52 md:max-w-xl">
      <h2 className="block mb-8 text-3xl font-bold text-stone-900 sm:text-4xl">
        What is your full name?
      </h2>

      <div className="mb-4">
        <TextInput
          defaultValue={name}
          type="text"
          placeholder="Jane Smith"
          onChange={handleNameChange}
        />

        {!nameValid && name && (
          <div
            data-testid="input-error"
            className="absolute mt-2 text-sm text-red-500"
          >
            Please enter a valid name.
          </div>
        )}
      </div>

      <NextButton className="hidden md:flex" disabled={!nameValid} />
    </div>
  );
}
