import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationPTBR from './pt-br.json';
import translationEN from './en.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: translationPTBR },
    en: { translation: translationEN },
  },
  lng: 'pt',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;