import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "./locales/en/translationEn.json";
import translationDe from "./locales/de/translationDe.json";

const resources = {
  en: {
    translation: translationEn
  },
  de: {
    translation: translationDe
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
