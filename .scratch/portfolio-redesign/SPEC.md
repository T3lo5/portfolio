# SPEC — Portfolio Redesign (Direction B: Technical Playground)

> Fonte de verdade: [`.scratch/portfolio-redesign/design-research.md`](design-research.md) (15 referências validadas).
> Direção aprovada: **B — "Technical Playground"** (editor de código com abas como hub de navegação + 1 micro-interação de assinatura).
> Tech alvo: Astro + Tailwind CSS v4 (já consolidado no projeto).
> Status: spec — NÃO implementar, NÃO criar tickets ainda. Este documento alimenta BACKLOG.md / `.sprints/` / `issues/`.

---

## 1. Design Principles

1. **Conteúdo primeiro, navegação segundo.** O portfólio existe para mostrar quem você é e o que você fez. Qualquer elemento visual que não sirva isso é ruído. (Base: research 3.1 — 13/15 referências centrais em escrita/educação, não em galeria de screenshots.)
2. **Uma assinatura, não cinco.** Exatamente um elemento interativo/visual distintivo, com propósito técnico. Nada de "efeitos para impressionar". (Base: research 3.5 — referências memoráveis têm 1 assinatura.)
3. **Especificidade > estética genérica.** Cada decisão visual responde "por que um dev faria isso?" — a metáfora do editor de código comunica "este é um dev" íntegro, não através de ícones de "code" genéricos. (Base: research 3.5 / Direção B.)
4. **Neutral + 1 accent, sempre.** Paleta neutra (branco-preto) + uma cor de destaque. Zero gradientes decorativos, zero purple/blue neon. (Base: research 3.4 — 12/15 neutras.)
5. **Performance como design.** Carregamento rápido, fontes locais/zero-bytes e JS mínimo são requisitos de UI, não de backend. (Base: research 3.6.)
6. **Mobile é primeiro, não redução.** Mobile define a hierarquia; desktop a refina. (Base: research 3.8.)
7. **Acessibilidade estrutural.** Skip-link, foco visível e `prefers-reduced-motion` são defaults, não checklists. (Base: research 3.7.)
8. **Timeless, não tendência.** Nada que pareça de 2024 só porque é 2024. (Base: anti-AI-slop do research.)

---

## 2. Visual Language

### Tipografia
- **Display (headings):** `Instrument Serif` — já carregada via Google Fonts no layout. Família serifada dá personalidade sem ser "AI startup". Headings usam `font-display`.
- **Corpo (body):** system stack `system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, sans-serif` — zero bytes. Já definido em `--font-sans`.
- **Código (assinatura/monoespaçada):** **1 fonte mono variável local** — `@fontsource-variable/ibm-plex-mono` (ou `ui-monospace` fallback puro). Carregada com `font-display: swap`. Só é carregada se a assinatura editor for usada; caso contrário `ui-monospace, SFMono, Menlo, Consolas, monospace`.
- **Escala tipográfica (fluid, `clamp`):**
  - h1: `clamp(2.25rem, 5vw, 3.5rem)` (já definido)
  - h2: `clamp(1.5rem, 3vw, 2.25rem)` (já definido)
  - h3: `clamp(1.25rem, 2vw, 1.5rem)` (já definido)
  - corpo: `1rem` → `1.0625rem` (62.5% maior) em mobile
  - metadados: `0.8125rem` (`text-sm`)
- **Pesos:** headings `font-normal` (400) via `font-display`; corpo `font-normal` (400). Contraste de peso NÃO vem de negrito em tudo — headings contrastam por **família + escala + tracking**, não por `font-bold tracking-tight` em todos os lugares (anti-pattern flagrantemente chamado no BACKLOG Epic 3). Metadados usam `font-medium` (500) como único diferencial de peso.

### Espaçamento
- Escala 3-base: `0.5rem / 1rem / 1.5rem / 2.5rem / 4rem` (8-point grid).
- **Seções:** `4rem` vertical em desktop, `2.5rem` em mobile. Consistência absoluta — o mesmo `section > *:not(:last-child) { margin-block-end: var(--section-gap) }`.
- **Entre elementos:** `1.5rem` padrão; `0.5rem` micro (ex.: metadados de experience).

