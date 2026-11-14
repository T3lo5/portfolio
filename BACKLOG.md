# Backlog Priorizado — Anderson Portfolio

> Priorização por impacto × esforço. Problemas relacionados foram agrupados em épicos.

---

## Épico 1: Conteúdo e credibilidade

**Problema:** Todo o conteúdo do portfólio é placeholder (`Empresa`, `example.com`, `SEU_ID`). O visitante não consegue avaliar competência real.

**Impacto no usuário:** Perda imediata de confiança. Um portfólio sem conteúdo real não serve para recrutamento nem para prospecção de clientes.

**Impacto visual/UX:** Nulo — o problema é de conteúdo, não de interface. Porém o conteúdo é a interface principal de um portfólio.

**Esforço estimado:** Baixo (atualização de dados em `src/data/projects.ts`, `src/pages/experience.astro` e `src/pages/contact.astro`).

**Prioridade:** P0 — Bloqueia todo o resto.

**Dependências:** Nenhuma.

**Critério de aceite:**
- [ ] Nenhum texto `Empresa`, `example.com` ou `SEU_ID` permanece no código publicado.
- [ ] Pelo menos 3 projetos com descrição, stack e links reais.
- [ ] Experiência com empresas, cargos e períodos reais.
- [ ] Formulário de contato com endpoint funcional (Formspree, Netlify Forms, etc.).

---

## Épico 2: Sistema de cores, identidade visual e modos

**Problema:** A paleta é o slate padrão do Tailwind (`#0f172a` → `#e2e8f0`). Gradientes decorativos idênticos são usados em 4 páginas diferentes como preenchimento sem informação. Dark mode é apenas inversão do light mode.

**Impacto no usuário:** O site não tem marca. O visitante não associa nenhuma cor ou identidade ao trabalho do Anderson.

**Impacto visual/UX:** Alto. Cores são o primeiro sinal de design intencional. Gradientes falsos são o maior "AI slop tell" do site.

**Esforço estimado:** Médio (alteração de `src/styles/global.css` e remoção de gradientes em 4 páginas).

**Prioridade:** P1 — Define a identidade do produto.

**Dependências:** Épico 1 (conteúdo real) não bloqueia, mas faz sentido fazer junto.

**Critério de aceite:**
- [ ] Paleta composta por: fundo claro (off-white quente), foreground (preto/near-black), superfície (tom derivado), 1 cor de destaque.
- [ ] Nenhum `bg-gradient-to-*` usado como decoração permanece no código.
- [ ] Dark mode com identidade própria (não é inversão do light).
- [ ] Cor de destaque usada em exatamente: links principais, estado ativo, botão primário.
- [ ] Sem roxo/azul padrão como cor de destaque.

---

## Épico 3: Hierarquia tipográfica e marca

**Problema:** Fonte system stack sem identidade. Títulos repetem `font-bold tracking-tight` em todas as páginas. Sem peso contrastante, sem marca tipográfica no nome.

**Impacto no usuário:** O site não tem personalidade. Parece um template.

**Impacto visual/UX:** Alto. Tipografia é o principal veículo de personalidade em layouts minimalistas.

**Esforço estimado:** Médio (definição de fontes, atualização de headings em 5 páginas + layout base).

**Prioridade:** P1 — Complementa o sistema de cores.

**Dependências:** Épico 2 (sistema de cores definido) facilita a escolha tipográfica.

**Critério de aceite:**
- [ ] Nenhum heading usa `font-bold tracking-tight` como única diferenciação.
- [ ] Existe contraste de peso e/ou família entre títulos e corpo.
- [ ] Nome "Anderson" tem tratamento visual único no nav e/ou na home.
- [ ] Metadados (datas, cargos, descrições curtas) têm peso e cor distintos do corpo.
- [ ] Escala tipográfica coerente em todas as páginas.

---

## Épico 4: Listagem de projetos e eliminação de ruído visual

**Problema:** Grid 3-colunas genérico de cards. Badges de tech stack idênticos em 3 locais diferentes (filtro, card, detalhe). Hover genérico `shadow-lg`. Cards repetem `rounded-xl border border-border bg-surface`.

**Impacto no usuário:** Dificulta o scan. O usuário não distingue rapidamente o que é importante. A página parece um template de dashboard.

