import { existsSync } from "node:fs";
import path from "node:path";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GlobalAffordances } from "@/components/GlobalAffordances";
import { Hero } from "@/components/Hero";
import { Library } from "@/components/Library";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LocalizedSkipLink } from "@/components/LocalizedSkipLink";
import { MotionProvider } from "@/components/MotionProvider";
import { Principles } from "@/components/Principles";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Trajectory } from "@/components/Trajectory";
import { site } from "@/data/site";

export const dynamic = "force-static";

const hasPortrait = existsSync(path.join(process.cwd(), "public", "rayssa.jpg"));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Inteli" },
    { "@type": "CollegeOrUniversity", name: "UFABC" },
  ],
  knowsLanguage: ["Português", "Inglês"],
};

export default function Home() {
  return (
    <LanguageProvider>
      <MotionProvider>
      <LocalizedSkipLink />
      <GlobalAffordances />
      <main id="conteudo">
        <Hero hasPortrait={hasPortrait} />
        <Trajectory />
        <Skills />
        <Projects />
        <Library />
        <Principles />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      </MotionProvider>
    </LanguageProvider>
  );
}
