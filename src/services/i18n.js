import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/trans.json";
import thTranslation from "./locales/th/trans.json";

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem("language") ?? "en",
    // ns: ["trans"],
    // defaultNS: "trans",
    resources: {
      en: {
        translation: enTranslation,
      },
      th: {
        translation: thTranslation,
      },
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

export default i18n;
