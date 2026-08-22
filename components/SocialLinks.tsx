"use client";

import { LuMail, LuMessageCircle } from "react-icons/lu";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { site } from "@/data/site";
import { copy } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  const { locale } = useLanguage();
  const text = copy[locale];
  const classes = `social-links${className ? ` ${className}` : ""}`;

  return (
    <nav className={classes} aria-label={text.a11y.socialProfiles}>
      <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-label="GitHub">
        <SiGithub aria-hidden="true" />
      </a>
      <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-label="LinkedIn">
        <SiLinkedin aria-hidden="true" />
      </a>
      <a href={`mailto:${site.email}`} aria-label={`${text.contact.email}: ${site.email}`} data-label={text.contact.email}>
        <LuMail aria-hidden="true" />
      </a>
      <a href="#contato" aria-label={text.nav.contact} data-label={text.nav.contact}>
        <LuMessageCircle aria-hidden="true" />
      </a>
    </nav>
  );
}
