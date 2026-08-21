"use client";

import { copy } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";

export function LocalizedSkipLink() {
  const { locale } = useLanguage();
  return (
    <a className="skip-link" href="#conteudo">
      {copy[locale].a11y.skipContent}
    </a>
  );
}
