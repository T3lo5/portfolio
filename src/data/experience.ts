export interface ExperienceEntry {
	company: string;
	location: string;
	role: string;
	period: string;
	bullets: string[];
	stack: string[];
}

export const experience: ExperienceEntry[] = [
	{
		company: 'HidroBR',
		location: 'Marília, São Paulo, Brasil',
		role: 'Auxiliar de tecnologia e inovação',
		period: 'Out/2025 – Atual',
		bullets: [
			'Desenvolvimento da plataforma de controle e gestão empresarial interna, com TypeScript, ReactJS, MUI e Docker.',
			'Sistema de monitoramento hídrico para análise de níveis de água e prevenção de crises, integrado a PostgreSQL.',
			'Landing page institucional otimizada para SEO e performance.',
			'Formulários dinâmicos com Zustand e autenticação com JWT, aplicando permissões de usuário.',
			'Colaboração com clientes na definição de novos módulos, melhorando a eficiência da análise hídrica e o processamento de documentos.',
		],
		stack: ['TypeScript', 'React', 'MUI', 'Docker', 'PostgreSQL'],
	},
	{
		company: 'HidroBR',
		location: 'Marília, São Paulo, Brasil',
		role: 'Estagiário de desenvolvimento web',
		period: 'Mar/2024 – Jan/2026',
		bullets: [
			'Desenvolvimento da plataforma de cadastro e monitoramento de barragens para o IGAM, com TypeScript, ReactJS, Shadcn UI e Docker.',
			'Implementação do sistema de monitoramento hídrico integrado a PostgreSQL.',
			'Landing page institucional otimizada para SEO e performance.',
			'Formulários dinâmicos com Zustand e autenticação com JWT.',
			'Colaboração com clientes na definição de novos módulos, resultando em um sistema modular e escalável.',
		],
		stack: ['TypeScript', 'React', 'Shadcn UI', 'Docker', 'PostgreSQL'],
	},
	{
		company: 'Sete.Digital',
		location: 'Marília, São Paulo, Brasil',
		role: 'Estagiário de desenvolvimento web',
		period: 'Nov/2023 – Fev/2024',
		bullets: [
			'Plataforma de eventos e ingressos para conectar usuários a festas e locais próximos.',
			'Busca por eventos via Google Maps API.',
			'Interfaces interativas com Chakra UI, TypeScript e ReactJS.',
			'Painel gerencial para produtores, com acompanhamento de vendas e ganhos através de gráficos dinâmicos.',
			'Integração com AWS para armazenamento e gerenciamento de imagens.',
			'Formulários dinâmicos para criação e edição de eventos.',
		],
		stack: ['TypeScript', 'React', 'Chakra UI', 'AWS', 'Node.js', 'MongoDB'],
	},
	{
		company: 'THOT IA CORP',
		location: 'Brasil',
		role: 'Desenvolvedor full stack',
		period: 'Jun/2023 – Nov/2023',
		bullets: [
			'Liderança de squad no desenvolvimento de uma rede social profissional para médicos.',
			'Funcionalidades para conexão entre profissionais e venda de produtos especializados.',
			'Recursos de visualização e aprimoramento de imagens com Inteligência Artificial.',
			'Estruturação de banco de dados e otimização de consultas em Node.js e MySQL.',
			'Interface intuitiva com ReactJS e Bootstrap.',
		],
		stack: ['Node.js', 'MySQL', 'React', 'Bootstrap', 'IA'],
	},
];
