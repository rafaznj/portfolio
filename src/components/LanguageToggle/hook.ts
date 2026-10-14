import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import usePersistedState from "../../hooks/use-persisted-state";

type Language = "en" | "pt";

export function useLanguageToggle() {
  const { i18n } = useTranslation();

  const [language, setLanguage] = usePersistedState<Language>(
    "lang",
    i18n.language === "pt" ? "pt" : "en",
  );

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    if (i18n.language !== language) void i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");

  return { language, toggleLanguage };
}