### Grid / Layout
- **Container principal:** `max-width: 1120px` (68ch leívelmente mais largo que o 65ch de Andrew Hudson — `max-inline-size: 80ch` é o teto). Centralizado, `px-4` mobile, `px-6` desktop.
- **Layout base:** single-column estreito para prose. **NÃO** grid 3-col de cards (eliminado no Epic 4). Em desktop, projects usa layout **áside + conteúdo** (rail implícito): miniatura à esquerda, texto à direita — já presente no `[slug].astro` e `projects.astro` com `md:grid-cols-[200px_1fr]`.
- **Sidebar/rail:** em desktop, a navegação por abas (assinatura) vive num rail fixo à esquerda; conteúdo rola à direita. Em mobile, rail vira abas recolíveis no topo.

### Largura máxima de conteúdo
- Prose: `max-width: 65ch` (Jake Archibald / Andrew Hudson). Projetos/cases: `1120px`.

### Cores
Tokens já definidos em `global.css` — **manter e documentar**:
- Light: `bg #fafaf9`, `fg #171717`, `muted #737373`, `border #e7e5e4`, `surface #ffffff`, `accent #15803d` (verde-800 — **não** purple/blue neon; dentro do "neutral + 1 accent").
- Dark: `bg #0c0a09`, `fg #fafaf9`, `muted #a8a29e`, `border #292524`, `surface #1c1917`, `accent #4ade80` (verde-400).
- **Regra de ouro:** accent aparece **apenas** em (a) links principais, (b) estado ativo da navegação/aba, (c) botão primário, (d) assinatura. Nada de accent colorido em badges, pills ou gradientes.
- **Contraste:** mínimo 4.5:1 texto-normal, 3:1 texto-grande; accent sobre surface/dark validado via `oklch()` perceptual (research 3.4).

### Bordas
- `border-border` (1px) em todos os containers. Border-radius: **`--radius-md 0.375rem`** (já definido) — cantos **levemente** arredondados, nunca `rounded-2xl`/`rounded-full`. Evita o "card over-rounded" do anti-pattern.

### Sombras
- **Zero sombras decorativas.** Só `ring-2 ring-accent` para foco visível. O `shadow-lg` genérico do hover de projects é **removido** (Epic 4).

### Tratamento de imagens
- `<picture>` com `srcset` + `loading="lazy"` + `decoding="async"` + `width/height` fixos. Formato: `avif` (fallback `webp`). Placeholder: cor dominante via `bgcolor` (research 3.6 — images optimized). Aspect-ratio fixo (`aspect-video`) para thumbs; hero mantém proporção.

### Ícones
- Inline SVG, `aria-hidden` quando decorativo, `1rem` quadro. Nenhuma dependência de icon-library (evita "template look"). Ícones só quando carregam informação (ex.: link externo, toggle de tema).

### Elementos decorativos
- **Proibidos:** gradientes, glassmorphism, pseudo-elementos "cintilantes". Decorativo permitido = linha fina `--border` e o quadrado de assinatura `.sig` (12px, `--radius-sm`), já existente.

### Densidade visual
- Ritmo vertical consistente (8-point grid). Whitespace é intencional — nunca "espaçamento sobrando". Single-column evita overcrowding. Single-column narrow prose (~65ch) mantém densidade de leitura baixa.

---

## 3. Component Strategy

**Regra:** criar um componente só se for reusado em 2+ lugares ou se for a assinatura. Matar o `.sig` genérico e substituir pela assinatura editor.

| Componente | Responsabilidade | Observação |
|---|---|---|
| `BaseLayout.astro` | HTML base, theme toggle, skip-link, SEO. | Remover `preconnect` Google Fonts duplicado; consolidar. |
| `Header.astro` | Nav desktop (rail de abas) + mobile drawer. | A assinatura editor vive aqui. |
| `TabBar.astro` | Abas estilo editor (`about.md`, `projects.md`, ...). | **Componente central** — usado no header desktop como rail e no mobile como drawer. |
| `ThemeToggle.astro` | Toggle dark mode. | Manter; melhorar `aria-label` ("Alternar tema claro/escuro"). |
| `Signature.astro` | Micro-interação de assinatura (ver 3.5). | Substitui `.sig`. Único elemento distintivo. |
| `ProjectCard.astro` | Listagem (thumb + texto). | Sem badges de stack; thumb à esquerda. |
| `ProjectHero.astro` | Capa + title + meta no detail. | |
| `SkillList.astro` | Skills como texto inline / timeline. | Não como pills. |
| `ExperienceItem.astro` | Cargo + company + period + bullet. | |
| `ContactForm.astro` | Form com validação de estado (success/error/idle). | |
| `Button` / `Link` / `Badge` | Primitivas. | Badge SÓ para estado de filtro ativo (textual), nunca decorativo. Button: primário (filled accent) / secundário (border). |

