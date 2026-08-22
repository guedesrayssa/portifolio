"use client";

import { copy } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <footer className="footer">
      <p className="footer-copy">{text.footer.copyright}</p>
    </footer>
  );
}
