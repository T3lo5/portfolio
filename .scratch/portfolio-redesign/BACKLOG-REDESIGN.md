# Portfolio UI/UX Backlog — Redesign (Direction B)

> Fonte de verdade: [`SPEC.md`](./SPEC.md) — derivado de [`design-research.md`](./design-research.md) (15 referências validadas).
> Direção aprovada: **B — Technical Playground** (editor de código com abas como hub de navegação + 1 assinatura).
> Tech: Astro + Tailwind CSS. Local para discussão de tickets: este diretório (`issues/` existente `01–06` refere-se ao plano anterior; este backlog o complementa/substitui para a fase B).

---

## Product Goals
1. Transmitir competência técnica + maturidade em ≤3s.
2. Comunicar "dev real" — zero sotaque SaaS/template/AI-generated.
3. Provar skill com 3 projetos reais (Hidrobr, Sete.Digital, THOT IA).
4. Gerar conversão para contato/contratação com fricção mínima.
5. Performance ≥95 mobile + WCAG AA.

## Epics
1. **Visual Foundation** (P0) — tokens, color, typography, spacing.
2. **Real Content & Data** (P0) — projects, experience, social, contact endpoint.
3. **Navigation & Signature** (P1) — TabBar editor, header, theme, scroll progress.
4. **Projects Experience** (P1) — listing + case-study detail.
5. **Professional Story** (P1) — About + Experience timeline.
6. **Contact & Conversion** (P0) — channels-first + working form + success.
7. **Interactive Polish** (P2) — View Transitions, micro-interação.
8. **Accessibility & Performance QA** (P1) — a11y audit, lighthouse gate.

## Prioritized Backlog

| ID | Title | Epic | Priority | Effort | Blocked by |
|----|-------|------|----------|--------|------------|
| T01 | Design tokens & color system | 1 | P0 | S | — |
| T03 | Real content data layer | 2 | P0 | M | — |
| T02 | Typography & spacing system | 1 | P0 | S | T01 |
| T04 | Header + TabBar signature + theme | 3 | P1 | M | T01, T02 |
| T05 | Scroll progress & focus states | 3 | P1 | S | T01 |
| T06 | Projects listing (no badges, `[thumb,content]`) | 4 | P1 | M | T01, T02, T03 |
| T07 | Project detail (case-study) | 4 | P1 | M | T06, T04, T03 |
| T08 | About page (bio + inline skills) | 5 | P1 | S | T02, T03, T04 |
| T09 | Experience timeline | 5 | P1 | S | T02, T03, T04 |
| T010 | Contact page + form states | 6 | P0 | M | T01, T03, T04 |
| T012 | Signature micro-interaction | 7 | P2 | S | T04 |
| T011 | View transitions between tabs/pages | 7 | P2 | S | T04, T07, T08, T09, T010 |
| T013 | Accessibility audit | 8 | P1 | S | T04, T05, T010 |
| T014 | Performance audit (≥95 mobile) | 8 | P1 | S | T06, T07, T08, T09, T010 |

## Sprint Plan
- **Sprint 1 — Foundation:** T01, T02, T03 → tokens + real content base. ✅
- **Sprint 2 — Navigation & Signature:** T04, T05, T013 → TabBar editor aba ativa, skip-link, scroll progress, focus ring, reduced-motion. ✅
- **Sprint 3 — Recruiter Main Path:** T06, T07 → listing `[thumb|content]` + case-study detail, radius `md` consistente. ✅
- **Sprint 4 — Professional Story:** T08, T09, T010 → About bio+inline skills, experience timeline, contato channels-first + form success. ✅
- **Sprint 5 — Polish & QA:** T011, T012, T014 → cursor micro-interação, ClientRouter View Transitions, perf heuristic. ✅

**Status:** Sprints 1–5 concluídas, builds verdes. **MVP Direction B ("Technical Playground") entregue** — TabBar editor como assinatura, 3 projetos reais com case-study, trajetória real, contato funcional, View Transitions + cursor.

## Próximos passos (não bloqueadores para uso)
1. **Deploy:** ticket de GitHub Pages `base: '/portfolio'` + `Astro.asset()` (deferido — veja Deferred / Deploy).
2. **Lighthouse ≥95:** run no deploy (ClientRouter = 16K JS, fonte `swap`, imagens lazy) — alavanca de corte se <95: lazy-load do router.
3. **P3 extras:** Writing page (aba), PDF do currículo, OG images por projeto.

## Definition of Done (project-wide)
Direction-B chrome applied (TabBar editor como assinatura ativa em todas as páginas); zero AI-slop markers (no gradient/glassmorphism/purple-neon/over-rounded card/3-col grid/badge spam/shadow-lg); real content on all surfaces (Hidrobr/Sete/THOT + trajetória + contato real); single interactive signature (TabBar active + `.sig` bullet em todas as páginas); WCAG AA base (skip-link, focus ring, reduced-motion). **Lighthouse ≥95 mobile** — pendente run no deploy (heurística: 16K JS, fonte `swap`, SVGs lazy).

## Deferred / Deploy
- **GitHub Pages base path** (`base: '/portfolio'` + `Astro.asset()` para favicon/images): concern de configuração que toca paths de assets em templates; deixado para ticket dedicado para que Sprint 1 mantivesse tokens corretos sem base aplicada‑metade. `site` origin = `https://t3lo.github.io` (origem de deploy do PLAN.md — confirmar no deploy).
