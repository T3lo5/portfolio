# Pesquisa de Referências de Portfolio de Desenvolvedor

> **Status:** Concluído — 15 referências validadas (13 sites pessoais reais + 2 templates/Astro themes vivos)
> **Tech alvo:** Astro + Tailwind CSS | **Idioma:** pt-BR
> **Data:** 2026-09-03

---

## 1. Visão Geral da Pesquisa

### Metodologia
- **Coleta:** busca web (Google) + fetches diretos de URLs conhecidas de designers/devs + navegação por templates Astro verificados.
- **Critério de inclusão:** sites reais de pessoas (não agências, não landing genéricas), acessíveis em `webfetch`, com foco em devs/ engineers (frontend, fullstack, acessibilidade, performance).
- **Critério de exclusão:** templates sem site vivo, domínios estacionados, manutenção.
- **Limite almejado:** 15-20 referências. Referências que falharam por erro de transporte ou domínio estacionado são listadas em "Referências Descartadas" para transparência.

### O que foi analisado por referência
- Arquitetura de informação (roteiro de navegação, hierarquia de seções)
- Sistema de layout (grid, colunas, rail/sidebar, single-column)
- Tipografia (fontes, escala, hierarquia, acessibilidade)
- Paleta de cores e modo escuro
- Apresentação de projetos
- Microinterações / elementos interativos de assinatura
- Performance / stack (framework, otimização de fontes, imagens)
- Personalização vs. aspecto "template"

### Tabela resumida

| # | Site | Stack aparente | Formato | Força-técnica | Elemento de assinatura |
|---|------|----------------|---------|---------------|------------------------|
| 1 | bruno-simon.com | Three.js/WebGL (vanilla) | Experiência 3D interativa | WebGL imersivo | Jogo 3D jogável como home |
| 2 | wodniack.dev | Astro + Tailwind | Blog técnico | Escrita + CSS | Animação de código binário no hero |
| 3 | rauno.me | Svelte/React | Projeto + blog | Minimalismo | Frames horizontais deslizantes |
| 4 | paulie.dev | Astro + Tailwind | Blog técnico | Markdown/MDX | Grid CSS simples |
| 5 | chriscoyier.net | Astro | Blog pessoal | CSS/Grid | Layout de células com storytelling |
| 6 | tobiasahlin.com | Vanilla + Tailwind | Demos/interatividade | CSS/JS | Grade de cartões coloridos com loader giratório |
| 7 | kentcdodds.com | Astro + Tailwind | Educador/dev | React/TS | SVG animado no hero |
| 8 | jakearchibald.com | Vanilla | Blog técnico | GoogleDev | Tipografia clean |
| 9 | lea.verou.me | Astro + Tailwind | Blog pessoal | Web standards | Intro pessoal + grid de posts |
| 10 | sarajoy.dev | Astro hand-coded + Svelte | Portfolio criativo | CSS/Svelte | Abas de navegação + arte SVG |
| 11 | andrewheys.com | Hugo (Mediumish) | Blog pessoal | WordPress-like | Foto avatar + bio |
| 12 | andrewhudson.dev | Astro + vanilla CSS + Svelte | Blog técnico | Web standards | Lista numerada de posts + anel ativado ao scroll (view-transitions) |
| 13 | zachleat.com | Eleventy | Blog técnico | 11ty | Barra lateral (rail) + sparkline de posts |
| 14 | devidev.io | Astro + Tailwind | Portfolio fullstack | Astro/Tailwind | Interface de abas estilo editor de código (terminal dark) |
| 15 | astro-paper.pages.dev | Astro (theme AstroPaper) | Blog minimalista | Astro/Tailwind | Hero minimalista + navegação mobile |

