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
  java,
  graphixon,
  abt,
  qrm,
  threejs,
  github,
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
    title: 'Web Developer',
    icon: reactjs,
  },
  {
    title: 'WordPress Developer',
    icon: wordpress,
  },
  {
    title: 'Application Developer',
    icon: java,
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
    title: 'Web Developer',
    company_name: 'AUSES',
    icon: auses,
    iconBg: '#162832',
    date: 'Oct 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Management Trainee',
    company_name: 'Freelancer',
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
  {
    title: 'Freelancing',
    company_name: 'Fiverr',
    icon: fiverr,
    iconBg: '#ffffff',
    date: 'Feb 2022 - Feb 2023',
    points: [
      'Efficiently managed freelance projects on Fiverr, specializing in WordPress website management and development.',
      'Skillfully utilized React.js and related technologies to deliver high-quality web solutions.',
      'Collaborated with clients to ensure project success, incorporating responsive design principles and ensuring cross-browser compatibility. ',
      'Actively engaged in providing feedback and guidance to clients, fostering positive working relationships and achieving outstanding results.',
    ],
  },
  {
    title: 'Content Writer',
    company_name: 'GadgetGang (UK)',
    icon: gg,
    iconBg: '#ffffff',
    date: 'May 2022 - Febuary 2023',
    points: [
      'Client satisfaction and retention: Highlight positive feedback or testimonials from clients or employers, demonstrating your ability to meet their content needs and maintain strong working relationships.',
      'Content engagement metrics: Share specific metrics such as increased social media shares, comments, or user engagement with your articles or blog posts.',
      "Improved search engine rankings: Highlight instances where your content helped improve the website's visibility on search engine result pages (SERPs), leading to higher organic traffic and visibility.",
      'Client satisfaction and retention: Showcase positive client feedback and testimonials to demonstrate your ability to meet content needs and maintain strong relationships.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
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
        name: 'wordpress',
        color: 'green-text-gradient',
      },
    ],
    image: abt,
    source_code_link: 'https://abtnation.com',
  },
  {
    name: 'Graphixon',
    description:
      'A website showcasing Graphxion, a Middle-East based agency specializing in graphic design for Esports organizations. They deliver top-notch thumbnails to creators.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: graphixon,
    source_code_link: 'https://graphixon.com',
  },
  {
    name: 'Realtime Age Calculator',
    description:
      'A real-time age calculator built using React that displays your current age. It continuously updates your age every millisecond, ensuring the accuracy of your age.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: rac,
    source_code_link: 'https://realtime-age-calculator.netlify.app',
  },
]

export { services, technologies, experiences, testimonials, projects }