---

## 4. Page Structure

Estrutura de assinatura: **cada página rende seu conteúdo dentro de um "editor" com uma aba ativa no header.**

### Home (index) — Hero como editor
- **Objetivo:** hook inicial (10s).
- **Informação principal:** quem é, o que faz, link direto para projetos.
- **Ação esperada:** CTA primário → `/projects`; secundário → `/contact`.
- **Hierarquia:** h1 (nome + role) → assinatura editor (TabBar com aba "about.md" ativa) → corpo breve → CTAs.
- **Relação:** ponte de entrada para About/Projects/Contact.

### About — `about.md`
- **Objetivo:** humanizar + estabeleecer credibilidade.
- **Informação:** bio curta, stack snapshot (texto, não badges), link para experiência.
- **Ação:** CTA → Experiência / Projetos.
- **Hierarquia:** h1 → assinatura aba ativa → prose (`max-width: 65ch`).

### Projects — `projects.md`
- **Objetivo:** provar capacidade técnica.
- **Informação:** lista de projetos (thumb + título + resumo de 1 linha). **Sem badges de stack na listagem.**
- **Ação:** click → detail; CTA → contato.
- **Hierarquia:** h1 → assinatura aba ativa → filtro textual (não pills) → lista.

### Project Detail — `/project/[slug]`
- **Objetivo:** case study profundo.
- **Informação:** problema → solução → stack (texto inline `joined by ·`) → screenshots → outcome.
- **Ação:** Ver site / Repo + CTA contato.
- **Hierarquia:** h1 → assinatura aba ativa → cover → meta → stack → descrição → galeria → CTAs.

### Experience — `experience.md`
- **Objetivo:** estabeleecer senioridade/maturidade.
- **Informação:** jobs em ordem cronológica inversa, bullet points de impacto.
- **Ação:** — (informativo).
- **Hierarquia:** h1 → assinatura aba ativa → timeline vertical.

### Contact — `contact.md`
- **Objetivo:** conversão.
- **Informação:** canais (email, LinkedIn, GitHub) + formulário.
- **Ação:** submit form / click email.
- **Hierarquia:** h1 → assinatura aba ativa → links diretos → form.

---

## 5. UX (fluxos de recrutador)

1. **Primeira chegada (10s):** hero Headline curta ("Anderson — Full Stack Developer") + 1 CTA "Ver projetos". Assinatura editor (TabBar) já visível no header — comunica "dev" instantaneamente sem ícone de code genérico. Objetivo: responder "quem é, o que faz, onde ver trabalho" antes do scroll.
2. **Explorando projetos:** lista limpa, thumb fixa, título+resumo. Hover muda apenas `opacity` do thumb (scale suave), **nunca** shadow/gradient. Click → detail. Back → volta à lista (View Transition).
3. **Descobrindo skills:** inline no About (`TypeScript · React · Astro · Tailwind`) como texto, não pills. Experience bullets descrevem *impacto*, não apenas stack.
4. **Conhecendo experiência:** timeline vertical; período + cargo + empresa em negrito leve; bullets curtos. Scroll progress bar no topo (assinatura da Direção A adotada como micro-feedback).
5. **Entrando em contato:** Contact expõe email + LinkedIn + GitHub **antes** do formulário. Form: validação nativa + estado success (mensagem "Obrigado, fico no aguardo"). Foco: `return` ao enviar.

**Fricção mínima:** todas as navegações entre abas mantêm o header fixo — o recrutador nunca perde o contexto de "onde ele está".

---

## 6. Responsive

