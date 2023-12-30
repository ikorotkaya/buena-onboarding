import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageDropDownMenu from "./LanguageDropDown";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (!menuOpen) return;
      if (menuOpen && !target.closest("[data-testid='language-switcher-icon']"))
        setMenuOpen(false);
    });
  }, [menuOpen]);

  return (
    <div className="relative flex items-center justify-end">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div
        role="button"
        data-testid="language-switcher-icon"
        className="w-7"
        onClick={toggleMenu}
      >
        <img
          src={`/icons/languages/${i18n.language}.svg`}
          alt={t("components.LanguageSwitcher.choose_language")}
        />
      </div>
      {menuOpen && <LanguageDropDownMenu setMenuOpen={setMenuOpen} />}
    </div>
  );
}
