import { useTranslation } from "react-i18next";

export type LanguageDropDownMenuProps = {
  setMenuOpen: (open: boolean) => void;
};

export default function LanguageDropDownMenu({
  setMenuOpen
}: LanguageDropDownMenuProps) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const handleChange = (language: string) => {
    changeLanguage(language);
    setMenuOpen(false);
  };

  const availableLanguages =
    typeof i18n.options.resources === "object"
      ? Object.keys(i18n.options.resources)
      : [];

  return (
    <div
      className="absolute right-0 top-full z-10 flex 
      w-max origin-top-right flex-col items-center rounded-md border-2 border-white 
      bg-white text-stone-900 md:w-max md:border-stone-900 "
    >
      {availableLanguages.map((language) => (
        <div
          className="flex w-24 cursor-pointer flex-col items-center justify-center p-2 first:rounded-t-md last:rounded-b-md hover:bg-[#80DCAC]"
          key={language}
          onClick={() => handleChange(language)}
        >
          {t(language)}
        </div>
      ))}
    </div>
  );
}
