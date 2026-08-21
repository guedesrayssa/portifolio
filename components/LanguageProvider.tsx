"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "pt" | "en";

type LanguageContextValue = {
  locale: Locale;
  isEnglish: boolean;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      isEnglish: locale === "en",
      toggleLocale: () => setLocale((current) => (current === "pt" ? "en" : "pt")),
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
