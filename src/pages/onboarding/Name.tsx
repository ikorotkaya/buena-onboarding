import { useEffect } from "react";
import NextButton from "../../components/buttons/NextButton";
import { useOnboardingStore } from "../../store";
import TextInput from "../../components/TextInput";
import Headline from "../../components/headlines/Headline";
import ErrorMessage from "../../components/ErrorMessage";
import { useTranslation } from "react-i18next";

export default function Name() {
  const { t } = useTranslation();
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
      <Headline style="3xl">{t("pages.name.headline")}</Headline>

      <div className="mb-4">
        <TextInput
          defaultValue={name}
          type="text"
          placeholder={t("pages.name.placeholder")}
          onChange={handleNameChange}
        />

        {!nameValid && name && (
          <ErrorMessage>{t("pages.name.errorMessage")}</ErrorMessage>
        )}
      </div>

      <NextButton className="hidden md:flex" disabled={!nameValid} />
    </div>
  );
}
