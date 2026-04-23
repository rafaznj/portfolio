import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import usePersistedState from "../../hooks/use-persisted-state";

type Language = "pt" | "en";

export default function useLanguageToggle() {
  const { i18n } = useTranslation();

  const [language, setLanguage] = usePersistedState<Language>(
    "lang",
    i18n.language === "pt" ? "pt" : "en",
  );

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return {
    language,
    toggleLanguage,
  };
}
