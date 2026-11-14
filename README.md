# Portfólio — Anderson Franciscato

Portfólio pessoal de Anderson Franciscato, desenvolvedor full stack com foco em
frontend. Site estático publicado no GitHub Pages em
[andersonfranciscato.dev](https://andersonfranciscato.dev).

## Stack

- [Astro](https://astro.build) 7 — geração estática, sem framework no cliente
- [Tailwind CSS](https://tailwindcss.com) v4 — design tokens em CSS
- TypeScript
- `@astrojs/sitemap` — sitemap gerado no build

## Comandos

| Comando | Ação |
| --- | --- |
| `npm install` | Instala as dependências |
| `npm run dev` | Servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Build de produção em `./dist/` |
| `npm run preview` | Pré-visualiza o build local |

## Estrutura

```text
src/
├── components/      # TabBar (navegação), ThemeToggle, Icon
├── data/            # Conteúdo: projetos, experiência, skills, links, site
├── layouts/         # BaseLayout — SEO, tema, header e footer
├── pages/           # /, /about, /projects, /project/[slug], /experience, /contact
└── styles/          # global.css — tokens de cor, tipografia e assinatura visual
public/
├── CNAME            # domínio customizado do GitHub Pages
├── images/projects/ # capas dos projetos
└── robots.txt
```

Todo o conteúdo é editável em `src/data/`. Adicionar um projeto é adicionar um
objeto em [`src/data/projects.ts`](src/data/projects.ts) — a rota
`/project/<slug>` é gerada automaticamente.

## Deploy

Um push na branch `main` dispara [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
que faz o build e publica no GitHub Pages. O domínio `andersonfranciscato.dev`
é declarado em [`public/CNAME`](public/CNAME) e em `site` no
[`astro.config.mjs`](astro.config.mjs). No repositório, é preciso definir
**Settings → Pages → Source: GitHub Actions**.

## Formulário de contato

Não há backend. Enquanto `formspreeFormId` em [`src/data/site.ts`](src/data/site.ts)
estiver vazio, o formulário abre o aplicativo de email do visitante com a
mensagem já preenchida. Para envio assíncrono com estado de sucesso/erro, basta
preencher o ID do [Formspree](https://formspree.io).
