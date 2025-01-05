import {
	javascript,
	html,
	css,
	gg,
	fiverr,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	wordpress,
	auses,
	rac,
	neutranews,
	java,
	planlegion,
	abt,
	qrm,
	threejs,
	github,
	wenhub,
	asharali,
	wasil,
	wahab,
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'feedbacks',
		title: 'Testimonials',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'MERN Developer',
		icon: reactjs,
	},
	{
		title: 'WordPress Developer',
		icon: wordpress,
	},
	{
		title: 'Software Engineer',
		icon: github,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
]

const experiences = [
	{
		title: 'Junior Frontend Web Developer',
		company_name: 'Wenhub',
		icon: wenhub,
		iconBg: '#ffffff',
		date: 'July 2024 - Present',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Management Trainee',
		company_name: 'Quality Resource Marketing',
		icon: qrm,
		iconBg: '#ffffff',
		date: 'Jul 2023 - Sept 2023',
		points: [
			'Engaged in managing WordPress websites, proficiently leveraging React.js and associated technologies for ongoing development and maintenance tasks.',
			'Collaborating with skillfull individuals including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Actively participated in office operations, including code reviews, where I provided constructive feedback to fellow developers, contributing to a culture of continuous improvement.',
		],
	},
]

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Sherdil proved me wrong.',
		name: 'Abdul Wahab Malik',
		designation: 'CTO',
		company: 'Neutra News',
		image: wahab,
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Sherdil does.",
		name: 'Ashar Ali',
		designation: 'Associate',
		company: 'Productbox',
		image: asharali,
	},
	{
		testimonial:
			"After the onboarding of Sherdil, we have observed significant success in our projects' development.",
		name: 'Muhammad Wasil',
		designation: 'Associate',
		company: 'Ideofuzion',
		image: wasil,
	},
]

const projects = [
	{
		name: 'Neutra News',
		description:
			'A web based application that aggregates and analyzes news articles from various sources, providing users with a comprehensive view of current events.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'python',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: neutranews,
		source_code_link: 'https://neutranews.com',
	},
	{
		name: 'ABT Nation',
		description:
			'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
		tags: [
			{
				name: 'crm',
				color: 'blue-text-gradient',
			},
			{
				name: 'elementor',
				color: 'pink-text-gradient',
			},
			{
				name: 'wordpress',
				color: 'green-text-gradient',
			},
		],
		image: abt,
		source_code_link: 'https://abtnation.com',
	},
	{
		name: 'Plan Legion',
		description:
			'A website showcasing Plan Legion, from sourcing contractors and clients to crafting compelling ad campaign, they handle all things management.',
		tags: [
			{
				name: 'reactjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: planlegion,
		source_code_link: 'https://planlegion.com',
	},
]

export { services, technologies, experiences, testimonials, projects }