**Impacto visual/UX:** Alto. É a página com mais conteúdo repetitivo e o maior gerador de "AI slop" visual.

**Esforço estimado:** Médio (refatoração de `projects.astro` e `project/[slug].astro`, remoção de badges).

**Prioridade:** P1 — Maior concentração de padrões genéricos.

**Dependências:** Épico 1 (conteúdo real) e Épico 2 (sistema de cores) para implementar corretamente.

**Critério de aceite:**
- [ ] Listagem de projetos não usa grid 3-colunas padrão (preferir lista 1-col ou 2-col com destaque visual claro).
- [ ] Tech stack não aparece como badge na listagem (pode aparecer no detalhe como texto simples ou não aparecer).
- [ ] Filtros usam indicador de estado textual ou minimalista, não pills idênticas.
- [ ] Cards têm tratamento visual único e consistente (não `rounded-xl border border-border bg-surface` repetido).
- [ ] Hover state é intencional, não genérico.

---

## Épico 5: Cabeçalho e navegação

**Problema:** Header com glassmorphism (`backdrop-blur-md` + transparência) — padrão SaaS genérico. Navegação mobile usa horizontal scroll, o padrão mais fraco de navegação mobile disponível.

**Impacto no usuário:** Transmite baixo cuidado com mobile e sensação de "componente padrão".

**Impacto visual/UX:** Médio. O header é visível em todas as páginas, mas é menos dominante que a listagem de projetos.

**Esforço estimado:** Baixo (alterações em `BaseLayout.astro`).

**Prioridade:** P2 — Rápido de corrigir, melhora percepção de qualidade.

**Dependências:** Nenhuma. Pode ser feito em paralelo.

**Critério de aceite:**
- [ ] Header com fundo sólido (sem transparência/glassmorphism) e borda inferior.
- [ ] `backdrop-blur` removido.
- [ ] Mobile nav não usa horizontal scroll. Alternativas aceitáveis: menu empilhado minimalista, links em grid 2×N, ou seletor de seção com indicador.
- [ ] Navegação desktop e mobile mantêm a mesma hierarquia de links.

---

## Épico 6: Elemento de assinatura e polimento

**Problema:** Sem elemento visual recorrente que crie memória. Espaçamento excessivo sem propósito. Containers vazios para preencher espaço (placeholder na página About).

**Impacto no usuário:** O site não tem "assinatura". O usuário não lembra de um detalhe visual específico após fechar a aba.

**Impacto visual/UX:** Médio-baixo. Refinamento que eleva a percepção de cuidado.

**Esforço estimado:** Baixo (adição de 1 elemento recorrente + remoção de containers vazios).

**Prioridade:** P2 — Impacta a percepção final, mas não bloqueia funcionalidade.

**Dependências:** Épico 2 e Épico 3 (cores e tipografia definidas) para o elemento combinar com a identidade.

**Critério de aceite:**
- [ ] Existe exatamente 1 elemento visual recorrente (ex.: linha fina, numeração de seção, marca geométrica) usado em pelo menos 3 páginas.
- [ ] Nenhum container decorativo vazio permanece no código (ex.: placeholder da About).
- [ ] Espaçamento entre seções é consistente e intencional (sem padding "sobrando" sem propósito).
- [ ] Sem sombras ou decorações que não servem a um propósito visual claro.

---

## Ordem sugerida de execução

| Ordem | Épico | Motivo |
|---|---|---|
| 1 | Épico 1 | Conteúdo é o maior fator de credibilidade. |
| 2 | Épico 2 | Cores definem identidade. |
| 3 | Épico 3 | Tipografia complementa as cores. |
| 4 | Épico 4 | Maior concentração de padrões genéricos. |
| 5 | Épico 5 | Rápido, melhora percepção geral. |
| 6 | Épico 6 | Refinamento final. |

**Fora de escopo (não implementar):**
- Estéticas substitutas (brutalismo, neobrutalismo, Memphis, glassmorphism 2.0).
- Ilustrações, 3D ou decoração pesada para compensar falta de conteúdo.
- Mais bordas arredondadas, sombras ou gradientes como solução.
- Trocar slate por roxo/azul como nova cor padrão.