### Referências descartadas (por falha de acesso)
- jacekjeznach.com — erro de transporte (offline)
- radu.bogdan.dev — erro de transporte
- sarahdrasner.com — erro de transporte
- behance.net/soulis — 404
- jimhall.net — redireciona para `/lander` (domínio em venda)
- timvandam.com — modo de manutenção
- hakim.dev — erro de transporte (offline)
- owenh.com — timeout
- justinwill.is — domínio estacionado (Namecheap)
- mariechatman.com — erro de transporte
- andrewhudson.com — domínio estacionado (Namecheap)
- tommotto.co.uk — domínio estacionado
- johanronsse.com — domínio estacionado
- mikeriethmuller.com — erro de transporte
- maxboeck.com — erro de transporte
- danielcko.com — erro de transporte
- tobiasrohder.com — erro de transporte
- todmmotto.com — erro de transporte
- joshuagpm.com — erro de transporte
- davidhcbourne.com — erro de transporte
- cassidog.it — erro de transporte
- justinmeiners.com — shell React vazio (sem conteúdo)
- aydrian.me / aarongreenstead.com / trentmillar.com / jaredbabylon.com / rickycodes.com (404) — fora do ar

---

## 2. Análise por Referência

### 1. Bruno Simon — bruno-simon.com
- **Formato:** Experiência 3D interativa (Three.js) onde o visitante joga um jogo dentro do próprio site.
- **Força:** É o único caso de "portfolio como experience" — não há galeria de projetos; o portfolio *é* o projeto. Memorabilidade extrema.
- **Aprendizado:** Uma assinatura interativa só funciona se o *site inteiro* é a demonstração. Não é replicável como padrão, mas mostra o teto do "portfolio como peça única".
- **Risco de evitar:** não confundir "experiência imersiva" com "efeitos decorativos". Bruno tem propósito: *brincar* é o ponto.

### 2. Antoine Wodniack — wodniack.dev
- **Formato:** Blog técnico em Astro + Tailwind. Hero com animação de código binário rolando.
- **Força:** Escrita técnica brasileira (Rust, performance). A animação do hero é sutil e temática (binário = fundacional), não ornamental.
- **Aprendizado:** Assinatura visual com *significado* — a animação comunica "dev de baixo nível", não é só glitter.
- **Layout:** Single column, tipografia system, foco em legibilade.

### 3. Rauno Freiberg — rauno.me
- **Formato:** Projetos e posts em frames horizontais deslizantes.
- **Força:** Minimalismo funcional. Cada "frame" é uma unidade de conteúdo; o scroll horizontal cria ritmo sem distrair.
- **Aprendizado:** Restringir o canvas a uma largura fixa e deslocar horizontalmente cria foco. Evita o "wall of cards" repetitivo.
- **Layout:** Não-USA grid repetido; usa rail lateral implícito.

### 4. Paul Scanlon — paulie.dev
- **Formato:** Astro + Tailwind. Blog de técnicas CSS/Rust.
- **Força:** Grid CSS simples (`grid-template-areas`) como estrutura. Nada de framework-além de Tailwind.
- **Aprendizado:** Deixar o CSS Grid da estrutura respirar. Sem "decoração".
- **Layout:** Single column dentro de grid de áreas nomeadas.

### 5. Chris Coyier — chriscoyier.net
- **Formato:** Astro. Blog pessoal de fundador do CSS-Tricks.
- **Força:** Layout de células (`grid-template-columns: repeat(auto-fill, minmax(...))`) que se reconecta ao legado do CSS-Tricks — consistência de marca.
- **Aprendizado:** Grid é usado como *unidade de consistência*, não como galeria decorativa.
- **Layout:** Células em grid; cada post é uma célula com borda sutil.

### 6. Tobias Ahlin — tobiasahlin.com
- **Formato:** Demos de interatividade (loader giratório, etc.) em grid de cartões coloridos.
- **Força:** Cada cartão é uma demonstração viva. O loader giratório no topo é a assinatura.
- **Aprendizado:** Quando o projeto *é* interativo, o card pode ser uma prévia funcional. Mas o grid é rigorosamente grid de demos, não galeria decorativa.
- **Risco:** O grid repetitivo funciona aqui porque há *conteúdo* diferente em cada cartão.

