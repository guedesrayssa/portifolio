"use client";

import type { FormEvent } from "react";
import { site } from "@/data/site";
import { copy, siteEn } from "@/data/translations";
import { AmbientCanvas } from "./AmbientCanvas";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

export function Contact() {
  const { locale, isEnglish } = useLanguage();
  const text = copy[locale].contact;
  const languages = isEnglish ? siteEn.languages : site.languages;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? text.defaultSubject);
    const message = String(form.get("message") ?? "");
    const body = [text.greeting, "", message, "", `${text.from}: ${name}`, `${text.email}: ${email}`].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact dark-section" id="contato" aria-labelledby="contact-title">
      <AmbientCanvas className="ambient-canvas" />
      <div className="contact-inner">
        <Reveal className="contact-intro">
          <p className="eyebrow">{text.eyebrow}</p>
          <h2 id="contact-title">{text.title}</h2>
          <p>{text.intro}</p>
        </Reveal>

        <Reveal>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="floating-field">
              <input id="contact-name" name="name" type="text" autoComplete="name" placeholder=" " required />
              <label htmlFor="contact-name">{text.name}</label>
            </div>
            <div className="floating-field">
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder=" " required />
              <label htmlFor="contact-email">{text.email}</label>
            </div>
            <div className="floating-field field-wide">
              <input id="contact-subject" name="subject" type="text" placeholder=" " required />
              <label htmlFor="contact-subject">{text.subject}</label>
            </div>
            <div className="floating-field field-wide floating-message">
              <textarea id="contact-message" name="message" rows={5} placeholder=" " required />
              <label htmlFor="contact-message">{text.message}</label>
            </div>
            <button className="contact-submit field-wide" type="submit">
              {text.submit} <span aria-hidden="true">↗</span>
            </button>
          </form>
        </Reveal>

        <Reveal className="contact-notes">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.location}</span>
          <span>{languages.join(" · ")}</span>
        </Reveal>
      </div>
    </section>
  );
}
