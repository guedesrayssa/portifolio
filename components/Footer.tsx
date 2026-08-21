import { site } from "@/data/site";
import { MeanderDivider } from "./Ornaments";

export function Footer() {
  return (
    <footer className="footer">
      <MeanderDivider className="footer-meander" />
      <a className="footer-mark" href="#inicio" aria-label="Voltar ao início">
        RGF
      </a>
      <p className="footer-name">{site.name}</p>
      <nav className="footer-navigation" aria-label="Navegação do rodapé">
        <a href="#trajetoria">Experiência</a>
        <a href="#habilidades">Fundamentos</a>
        <a href="#projetos">Projetos</a>
        <a href="#principios">Princípios</a>
        <a href="#contato">Contato</a>
      </nav>
      <div className="footer-socials">
        <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <p className="footer-build">Projetado e construído com intenção · São Paulo · MMXXVI</p>
      <p className="footer-copy">© 2026 Rayssa Guedes França. Todos os direitos reservados.</p>
    </footer>
  );
}
