export interface Project {
	slug: string;
	title: string;
	summary: string;
	description: string;
	problem?: string;
	outcome?: string;
	role: string;
	period: string;
	stack: string[];
	cover: string;
	link?: string;
	linkLabel?: string;
	repo?: string;
	/** Grupos curados usados pelos filtros da página /projects. */
	tags?: string[];
}

export const projects: Project[] = [
	{
		slug: 'job-radar',
		title: 'Job Radar — assistente pessoal de vagas',
		summary: 'Coleta vagas de 9 fontes, calcula a aderência ao seu perfil (0–100) e otimiza o currículo com IA.',
		description:
			'Aplicação completa em monorepo (pnpm workspaces) que coleta vagas de 9 fontes — RemoteOK, Remotive, LinkedIn, Google Jobs, Indeed, Adzuna, Jobicy e WeWorkRemotely — com agendamento automático. Cada vaga recebe uma nota de aderência de 0 a 100 comparada ao perfil, mostrando o que falta. O currículo é otimizado por IA para cada vaga sem inventar dados, com verificação por código e não apenas por prompt. As candidaturas ficam num quadro Kanban com notas, contatos e follow-ups, o custo de IA é auditado por operação e um resumo diário das melhores vagas vai para o Telegram. Backend em Node.js 22 + Fastify + Prisma sobre PostgreSQL 16, com Redis e BullMQ para as filas; frontend em React 18 + Vite + Tailwind + Radix. O provedor de IA é configurável pela interface (OpenAI, Anthropic, DeepSeek, Gemini ou Ollama).',
		problem:
			'Procurar vaga exigia abrir nove sites diferentes e não havia como saber, antes de se candidatar, quais valiam o esforço.',
		outcome:
			'324 testes automatizados, ambiente completo em Docker e execução 100% local — os dados não saem da máquina.',
		role: 'Projeto pessoal',
		period: '2026 – Atual',
		stack: ['TypeScript', 'Node.js', 'Fastify', 'Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'React', 'Vite', 'Tailwind CSS', 'Docker'],
		cover: '/images/projects/job-radar.svg',
		repo: 'https://github.com/T3lo5/job-radar',
		tags: ['web', 'ia'],
	},
	{
		slug: 'rss-news-hub',
		title: 'RSS News Hub — curadoria de notícias com IA',
		summary: 'Agrega feeds RSS, pontua cada notícia com IA e entrega o resumo no Telegram no horário definido.',
		description:
			'Sistema que coleta notícias de feeds RSS, pontua cada uma de 0 a 100 com base nos interesses configurados e gera automaticamente threads para Twitter/X, resumos e posts para LinkedIn ou newsletter, entregando tudo no Telegram no horário escolhido. O backend usa Node.js em ESM com servidor HTTP nativo, sem framework, sobre SQLite com Drizzle ORM e migrações automáticas. A camada de IA tem fallback automático entre provedores (SenseNova → DeepSeek → OpenAI). A autenticação combina JWT, API Keys e papéis (admin, user, viewer), e a arquitetura é extensível por plugins de provedores de IA, fetchers, outputs e transformers. A interface web em React + Vite é servida pelo próprio backend.',
		problem:
			'Acompanhar dezenas de feeds e separar o que importa consumia tempo diário e dependia de leitura manual.',
		outcome:
			'402 testes automatizados, lint com Biome e distribuição automática — o sistema roda sozinho depois de configurado.',
		role: 'Projeto pessoal',
		period: '2026 – Atual',
		stack: ['TypeScript', 'Node.js', 'SQLite', 'Drizzle ORM', 'React', 'Vite', 'Docker', 'Telegram API'],
		cover: '/images/projects/rss-news-hub.svg',
		repo: 'https://github.com/T3lo5/rss-news-hub',
		tags: ['web', 'ia'],
	},
	{
		slug: 'gym-program',
		title: 'Treinos — app Android e Wear OS offline-first',
		summary: 'App de musculação 100% offline, com treinos gerados por IA sob demanda e relógio sincronizado.',
		description:
			'Aplicativo Android e Wear OS para musculação, local-first: o plano de treino é gerado sob demanda no backend (por IA ou fallback local), salvo no SQLite do aparelho e executado registrando cada série, com histórico e sugestão de carga a partir do próprio desempenho. A sincronização com o backend é manual e explícita, com restauração por deviceId, validação antes de escrever e backup em JSON. O app descobre o backend na rede local via mDNS, com IP manual como alternativa. Feito em Kotlin com Jetpack Compose, Room, OkHttp e kotlinx.serialization, com módulo separado para o relógio e um contrato Kotlin/JVM entre celular e Wear OS. O backend é FastAPI (Python) com Docker Compose, pensado para rodar em Codespaces ou Oracle Free Tier.',
		problem:
			'Apps de treino dependem de nuvem e conexão, e os dados do usuário acabam em servidores de terceiros.',
		outcome:
			'O treino executa sem internet; o banco local e as preferências ficam fora do backup automático do Android, e o backend pode rodar de graça.',
		role: 'Projeto pessoal',
		period: '2026 – Atual',
		stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Wear OS', 'FastAPI', 'Python', 'Docker'],
		cover: '/images/projects/gym-program.svg',
		repo: 'https://github.com/T3lo5/gym-program',
		tags: ['android', 'ia'],
	},
	{
		slug: 'free-my-tablet',
		title: 'Free My Tablet — launcher leve para Android',
		summary: 'Home screen sem anúncios para tablets antigos: 1,9 MB de APK e 0% de CPU em repouso.',
		description:
			'Launcher Android que substitui a home de fábrica por uma tela que desenha rápido e mostra só o que foi escolhido: relógio, clima e os apps selecionados. Os apps pré-instalados que ninguém usa podem ser desativados em um toque — nunca desinstalados, e um botão restaura tudo. Integra-se a um vault do Obsidian (as notas escritas na home viram arquivos Markdown, um por dia) e faz git pull do vault em um toque, via Termux. O app se atualiza sozinho buscando novas releases. Desenhado à mão em um único Canvas, sem bibliotecas, resultando em 1,9 MB de APK, 7 MB de memória e 0,0% de CPU em repouso — contra 46 MB do launcher de fábrica, que nunca para de desenhar. Sem root e sem nada desinstalado.',
		problem:
			'Um tablet de 2019 ficava lento em boa parte por causa da home de fábrica, que empurra apps e nunca para de animar.',
		outcome:
			'Consumo de memória caiu de 46 MB para 7 MB e o repouso ficou em 0,0% de CPU, com a home de fábrica sempre a um toque de distância.',
		role: 'Projeto pessoal',
		period: '2026 – Atual',
		stack: ['Java', 'Android', 'Canvas', 'ADB'],
		cover: '/images/projects/free-my-tablet.svg',
		link: 'https://github.com/T3lo5/free-my-tablet/releases',
		linkLabel: 'Baixar o APK',
		repo: 'https://github.com/T3lo5/free-my-tablet',
		tags: ['android'],
	},
	{
		slug: 'monkey-skills',
		title: 'Monkey User Suite — auditoria de front-end por agentes',
		summary: 'Skills que fazem um agente testar o front-end como um usuário sem treinamento e impaciente.',
		description:
			'Pacote de duas skills complementares para o Claude Code. A monkey-user faz auditoria estática e exploração real no navegador simulando um usuário sem treinamento, impaciente e propenso a cliques repetidos, entradas ruins e interrupções — e apenas reporta, nunca corrige o produto. A monkey-report transforma o findings.json em um dashboard HTML local, interativo e detalhado, com filtros, evidências e uma fila de correções priorizada, além de exportar Markdown e CSV. As duas se comunicam por um contrato de dados em JSON Schema, com uma amostra fictícia versionada para testar o renderizador.',
		problem:
			'Testes automatizados verificam o caminho feliz e não pegam o que um usuário real e impaciente faz com a interface.',
		outcome:
			'Fluxo reutilizável em qualquer projeto, com contrato de dados explícito entre a auditoria e o relatório.',
		role: 'Projeto pessoal',
		period: '2026 – Atual',
		stack: ['Python', 'Claude Code Skills', 'JSON Schema'],
		cover: '/images/projects/monkey-skills.svg',
		repo: 'https://github.com/T3lo5/monkey-skills',
		tags: ['agentes'],
	},
];
