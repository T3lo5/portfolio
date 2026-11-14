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
		company: 'HidroBR - Soluções Integradas',
		location: 'Marília, São Paulo, Brasil',
		role: 'Desenvolvedor Frontend Sênior',
		period: 'Mar/2024 – Atual',
		bullets: [
			'Desenvolvimento da plataforma de cadastro e monitoramento de barragens para o IGAM, utilizando TypeScript, ReactJS, Shadcn UI e Docker.',
			'Sistema de monitoramento hídrico integrado a PostgreSQL para análise de níveis de água e prevenção de crises.',
			'Landing page institucional otimizada para SEO e performance.',
			'Formulários dinâmicos com Zustand e autenticação JWT com permissões de usuário.',
		],
		stack: ['React', 'TypeScript', 'PostgreSQL', 'Docker', 'JWT'],
	},
	{
		company: 'Sete.Digital',
		location: 'Marília, São Paulo, Brasil',
		role: 'Desenvolvedor Frontend',
		period: 'Nov/2023 – Fev/2024',
		bullets: [
			'Plataforma de eventos e rede social corporativa com ReactJS e TypeScript.',
			'Busca por eventos via Google Maps API e integração com AWS para armazenamento de mídia.',
			'Painel gerencial com gráficos dinâmicos; backend Node.js + MongoDB para processamento de vendas.',
		],
		stack: ['React', 'TypeScript', 'Chakra UI', 'Google Maps API', 'AWS', 'MongoDB', 'Node.js'],
	},
	{
		company: 'THOT I.A. Corp',
		location: 'Brasil',
		role: 'Desenvolvedor Fullstack',
		period: 'Jun/2023 – Nov/2023',
		bullets: [
			'Liderança de squad no desenvolvimento de rede social profissional para médicos, organizando tarefas e revisando entregas.',
			'Recursos de visualização e aprimoramento de imagens com IA; backend Node.js + MySQL com otimização de consultas.',
			'Sistema de recuperação de senha com Nodemailer e gestão de usuários e permissões.',
		],
		stack: ['React', 'Node.js', 'MySQL', 'Bootstrap', 'AI'],
	},
];
