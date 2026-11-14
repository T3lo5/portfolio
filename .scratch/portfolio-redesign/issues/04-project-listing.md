# 04: Refatoração da listagem de projetos e eliminação de badge spam

**What to build:** Uma listagem de projetos que não parece um template de dashboard, sem badges de tech stack repetitivos e com hover state intencional. A página de projetos deixa de ser o maior gerador de "AI slop" visual.

**Blocked by:** 01 (real content), 02 (color system), 03 (typography)

**Status:** ready-for-agent

- [x] Listagem não usa grid de 3 colunas padrão (divide-y list + `[thumb, content]`).
- [x] Tech stack não aparece como badges na listagem (inline `join(' · ')`).
- [x] Filtros usam indicador de estado textual ou minimalista (`aria-pressed` + accent text).
- [x] Cards têm tratamento visual único e consistente (borda accent no hover, radius md).
- [x] Hover state é intencional, não genérico (border-accent + título accent + chevron →).

**Status:** done (Sprint 3 — Projects)