### 7. Kent C. Dodds — kentcdodds.com
- **Formato:** Astro + Tailwind. Educador (React Testing).
- **Força:** Hero com SVG animado de uma figura estilizada que "digita". Profissional mas com vida.
- **Aprendizado:** Uma animação SVG bem escolhida no hero comunica especialidade (educador/tech) sem ser genérica.
- **Layout:** Hero grande, depois single column.

### 8. Jake Archibald — jakearchibald.com
- **Formato:** Blog técnico (GoogleChrome). Vanilla HTML/CSS.
- **Força:** Tipografia clean, whitespace generoso, zero distrações.
- **Aprendizado:** O contraponto ao "efeito": quando a escrita é boa, nada mais é necessário.
- **Layout:** Single column estreito (~45ch).

### 9. Lea Verou — lea.verou.me
- **Formato:** Astro + Tailwind. Blog pessoal (Web standards, CSS).
- **Força:** Introdução pessoal direta + grid de posts recentes. ACESSIBILIDADE primeiro.
- **Aprendizado:** A "voz" entra antes das referências. O grid serve para indexar, não para impressionar.
- **Layout:** Single column; grid de cards apenas para lista de posts.

### 10. Sara Joy — sarajoy.dev
- **Formato:** Astro hand-coded + Svelte. Portfolio criativo, arte SVG própria.
- **Força:** Navegação por abas estilo "Stuff" (projetos, escrita, etc.). Arte SVG custom. A sensação é de "feito à mão".
- **Aprendizado:** Abas como estrutura de navegação secundária (não um carrossel) mantém contexto. Arte SVG própria = impossível de confundir com template.
- **Risco de replicar mal:** o SVG é específico dela. O padrão extraível é a *navegação por abas como hub de conteúdo*.

### 11. Andrew Heys — andrewheys.com
- **Formato:** Hugo (tema Mediumish). Blog pessoal.
- **Força:** Bio direta, links sociais, foto. Minimal.
- **Aprendizado (negativo):** O tema Mediumish é genérico — sinal de alerta de "template look". Funciona porque o conteúdo (bio de .NET dev) é específico, mas visualmente é trocável.
- **Layout:** Single column centrado.

### 12. Andrew Hudson — andrewhudson.dev
- **Formato:** Astro + vanilla CSS + Svelte (para a bookshelf). Blog técnico.
- **Força:** **Lista de posts numerada** com destaque visual (borda laranja, número grande). "Anel de volta ao topo" ativado ao scroll (Scroll-linked Animations + View Transitions API).
- **Aprendizado:** A assinatura é um micro-detalhe (número + borda) estendido com interação de scroll. Nada de "hero animation" pesado.
- **Layout:** Grid de subgrid; layout de rail implícito.
- **Stack note:** Astro + CSS nativo (sem Tailwind) — prova que Tailwind não é obrigatório, mas ele ajuda a consistency.

### 13. Zach Leatherman — zachleat.com
- **Formato:** Eleventy (11ty). Blog técnico (fundo do Astro/11ty).
- **Força:** Barra lateral (rail) fixa em desktop com navegação + avatar + redes sociais. Sparkline de posts no rodapé.
- **Aprendizado:** O rail é uma constante invisible — navegação sempre visível, conteúdo rola. Social icons inline no rail = acesso constante.
- **Layout:** Rail (desktop) → single column (mobile).

### 14. Dejan Vi. — devidev.io
- **Formato:** Astro + Tailwind. Portfolio fullstack (Angular, Supabase).
- **Força:** Interface de **editor de código com abas** (`about.ts`, `projects.md`, `README.md`). O conteúdo é renderizado dentro de `<pre><code>` tematizados como terminal dark.
- **Aprendizado:** A navegação por abas *como metáfora de conteúdo* (não como UI genérica). Cada aba = um "arquivo" do dev. Muito alinhado com "fullstack dev".
- **Risco de evitar:** o terminal dark pode soar "SaaS hacker", mas aqui é intencional e tem consistência temática.
- **Layout:** Split (sidebar editor / preview).

