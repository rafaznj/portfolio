import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function useLanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = i18n.language === "pt" ? "pt" : "en";

  const languages = [
    { code: "pt", label: "PT", flag: "fi-br" },
    { code: "en", label: "EN", flag: "fi-us" },
  ];

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    open,
    setOpen,
    languages,
    current,
    handleChangeLanguage,
    ref,
  };
}
