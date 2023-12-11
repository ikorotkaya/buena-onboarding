import { useEffect } from "react";
import NextButton from "../../components/NextButton";
import { useOnboardingStore } from "../../store";
import TextInput from "../../components/TextInput";
import Headline from "../../components/Headline";
import ErrorMessage from "../../components/ErrorMessage";

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
      <Headline style="3xl">What is your full name?</Headline>

      <div className="mb-4">
        <TextInput
          defaultValue={name}
          type="text"
          placeholder="Jane Smith"
          onChange={handleNameChange}
        />

        {!nameValid && name && <ErrorMessage type="name" />}
      </div>

      <NextButton className="hidden md:flex" disabled={!nameValid} />
    </div>
  );
}