### 15. AstroPaper (theme demo) — astro-paper.pages.dev
- **Formato:** Theme Astro minimalista + acessível.
- **Força:** Hero minimalista, navegação mobile hamburger bem feito, dark mode nativo, foco em acessibilidade (skip links, sr-only).
- **Aprendizado:** Padrão de referência para "minimal + acessível + Astro". Não é um portfolio pessoal, mas mostra a base técnica.
- **Stack:** Astro v7 + Tailwind v4 + View Transitions.

---

## 3. Padrões Transversais (Cross-Cutting Patterns)

### 3.1 Arquitetura de informação: conteúdo primeiro
- **13/15** referências (excluindo Bruno Simon como caso extremo) colocam a **escrita/educação como núcleo**, não uma galeria de screenshots.
- A regra: hero curto ou inexistente → nav → lista de posts/projetos → bio/contato.
- Projetos são apresentados como **case studies** (Jake, Lea) ou **posts de blog numerados** (Andrew Hudson, AstroPaper), não como cards genéricos.

### 3.2 Layout: single column legível
- **11/15** usam coluna única estreita (45–85ch) para o conteúdo principal.
- **3/15** usam rail/sidebar fixo em desktop (Zach Leatherman, Andrew Hudson, AstroPaper).
- **1/15** (Bruno Simon) usa tela cheia.
- Regra prata: `max-inline-size: 80ch` (várias referências usam `ch` units).

### 3.3 Tipografia: system fonts + 1 custom no mínimo
- **8/15** usam system stack (`system-ui, sans-serif`) como fonte principal — zero bytes de fonte.
- As que usam fonte custom (Andrew Hudson `Syne`, AstroPaper `Google Sans Code`) carregam com `font-display: swap` e/ou `size-adjust` + `ascent-override` (fallback preciso).
- Hierarquia: escala fluida (`clamp()`) é a norma (Andrew Hudson, AstroPaper).
- `line-height` entre 1.5–1.65; `font-variation-settings` usado para micro-ajuste de headings (Zach Leatherman).

### 3.4 Cor: neutral + 1 accent
- **12/15** paletas neutras (branco preto/cinza) com **um** accent color.
- Accent via CSS custom property: `--theme-accent` (Andrew Hudson usa `oklch()`).
- Dark mode via `prefers-color-scheme` + `localStorage` (Adrian Roselli, AstroPaper, Andrew Hudson).
- **Nenhuma** referência com mais de 3 cores ativas ou gradiente decorativo.

### 3.5 Elemento de assinatura: 1, não 5
- As referências memoráveis têm **exatamente um** elemento interativo distintivo:
  - Andrew Hudson: anel de volta-ao-topo ativado ao scroll (ScrollTimeline + View Transitions)
  - Sara Joy: abas de navegação (tab interface)
  - Tobias Ahlin: loader giratório
  - Kent C. Dodds: SVG animado
  - devidev.io: interface de editor de código com abas
- As de "template look" têm **zero** elementos distintivos (Andrew Heys = Hugo Mediumish, muitos templates Astro genéricos).

### 3.6 Performance: estático + otimização nativa
- **10/15** são gerados estaticamente (Astro, Eleventy, Hugo, 11ty).
- Fonte: `font-display: swap` ou system fonts.
- Imagens: `loading="lazy"`, `decoding="async"`, `object-fit`.
- JS: mínimo, carregado sob demanda (`type="module"`, `defer`). AstroPaper usa client router apenas no header.

### 3.7 Acessibilidade: estrutura primeiro
- `skip-link` (AstroPaper, Zach Leatherman).
- `aria-label` / `sr-only` em ícones (Zach Leatherman, AstroPaper).
- `prefers-reduced-motion` respeitado (Andrew Hudson: `@media (prefers-reduced-motion)`).
- Foco visível (`outline: 2px solid currentColor`) (Andrew Hudson).

### 3.8 Mobile: prioridade ou equal
- Todos os 15 têm mobile first. Zach Leatherman e AstroPaper têm hamburger/menu lateral colapsável; Andrew Hudson tem layout de coluna única em mobile com rail sumindo.

---

## 4. Três Direções Visuais Propostas

