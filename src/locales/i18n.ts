import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./i18nResources";

const initI18n = (defaultLanguage: string = "en") => {
  i18n.use(initReactI18next).init({
    resources,
    lng: defaultLanguage,
    interpolation: {
      escapeValue: false, 
    },
  });

  return i18n;
};

export default initI18n;
