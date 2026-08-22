# Portfólio — Rayssa Guedes França

Portfólio pessoal one-page construído com Next.js, TypeScript, Tailwind CSS e Framer Motion. O projeto é totalmente estático e está preparado para deploy na Vercel.

## Rodar localmente

Requisitos: Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar a versão de produção

```bash
npm run lint
npm run build
```

O build estático é gerado em `out/`.

## Personalização

- O retrato usado na seção Sobre está em `public/ray.jpg`; o busto geométrico do hero permanece em `public/classical-bust-geometric.png`.
- Substitua os placeholders dos projetos em `components/Projects.tsx` por screenshots reais, se disponíveis.
- Para o formulário usar um serviço web em vez do aplicativo de e-mail, conecte um endpoint real do Formspree em `components/Contact.tsx`.

## Deploy na Vercel

1. Envie este diretório para um repositório GitHub.
2. Na Vercel, escolha **Add New → Project** e importe o repositório.
3. Mantenha o preset **Next.js** e o comando de build `npm run build`.
4. Defina `NEXT_PUBLIC_SITE_URL` com o domínio final, incluindo `https://`, para publicar canonical e imagem Open Graph completos. O projeto também reconhece `VERCEL_PROJECT_PRODUCTION_URL` automaticamente quando essa variável estiver exposta pela Vercel.
5. Publique. A Vercel servirá o conteúdo estático gerado pelo Next.js.

## Estrutura principal

- `app/`: rota, layout, SEO, favicon e estilos globais.
- `components/`: seções e componentes de interação/movimento.
- `data/`: experiências, habilidades, princípios, projetos e dados pessoais.
- `types/`: tipos TypeScript compartilhados.
- `public/og-engineer.png`: imagem social do portfólio.
