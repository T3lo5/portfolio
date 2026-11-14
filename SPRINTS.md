# Sprints — Anderson Portfolio Redesign

> Priorização por impacto × esforço. Cada sprint entrega um resultado verificável.

---

## Sprint 1: Foundation — Conteúdo e identidade visual básica

**Objetivo:** Estabelecer credibilidade e identidade visual básica. O site para de ser um template com placeholders e ganha uma paleta própria.

**Tickets:**
- [01] Conteúdo real em todas as páginas (P0)
- [02] Sistema de cores próprio e remoção de gradientes decorativos (P1)

**Prioridade:** Alta — conteúdo é o maior fator de credibilidade; cores definem a primeira impressão.

**Dependências:** Nenhuma. Ambos os tickets podem startar imediatamente e ser executados em paralelo.

**Resultado esperado:**
- Navegante vê projetos, experiência e formulário com dados reais.
- Paleta customizada sem slate padrão, sem gradientes falsos.
- Dark mode com identidade própria.

**Definição de pronto:**
- [x] Nenhum placeholder permanece no site publicado.
- [x] Paleta definida em tokens CSS, sem gradientes decorativos.
- [x] Dark mode distinto do light mode.
- [x] Cor de destaque usada apenas para: links, estado ativo, botão primário.

**Quick wins:** Ticket 01 (conteúdo) é o quick win de maior impacto do projeto. Ticket 02 (cores) é rápido e remove o maior "AI slop tell".

---

## Sprint 2: Typography and Brand Personality

**Objetivo:** Dar personalidade ao site através da tipografia e marca pessoal. O site deixa de parecer um template e ganha character.

**Tickets:**
- [03] Hierarquia tipográfica e marca pessoal (P1)

**Prioridade:** Alta — tipografia é o principal veículo de personalidade em layouts minimalistas.

**Dependências:** Bloqueado por Sprint 1 (ticket 02 — sistema de cores definido facilita a escolha tipográfica).

**Resultado esperado:**
- Headings com contraste de peso/escala, não apenas `font-bold tracking-tight`.
- Nome "Anderson" com tratamento visual único.
- Metadados com peso e cor distintos.
- Escala coerente em todas as páginas.

**Definição de pronto:**
- [x] Nenhum heading usa `font-bold tracking-tight` como única diferenciação.
- [x] Contraste de peso e/ou família entre títulos e corpo.
- [x] Tratamento visual único para "Anderson" no nav e/ou home.
- [x] Metadados com peso e cor distintos do corpo.
- [x] Escala coerente em todas as páginas.

---

## Sprint 3: Component Refactor — Projects and Navigation

**Objetivo:** Eliminar os padrões genéricos mais visíveis nas páginas de maior conteúdo e na navegação global.

**Tickets:**
- [04] Refatoração da listagem de projetos e eliminação de badge spam (P1)
- [05] Cabeçalho sólido e navegação mobile intencional (P2)

**Prioridade:** Alta — é a página com mais conteúdo repetitivo e o maior gerador de "AI slop" visual. Header é visível em todas as páginas.

**Dependências:** Bloqueado por Sprint 2 (ticket 03 — tipografia definida).

**Nota:** Tickets 04 e 05 podem ser executados em paralelo dentro da sprint (não compartilham arquivos).

**Resultado esperado:**
- Listagem de projetos sem grid 3-colunas padrão, sem badges de tech stack.
- Filtros com indicador minimalista.
- Header sem glassmorphism, com fundo sólido.
- Mobile nav sem horizontal scroll.

**Definição de pronto:**
- [x] Listagem não usa grid 3-colunas padrão.
- [x] Tech stack não aparece como badges na listagem.
- [x] Filtros usam indicador textual ou minimalista.
- [x] Cards têm tratamento visual único e consistente.
- [x] Hover state é intencional.
- [x] Header com fundo sólido, sem backdrop-blur.
- [x] Mobile nav não é horizontal scroll.
- [x] Hierarquia de links igual em desktop e mobile.

---

## Sprint 4: Signature and Polish

**Objetivo:** Adicionar elemento de memória visual e remover ruído restante. O site ganha coesão e deixa de ter "filler".

**Tickets:**
- [06] Elemento de assinatura visual e limpeza de espaçamento (P2)

**Prioridade:** Média — refinamento final que eleva a percepção de cuidado.

**Dependências:** Bloqueado por Sprint 3 (tickets 04 e 05 — sistema visual completo necessário).

**Resultado esperado:**
- Um elemento visual recorrente que aparece em múltiplas páginas.
- Nenhum container vazio ou espaçamento sem propósito.
- Sombras e decorações apenas quando servem a um propósito claro.

**Definição de pronto:**
- [x] Exatamente 1 elemento visual recorrente em pelo menos 3 páginas.
- [x] Nenhum container decorativo vazio no código.
- [x] Espaçamento entre seções consistente e intencional.
- [x] Sem sombras ou decorações sem propósito claro.

---

## Ordem de execução recomendada

| Ordem | Sprint | Motivo |
|---|---|---|
| 1 | Sprint 1 | Estabelece fundação: conteúdo + cores. Sem isso, o resto não tem base. |
| 2 | Sprint 2 | Adiciona personalidade através da tipografia. |
| 3 | Sprint 3 | Refatora os componentes mais visíveis e genéricos. |
| 4 | Sprint 4 | Polimento final e elemento de assinatura. |

**Risco por sprint:**
- Sprint 1: Baixo — conteúdo e cores são alterações diretas.
- Sprint 2: Baixo — tipografia é refinamento, não mudança estrutural.
- Sprint 3: Médio — mudança de layout na listagem de projetos pode afetar legibilidade.
- Sprint 4: Baixo — polimento final.

**Status:** Concluída (Sprint 1 — Foundation) — tokens, tipografia e dados reais commitados; build verde; dist livre de placeholders.

**Fora de escopo (não implementar):**
- Estéticas substitutas (brutalismo, neobrutalismo, Memphis, glassmorphism 2.0).
- Ilustrações, 3D ou decoração pesada para compensar falta de conteúdo.
- Mais bordas arredondadas, sombras ou gradientes como solução.
- Trocar slate por roxo/azul como nova cor padrão.