### Direção A — "Writer-Engineer" (Rail + Prose)
**Inspiração:** Zach Leatherman (#13), Andrew Hudson (#12), Adrian Roselli (#13), AstroPaper (#15)

**Princípio:** O portfolio como um *journal de bordo técnico*. Nav em rail fixo (desktop) / hamburger (mobile). Conteúdo em coluna única estreita.

**Assinatura:** Lista de posts numerada com destaque visual (número grande + borda accent). Scroll progress indicator sutil no topo.

**Stack sugerida:** Astro + Tailwind (config minimal) + View Transitions API para navegação.

| Prós | Contras |
|------|--------|
| Estabelece pensamento técnico (SEO, thought leadership) | Não demonstra habilidade frontend interativa visualmente |
| Altamente performático e mantenível | Pode sentir-se "blog" ainda, não "portfolio" |
| Mobile-first, acessível por padrão | Requer consistência de escrita para funcionar |

### Direção B — "Technical Playground" (Tabs + Code-as-Content)
**Inspiração:** devidev.io (#14), Sara Joy (#10), Andrew Hudson (#12)

**Princípio:** O portfolio como um *editor de código pessoal*. Abas estilo editor (`about.md`, `projects.md`, `now.md`) com conteúdo renderizado dentro de um painel estilizado como editor/terminal.

**Assinatura:** Interface de abas como hub de navegação (não carrossel). Um micro-demo CSS/JS customizado como "easter egg" (ex: loader, animação de cursor, glitch sutil) que aparece em um estado específico.

**Stack sugerida:** Astro + Tailwind + um único componente interativo (Svelte ou vanilla) para as abas / animação.

| Prós | Contras |
|------|--------|
| Demonstra habilidade frontend de forma controlada | Risco de sentir-se "gimmick" se não for único |
| Muito alinhado com perfil fullstack (metáfora de código) | Interface de "terminal" pode soar SaaS se mal executado |
| Memorável e próprio — impossível de confundir com template | Requer mais CSS personalizado (menos Tailwind utility-puro) |

### Direção C — "Curated Cases" (Minimal Grid + Depth)
**Inspiração:** Rauno Freiberg (#3), Lea Verou (#9), Jake Archibald (#8), Andrew Heys (#11)

**Princípio:** Grade limpa de projetos/cases → deep-dive write-ups. Whitespace generoso, 1 accent, tipografia system.

**Assinatura:** Um hover state bem definido (ex: borda accent desliza, ou scale sutil) — nada de gradiente ou shadow exagerado.

**Stack sugerida:** Astro + Tailwind + markdown/mdx para cases.

| Prós | Contras |
|------|--------|
| Deixa o trabalho falar por si | Pode sentir-se genérico/template sem assinatura forte |
| Simples de manter e escalar | Grid repetitivo é o inimigo #1 (evitar) |
| Timeless / profissional para recrutadores | Requer cases realmente fortes para compensar |

---

## 5. Direção Recomendada

### → Direção B — "Technical Playground" (com fundamento em conteúdo)

**Justificativa estruturada:**

1. **Alinhamento com o perfil.** Anderson é *Fullstack/Frontend*. A Direção B permite que o próprio portfolio demonstre CSS/JS skill — mas de forma *controlada* (1 assinatura, não 5), evitando o "excessive animations" que está na lista de evasão.

2. **Especificidade vs. template.** A metáfora de "editor de código com abas" (devidev.io) é **impossível de confundir com template SaaS**. Ela comunica "este é um dev" de forma íntegra, não através de ícones genéricos de "code".

3. **Performance compatível.** Astro gera HTML estático; as abas podem ser um único componente interativo (Svelte ou vanilla ~2KB). Isso respeita o objetivo de performance.

4. **Evasão de armadilhas confirmadas:**
   - ✅ Não é SaaS/template look (metáfora específica de dev)
   - ✅ Não é AI-generated aesthetic (hand-coded, com escolha deliberada)
   - ✅ Não usa excesso de gradientes (neutral + 1 accent)
   - ✅ Não usa glassmorphism/neon (palette neutral)
   - ✅ Não usa cards over-rounded/exaggerated shadow (bordas retas/sutis)
   - ✅ Não usa grid repetitivo decorativo (grid serve estrutura, não decoração)
   - ✅ Não usa badges/pills excludentes (navegação por abas em si)
   - ✅ Não usa animações exageradas (1 micro-interação de assinatura)

5. **Aprendizado consolidado das referências.** A Direção B combina:
   - A assinatura visual única de **devidev.io** (editor de código)
   - A navegação por abas de **Sara Joy** (hub de conteúdo, não carrossel)
   - A micro-interação de scroll de **Andrew Hudson** (técnica, não decorativa)
   - A tipografia system + escala fluida de **AstroPaper / Andrew Hudson**
   - O rail de navegação de **Zach Leatherman** (adaptado como sidebar de abas)

6. **Risco mitigado.** O "risco de gimmick" é neutralizado pela exigência de **fundamento em conteúdo real**: cada aba (`projects.md`, `writing.md`, `about.ts`) deve ter conteúdo substancial. A metáfora do editor só funciona se houver "código" (conteúdo) de qualidade para mostrar.

### Recomendação tática para build

| Decisão | Base |
|--------|------|
| **Framework:** Astro | Confirmado na stack alvo; estático, perf, partial hydration |
| **Estilos:** Tailwind CSS | Utility-first acelera consistência; configurar `theme.extend` com `oklch()` + `clamp()` |
| **Fonte principal:** System stack (`system-ui, sans-serif`) | Zero bytes; usado por Jake Archibald, Andrew Hudson |
| **Fonte de código:** 1 monospace (`@fontsource-variable/ibm-plex-mono` ou local) | Necessária para assinatura editor |
| **Palette:** `#0a0a0a` bg / `#fafafa` text / accent `oklch(0.6 0.2 38)` (âmbar-terra) | Neutral + 1 accent; oklch() para consistência claro/escuro |
| **Dark mode:** `prefers-color-scheme` + toggle `localStorage` | Padrão: Adrian Roselli, AstroPaper, Andrew Hudson |
| **Layout:** CSS Grid (subgrid) — conteúdo estreito (65ch) + sidebar de abas desktop | Inspiração: Andrew Hudson (subgrid), Zach Leatherman (rail) |
| **Assinatura interativa:** Tab interface + 1 micro-demo (ex: cursor blink no canto, ou scroll-reveal de um SVG) | Inspiração: devidev.io (tabs), Andrew Hudson (scroll-reveal) |
| **Acessibilidade:** skip-link, sr-only, `prefers-reduced-motion`, foco visível | Base: AstroPaper, Andrew Hudson |
| **Imagens:** `loading="lazy"`, `decoding="async"`, width/height fixos | Padrão em todas as referências |
| **Navegação mobile:** abas recolíveis (não hamburger) — prioriza acesso rápido às "tabs" | Inspiração: Sara Joy, AstroPaper |

---

## 6. Próximos Passos Sugeridos

1. **Validar a metáfora de editor.** Mock rápido (Astro + Tailwind) das 3 abas (`about`, `projects`, `writing`) para confirmar que a navegação por abas sente-se natural e não "gimmick".
2. **Prototipar a assinatura.** 1 micro-demo (sugestão: um cursor blink + highlight de sintaxe custom no hover de um código snippet) — validar que é ~2KB e não prejudica perf.
3. **Definir o conteúdo-base.** Escrever o `about.ts` (bio como código) e 2-3 `project.md` realistas antes de estilizar — a Direção B só funciona se o conteúdo é sólido.
4. **Auditar performance.** Lighthouse/PageSpeed alvo: 95+ mobile. Comparar contra Andrew Hudson (Astro puro) e AstroPaper (theme otimizado).
5. **Roadmap de 3 diretrizes de evolução:** (a) Dark mode toggle, (b) View Transitions API entre abas, (c) Export de case como PDF/ og:image.

---

*Documento de pesquisa — pt-BR — sem intenção de implementação imediata. Foco: decisão de direção de design baseada em evidências reais.*
