export interface SkillGroup {
	category: string;
	items: string[];
}

export const skills: SkillGroup[] = [
	{ category: 'Frontend', items: ['React', 'TypeScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Chakra UI', 'Bootstrap'] },
	{ category: 'Backend', items: ['Node.js', 'PHP'] },
	{ category: 'Banco de dados', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
	{ category: 'Infra & DevOps', items: ['Docker', 'AWS', 'Git', 'CI/CD'] },
	{ category: 'Testes', items: ['Jest', 'React Testing Library'] },
];

export const inlineSkills = (items: string[]) => items.join(' · ');
