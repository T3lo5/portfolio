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
	repo?: string;
}

export const projects: Project[] = [
	{
		slug: 'hidrobr-monitoramento',
		title: 'Plataforma de Monitoramento Hídrico',
		summary: 'Sistema de cadastro e monitoramento de barragens para o IGAM.',
		description: 'Plataforma de cadastro e monitoramento de barragens do IGAM, construída com TypeScript, ReactJS e Shadcn UI. Integração com PostgreSQL para análise de níveis de água e prevenção de crises. Landing page institucional otimizada para SEO e performance. Formulários dinâmicos com Zustand e autenticação JWT com permissões por usuário.',
		problem: 'O IGAM precisava centralizar o cadastro e o monitoramento de barragens em uma única interface, substituindo planilhas e sistemas dispersos.',
		outcome: 'Melhoria na eficiência da análise hídrica e no processamento de documentos; sistema modular e escalável, pronto para expansão.',
		role: 'Desenvolvedor Frontend Sênior',
		period: 'Mar/2024 – Atual',
		stack: ['TypeScript', 'React', 'Shadcn UI', 'Tailwind CSS', 'Docker', 'PostgreSQL', 'JWT'],
		cover: '/images/projects/hidrobr.svg',
	},
	{
		slug: 'sete-digital-eventos',
		title: 'Plataforma de Eventos e Rede Social Corporativa',
		summary: 'Conexão de usuários a festas e locais próximos com painel gerencial para produtores.',
		description: 'Plataforma de eventos e rede social corporativa para conectar usuários a festas e locais próximos. Busca por eventos via Google Maps API, interfaces com Chakra UI + TypeScript + ReactJS, painel gerencial com gráficos dinâmicos para produtores, integração AWS para mídia, e backend Node.js + MongoDB para processamento de vendas e controle de usuários.',
		problem: 'Produtores precisavam divulgar eventos e acompanhar vendas em uma interface integrada a mapas e armazenamento de mídia.',
		outcome: 'Ampliação do alcance de produtores e otimização da experiência do usuário, com aumento da visibilidade e facilidade na compra de ingressos.',
		role: 'Desenvolvedor Frontend',
		period: 'Nov/2023 – Fev/2024',
		stack: ['TypeScript', 'React', 'Chakra UI', 'Google Maps API', 'AWS', 'MongoDB', 'Node.js'],
		cover: '/images/projects/sete-digital.svg',
	},
	{
		slug: 'thot-ia-rede-social',
		title: 'Rede Social Profissional com IA',
		summary: 'Rede social profissional para médicos com ferramentas de edição de imagem com IA.',
		description: 'Liderança de squad no desenvolvimento de rede social profissional para médicos. Conexão entre profissionais e venda de produtos especializados. Recursos de visualização e aprimoramento de imagens com Inteligência Artificial. Backend Node.js + MySQL com estruturação e otimização de consultas, interface ReactJS + Bootstrap, recuperação de senha via Nodemailer e tratamento de imagens para Base64.',
		problem: 'Médicos precisavam de uma rede profissional com ferramentas de edição de imagens aprimoradas por IA e commerce integrada.',
		outcome: 'Rede social profissional operacional com ferramentas de IA e commerce integrada; gestão centralizada de usuários e permissões.',
		role: 'Desenvolvedor Fullstack',
		period: 'Jun/2023 – Nov/2023',
		stack: ['TypeScript', 'React', 'Bootstrap', 'Node.js', 'MySQL', 'Nodemailer', 'AI Image Processing'],
		cover: '/images/projects/thot-ia.svg',
	},
];
