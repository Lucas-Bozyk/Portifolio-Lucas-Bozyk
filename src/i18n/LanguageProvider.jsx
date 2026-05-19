import { useEffect, useMemo, useState } from "react";
import { CONTENT, LANGUAGES } from "../data";
import { LanguageContext } from "./languageContext";

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (CONTENT[savedLanguage]) return savedLanguage;

  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("es")) return "es";
  if (browserLanguage.startsWith("en")) return "en";
  if (browserLanguage === "pt-pt") return "pt";
  if (browserLanguage.startsWith("pt")) return "br";
  return "br";
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);
  const content = CONTENT[language] ?? CONTENT.pt;

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "br" ? "pt-BR" : language === "pt" ? "pt-PT" : language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      languages: LANGUAGES,
      setLanguage,
      content,
    }),
    [content, language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
