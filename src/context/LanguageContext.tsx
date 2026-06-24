import { createContext, useContext, useState, type ReactNode } from "react";
import en from "../i18n/en";
import da from "../i18n/da";

const languages = { en, da };

type Language = "en" | "da";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "da" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: languages[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