- **Mobile (≤640px):** TabBar vira drawer hamburger com abas empilhadas verticalmente (NÃO horizontal scroll — anti-pattern do Epic 5). Single column. Thumb de projeto ocupa topo (aspect-video). CTAs empilhados. Fonte base `1rem`.
- **Tablet (641–1024px):** TabBar como abas horizontais fixas abaixo do header (overflow-x auto, NÃO horizontal scroll de nav). Projects: lista single-column (thumb acima).
- **Desktop (≥1025px):** TabBar como rail fixo à esquerda (largura 220px), conteúdo em coluna estreita centrada. Projects: `md:grid-cols-[200px_1fr]` (thumb fixo).

**Nota:** mobile não é "redução" — é onde a hierarquia é validada. Se mobile precisar de scroll horizontal, o layout falhou.

---

## 7. Accessibility

- `lang="pt-BR"` (já definido).
- `skip-link` para `[main]`.
- Foco visível: `outline: 2px solid var(--color-accent); outline-offset: 2px` em todos os focáveis.
- `aria-label` em toggle de tema ("Alternar tema claro/escuro").
- `prefers-reduced-motion: reduce` → desativa hover scale e scroll-reveal.
- Labels explícitos em todos os form fields; `aria-describedby` em erros.
- Contraste ≥4.5:1 (texto) / ≥3:1 (grande) — validar accent sobre ambos os temas.
- Áreas interativas ≥44×44px (toques).
- `role="tablist"` / `role="tab"` (ativa/selected via `aria-selected` + `aria-controls`) na assinatura TabBar — acessível por teclado (← →).

---

## 8. Performance

- Astro SSG + `client:load` apenas para TabBar/ThemeToggle.
- Fonte mono carregada via `@fontsource-variable/ibm-plex-mono` com `font-display: swap` + `unicode-range` se necessário.
- Imagens: `avif` + `loading="lazy"` + `decoding="async"` + `width/height`.
- JS da assinatura: ~3KB (vanilla ou Svelte compilado). Nenhum framework no client além do necessário.
- Lighthouse alvo: **95+ mobile / 100 desktop**.

---

## 9. Anti-AI-Slop Rules (verbotônicas)

1. **Nenhum** `bg-gradient-to-*` como decoração.
2. **Nenhum** `backdrop-blur` (glassmorphism).
3. **Nenhum** purple `#8B5cf6` / azul neon `#06b6d4` como accent.
4. **Nenhum** `rounded-2xl`/`rounded-full` em cards.
5. **Nenhuma** sombra além de `ring-2 ring-accent` para foco.
6. **Nenhum** card repetido (`rounded-xl border border-border bg-surface` em 4 contextos).
7. **Nenhum** badge/pill decorativo; badges só como indicador de filtro **ativo** (texto + accent).
8. **Nenhuma** animação sem propósito funcional. Hover = `opacity`/`scale` sutil; assinatura = 1 micro-interação.
9. **Nenhum** template SaaS look — a metáfora editor é específica de dev, não genérica.
10. **Nenhum** `grid 3-col` de cards. Lista 1-col ou `[thumb, content]`.

---

## 10. Definition of Done (visual)

- [x] Header fixo com TabBar-rail desktop / drawer mobile; NENHUM `backdrop-blur`. *(Sprint 2)*
- [x] Paleta em tokens CSS; ZERO `bg-gradient-to-*`; dark ≠ inversão de light. *(Sprint 1)*
- [x] Headings via `font-display` (Instrument Serif) + escala fluida `clamp()`; corpo system stack. *(Sprint 1)*
- [x] Single column estreito (≤65ch prose); projects usam `[thumb_fr]` não 3-col grid. *(Sprint 1)*
- [x] ZERO badges decorativos; NENHUM `shadow-lg`; radius `0.375rem` consistente (exceto dot de status TabBar). *(Sprint 3)*
- [x] 1 assinatura visual (`.sig` + TabBar editor aba ativa) em ≥3 páginas. *(Sprint 2)*
- [x] `prefers-reduced-motion` respeitado; foco visível `2px solid accent`. *(Sprint 2)*
- [ ] Lighthouse ≥95 mobile. *(Sprint 5 — perf audit)*

---

## Problem Statement
O portfólio atual usa tokens defaults do Tailwind (slate, gradientes, glassmorphism, grid de cards, badges repetidos) e placeholders de conteúdo. Parece um shadcn starter, não o trabalho de um dev real. Não comunica senioridade, personalidade ou credibilidade a recrutadores.

