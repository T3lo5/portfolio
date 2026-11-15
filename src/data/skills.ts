export interface SkillGroup {
	category: string;
	items: string[];
}

export const skills: SkillGroup[] = [
	{
		category: 'Frontend',
		items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'MUI', 'Chakra UI', 'Shadcn UI', 'Bootstrap'],
	},
	{
		category: 'Backend',
		items: ['Node.js', 'Fastify', 'Prisma', 'Drizzle ORM', 'PHP'],
	},
	{
		category: 'Banco de dados',
		items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis'],
	},
	{
		category: 'IA aplicada',
		items: ['APIs de LLM (OpenAI, Anthropic, DeepSeek, Gemini, Ollama)', 'Curadoria e geração de conteúdo', 'Agentes e skills'],
	},
	{
		category: 'Mobile',
		items: ['Kotlin', 'Jetpack Compose', 'Android', 'Wear OS'],
	},
	{
		category: 'Infra & DevOps',
		items: ['Docker', 'AWS', 'GitHub Actions', 'Git'],
	},
	{
		category: 'Testes',
		items: ['Vitest', 'Pytest', 'Testes automatizados'],
	},
	{
		category: 'Métodos',
		items: ['Design de software', 'Design de front-end', 'Análise de falhas', 'Lean Seis Sigma'],
	},
];

export const inlineSkills = (items: string[]) => items.join(' · ');
