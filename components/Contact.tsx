"use client";

import type { FormEvent } from "react";
import { site } from "@/data/site";
import { AmbientCanvas } from "./AmbientCanvas";
import { Reveal } from "./Reveal";

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "Contato pelo portfólio");
    const message = String(form.get("message") ?? "");
    const body = ["Olá, Rayssa!", "", message, "", `De: ${name}`, `E-mail: ${email}`].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact dark-section" id="contato" aria-labelledby="contact-title">
      <AmbientCanvas className="ambient-canvas" />
      <div className="contact-inner">
        <Reveal className="contact-intro">
          <p className="eyebrow">Correspondência</p>
          <h2 id="contact-title">Vamos construir.</h2>
          <p>
            Um problema relevante, um produto ambicioso ou uma boa conversa sobre tecnologia.
          </p>
        </Reveal>

        <Reveal>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="floating-field">
              <input id="contact-name" name="name" type="text" autoComplete="name" placeholder=" " required />
              <label htmlFor="contact-name">Nome</label>
            </div>
            <div className="floating-field">
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder=" " required />
              <label htmlFor="contact-email">E-mail</label>
            </div>
            <div className="floating-field field-wide">
              <input id="contact-subject" name="subject" type="text" placeholder=" " required />
              <label htmlFor="contact-subject">Assunto</label>
            </div>
            <div className="floating-field field-wide floating-message">
              <textarea id="contact-message" name="message" rows={5} placeholder=" " required />
              <label htmlFor="contact-message">Mensagem</label>
            </div>
            <button className="contact-submit field-wide" type="submit">
              Enviar mensagem <span aria-hidden="true">↗</span>
            </button>
          </form>
        </Reveal>

        <Reveal className="contact-notes">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.location}</span>
          <span>{site.languages.join(" · ")}</span>
        </Reveal>
      </div>
    </section>
  );
}
