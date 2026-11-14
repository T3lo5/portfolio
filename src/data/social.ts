export interface SocialLink {
	label: string;
	href: string;
	icon: 'email' | 'phone' | 'github' | 'linkedin';
}

export const social: SocialLink[] = [
	{ label: 'Email', href: 'mailto:andersonwsf@gmail.com', icon: 'email' },
	{ label: 'Telefone', href: 'tel:+5514981322240', icon: 'phone' },
	{ label: 'GitHub', href: 'https://github.com/T3lo5', icon: 'github' },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/andersonwsf', icon: 'linkedin' },
];
