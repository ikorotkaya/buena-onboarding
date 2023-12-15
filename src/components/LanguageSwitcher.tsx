import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageDropDownMenu from "./LanguageDropDown";

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (!menuOpen) return;
      if (menuOpen && !target.closest(".language-icon")) setMenuOpen(false);
    });
  }, [menuOpen]);

  return (
    <div className="relative flex items-center justify-end">
      <div role="button" className="language-icon w-7" onClick={toggleMenu}>
        <img src={t("imageLink")} alt="choose-language" />
      </div>
      {menuOpen && <LanguageDropDownMenu setMenuOpen={setMenuOpen} />}
    </div>
  );
}
