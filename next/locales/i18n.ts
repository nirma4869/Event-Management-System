import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import localStorageAvailable from "../utils/localStorageAvailable";
import { defaultLang } from "./config-lang";
import deLocales from "./langs/de";
import enLocales from "./langs/en";

// ----------------------------------------------------------------------

let lng = defaultLang.value;

const storageAvailable = localStorageAvailable();

if (storageAvailable) {
  lng = localStorage.getItem("i18nextLng") || defaultLang.value;
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enLocales },
      de: { translations: deLocales },
    },
    lng,
    fallbackLng: defaultLang.value,
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: { escapeValue: false },
  });

export default i18n;
