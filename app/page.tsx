import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GlobalAffordances } from "@/components/GlobalAffordances";
import { Hero } from "@/components/Hero";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LeafCursor } from "@/components/LeafCursor";
import { LocalizedSkipLink } from "@/components/LocalizedSkipLink";
import { MotionProvider } from "@/components/MotionProvider";
import { Principles } from "@/components/Principles";
import { Projects } from "@/components/Projects";
import { SectionDivider } from "@/components/SectionDivider";
import { Skills } from "@/components/Skills";
import { Trajectory } from "@/components/Trajectory";
import { site } from "@/data/site";

export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin],
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
        <LeafCursor />
        <main id="conteudo">
          <Hero />
          <About />
          <SectionDivider tone="light" />
          <Trajectory />
          <SectionDivider tone="dark" />
          <Skills />
          <SectionDivider tone="light" />
          <Projects />
          <SectionDivider tone="light" />
          <Principles />
          <SectionDivider tone="dark" />
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
