"use client";

import { site } from "@/data/site";
import { copy } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";
import { MeanderDivider } from "./Ornaments";

export function Footer() {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <footer className="footer">
      <MeanderDivider className="footer-meander" />
      <a className="footer-mark" href="#inicio" aria-label={text.a11y.goHome}>
        RGF
      </a>
      <p className="footer-name">{site.name}</p>
      <nav className="footer-navigation" aria-label={text.a11y.primaryNav}>
        <a href="#trajetoria">{text.nav.experience}</a>
        <a href="#habilidades">{text.nav.skills}</a>
        <a href="#projetos">{text.nav.projects}</a>
        <a href="#principios">{text.nav.principles}</a>
        <a href="#contato">{text.nav.contact}</a>
      </nav>
      <div className="footer-socials">
        <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <p className="footer-build">{text.footer.build}</p>
      <p className="footer-copy">{text.footer.copyright}</p>
    </footer>
  );
}