## Solution
Redirecionar o portfólio para a Direção B ("Technical Playground"): um hub de navegação por abas estilo editor de código, único elemento assinatura, paleta neutral + 1 accent (verde), tipografia display (serif) + system, single-column legível, performance SSG. O site comunica "dev fullstack com personalidade" sem cair em padrões genéricos.

## User Stories
1. As a recruiter landing on the homepage, I want to see a clear headline + role + one primary CTA within 3 seconds, so that I know what this person does without scrolling.
2. As a recruiter, I want the navigation to look like a code editor's tab bar, so that I immediately recognize this is a developer's portfolio, not a SaaS template.
3. As a recruiter, I want to see real projects with thumbnails in a vertical list, so that I can quickly scan and click to learn more.
4. As a recruiter, I want a project detail page with problem/solution/stack/outcome, so that I can judge technical depth in <1 minute.
5. As a hiring manager, I want a dedicated experience page with real companies and impact bullets, so that I can assess seniority.
6. As a hiring manager, I want skills listed as inline text (not pills), so that they read as substance, not decoration.
7. As a visitor, I want a visible scroll-progress bar, so that I can orient myself on long pages.
8. As a mobile user, I want a drawer menu with stacked links (not horizontal scroll), so that navigation is reliable on small screens.
9. As a mobile user, I want the same link hierarchy on mobile and desktop, so that I never lose an option.
10. As an accessibility user, I want a skip-link and visible focus ring, so that I can navigate by keyboard.
11. As a motion-sensitive user, I want reduced motion respected, so that animations don't cause discomfort.
12. As a recruiter, I want contact info (email, LinkedIn, GitHub) shown before the form, so that I can reach out immediately.
13. As a visitor submitting the contact form, I want a success state, so that I know my message was sent.
14. As a dev reviewer, I want the codebase to load minimal JS, so that performance stays high.
15. As a returning visitor, I want dark mode persisted, so that my preference is remembered.

## Out of Scope
- 3D/imersão pesada (fora do escopo de Direction B).
- CMS headless (conteúdo em Markdown/TS estático, suficiente).
- Blog separado nesta fase (Writing pode ser aba adicional futura).
- Animações de scroll complexas (apenas Progress bar + micro-hover).
- Ilustrações/3D decorativo.

---

## Testing Decisions
- **Good test = behavior external, not implementation.** Validar: nav abre/fecha no mobile e mantém hierarquia; dark mode toggle persiste; filtro de projetos mostra/esconde itens corretamente; form valida estados (idle/validating/success/error); assinatura (`.sig`) aparece em ≥3 páginas; paleta não contém gradientes; focus ring visível.
- **Seam choice:** testar via **page-level renders** (Astro `/project/[slug]` + `/` + `/projects` + `/contact`) e **component interaction snapshots** apenas para `TabBar`, `ThemeToggle`, `ContactForm`. Nenhum teste de CSS token por token.
- **Prior prior art:** nenhum framework de teste no projeto — propor **`vitest` + `@astrojs/testing`** (já compatível com Astro 7). Testes focados em output HTML estático + interações DOM leves (ThemeToggle, TabBar, filtro).
- **Seam único proposto:** `src/lib/` exportando `getProjects()`, `getExperience()`, `getSocial()` — todos os testes de conteúdo passam por estes. UI testada via renders de página.

---

## Implementation Priorities

**P0 — Foundation (bloqueia tudo)**
1. Real content: projects.ts com 3 projetos reais + `/experience` com cargos reais + `/contact` endpoint funcional (Formspree).
2. Color system: tokens neurais + verde accent; remover gradientes; dark ≠ inversão.
3. Typography: Instrument Serif headings + escala fluida; eliminar `font-bold tracking-tight` em tudo.

**P1 — High impact**
4. Header: TabBar-rail desktop / drawer mobile, zero `backdrop-blur`.
5. Projects listing: `[thumb, content]`, eliminar badges + `shadow-lg` hover.
6. Signature element (`.sig`): unificar na aba editor ativa, ≥3 páginas.
7. Detail: `ProjectHero` + inline stack + CTAs.

**P2 — Polish**
8. Scroll progress bar (top).
9. View Transitions entre abas.
10. Success state no formulário.

**P3 — Future**
11. Writing page (aba adicional).
12. PDF resume download.
13. OG image generation para projects.
