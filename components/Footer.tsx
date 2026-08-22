"use client";

import { copy } from "@/data/translations";
import { AmbientCanvas } from "./AmbientCanvas";
import { useLanguage } from "./LanguageProvider";
import { MementoSkull } from "./Ornaments";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const { locale } = useLanguage();
  const text = copy[locale].footer;

  return (
    <footer className="footer dark-section">
      <AmbientCanvas className="ambient-canvas" density={26} />

      <div className="footer-inner">
        <div className="memento">
          <MementoSkull className="memento-mark" />
          <h2 className="memento-title">{text.memento}</h2>
          <p className="memento-gloss">{text.mementoGloss}</p>
        </div>

        <SocialLinks className="footer-socials" />

        <div className="footer-meta">
          <p className="footer-copy">{text.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
