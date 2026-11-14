# Plano — Portfólio Pessoal (GitHub Pages)

## 1. Visão geral
Criar um portfólio moderno, performático e fácil de manter, focado em projetos, experiência e contato, com deploy automático no GitHub Pages.

## 2. Objetivos
- Apresentar projetos com destaque para frontend
- Mostrar stack, experiência e trajetória
- Ter uma página de contato funcional
- Ter bom SEO, acessibilidade e performance
- Ser fácil de atualizar (adicionar projetos sem mexer muito em código)

## 3. Estrutura do projeto
```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   └── projects.ts
│   ├── layouts/
│   ├── pages/
│   │   ├── Home.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── Project/[slug].astro
│   │   ├── Experience.astro
│   │   └── Contact.astro
│   └── styles/
│       └── global.css
├── package.json
└── astro.config.mjs
```

## 4. Stack sugerida
- **Astro** (SSG, ótimo para portfólio e GitHub Pages)
- **TypeScript**
- **Tailwind CSS**
- **View Transitions** (navegação suave)
- **Hospedagem:** GitHub Pages via Actions

## 5. Design e UX
- Tema escuro como padrão, com suporte a tema claro
- Tipografia limpa e hierarquia clara
- Animações sutis (entrada e scroll)
- Mobile-first e responsivo
- Paleta sóbria com uma cor de destaque

## 6. Funcionalidades
- Home com hero, destaques e últimos projetos
- Projetos com filtro por stack
- Página individual por projeto
- Seção de experiência profissional
- Blog/artigos (opcional, pode começar depois)
- Formulário de contato (Formspree ou similar)
- Download do currículo

## 7. SEO e performance
- Meta tags e Open Graph
- Sitemap e robots.txt
- Imagens otimizadas (astro:assets)
- Lazy loading e fontes otimizadas

## 8. Deploy
- GitHub Pages configurado via GitHub Actions
- Branch `gh-pages` ou pasta `.github/workflows/deploy.yml`

## 9. Roadmap
- [ ] Estrutura inicial do Astro
- [ ] Layouts e estilos globais
- [ ] Páginas: Home, About, Projects, Experience, Contact
- [ ] Dados dos projetos (JSON/TS)
- [ ] Tema claro/escuro
- [ ] Deploy no GitHub Pages
- [ ] Testes de performance e SEO
- [ ] Ajustes finos

## 10. Próximos passos
1. Validar se a stack acima faz sentido para você
2. Decidir se terá blog já na primeira versão
3. Reunir textos, imagens e dados dos projetos
4. Iniciar a estrutura base
