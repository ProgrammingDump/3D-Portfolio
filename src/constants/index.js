import {
	javascript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	wordpress,
	buildx,
	annotto,
	neutranews,
	abt,
	planlegion,
	kirkversary,
	portfolio,
	carrd,
	stolen_guitars,
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
		title: 'Team Lead',
		company_name: 'Annotto',
		icon: annotto,
		iconBg: '#ffffff',
		date: 'Jan 2023 - Present',
		points: [
			'Streamlined task allocation and progress tracking, contributing to improved project turnaround times.',
			'Trained and mentored new team members, helping maintain productivity and quality standards.',
			'Led and coordinated a team to ensure projects were completed on time and met quality standards.',
		],
	},
	{
		title: 'Junior Software Engineer',
		company_name: 'Buildx',
		icon: buildx,
		iconBg: '#3435ce',
		date: 'June 2026 - Sept 2026',
		points: [
			'Troubleshot and resolved 20+ user‑reported issues, reducing downtime and improving user satisfaction.',
			'Conducted peer code reviews, ensuring adherence to best practices and improving overall code quality.',
			'Optimized page load times by ~30% through responsive design techniques and bundle size reductions.',
		],
	},
	{
		title: 'Junior Frontend Web Developer',
		company_name: 'Wenhub',
		icon: wenhub,
		iconBg: '#ffffff',
		date: 'July 2024 - Jan 2026',
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
			'Collaborating with skilled professionals including designers, product managers, and other developers to create high-quality products.',
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
		name: 'Kirkversary Calendar',
		description:
			'A web app that allows users to keep up with the Kirkversary Calendar and see their age according to it.',
		tags: [
			{
				name: 'reactjs',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: kirkversary,
		source_code_link: 'https://github.com/ProgrammingDump/Kirkversary',
	},
	{
		name: 'Guns.lol Carrd Clone',
		description:
			'A clone of the Guns.lol Carrd website, built using React.js and Tailwind CSS, showcasing my ability to replicate complex designs and functionality.',
		tags: [
			{
				name: 'nextjs',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: carrd,
		source_code_link: 'https://github.com/ProgrammingDump/carrd',
	},
	{
		name: '3D Portfolio',
		description:
			'A 3D portfolio website that showcases 3D models and animations, providing a visually stunning experience for users.',
		tags: [
			{
				name: 'threejs',
				color: 'blue-text-gradient',
			},
			{
				name: 'reactjs',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: portfolio,
		source_code_link: 'https://github.com/ProgrammingDump/3D-Portfolio',
	},

	{
		name: 'Stolen Guitars',
		description:
			'A web app that allows users to report and search for stolen guitars, helping musicians recover their instruments.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'tanstack-store',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: stolen_guitars,
		source_code_link: 'https://github.com/ProgrammingDump/StolenGuitars',
	},
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
		source_code_link: '#',
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
		source_code_link: '#',
	},
]

export { services, technologies, experiences, testimonials, projects }
