'use client'

import { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import dynamic from 'next/dynamic'

const Skills = dynamic(() => import('@/components/Skills'), { ssr: true })

const AboutMe = dynamic(() => import('@/components/AboutMe'), { ssr: true })

const Contact = dynamic(() => import('@/components/Contact'), { ssr: true })

const Projects = [
  {
    title: 'Japan Events',
    image: '/projects/japan-events-image.webp',
    github: 'https://github.com/brandonrainey/Events-App',
    live: 'https://events-app-kappa-five.vercel.app/',
    description: (
      <p className="text-white ">
        Fully featured event hosting platform allowing users to host and buy
        events. Integrates Stripe for payment processing, uses Clerk for
        authentication, and stores event and order data in MongoDB, utilizing a
        webhook to capture Stripe events.
      </p>
    ),
    skills: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'MongoDB', 'Clerk'],
  },

  {
    title: 'Open Source Contribution',
    image: '/projects/yomitan-logo-wide.png',
    github: 'https://github.com/themoeway/yomitan',
    live: null,
    description: (
      <p className="text-white ">
        Contributed to the open source project{' '}
        <span className="font-bold text-lg text-[#9bc1e7]">Yomitan</span>, a
        Japanese popup dictionary extention for Chrome and Firefox. Improved
        code clarity/readability, improved typing, and enhanced user
        accessibility feature. Developed a test with Vitest to ensure
        maintainability for current and future versions.
      </p>
    ),
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },

  {
    title: 'Stripe Shop',
    image: '/projects/stripe-shop-image-small.webp',
    github: 'https://github.com/brandonrainey/stripe-shop',
    live: 'https://stripe-shop.netlify.app/',
    description: (
      <p className="text-white ">
        Developed a responsive e-commerce site with Stripe integration for
        seamless transactions and secure user authentication via Google OAuth.
        Uses Redux for global state management, and stores user and product data
        in Firebase Firestore with.
      </p>
    ),
    skills: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Stripe',
      'Firebase',
      'Redux',
    ],
  },

  {
    title: 'Game Feedback',
    image: '/projects/game-feedback-image-small.webp',
    github: 'https://github.com/brandonrainey/game-feedback',
    live: 'https://game-feedback.netlify.app',
    description: (
      <p className="text-white ">
        Created an interactive application with CRUD functionality for posts,
        comments, and replies, using MongoDB for efficient data handling.
      </p>
    ),
    skills: ['Next.js', 'TypeScript', 'SASS', 'MongoDB'],
  },
  {
    title: 'Smiley Tour',
    image: '/projects/smileytour-image-small.webp',
    github: 'https://github.com/brandonrainey/smiley-tours',
    live: 'https://smileytour.guide',
    description: (
      <p className="text-white ">
        Crafted a vibrant website showcasing the tour guide services in Asakusa,
        Tokyo, led by a former Japanese idol. Leveraged SEO best practices to
        improve search engine discoverability.
      </p>
    ),
    skills: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Anime Database',
    image: '/projects/anime-db-image-small.webp',
    github: 'https://github.com/brandonrainey/anime-database',
    live: 'https://my-anime-database.netlify.app/',
    description: (
      <p className="text-white ">
        Developed a dynamic application that fetches data from an API to display
        in a user-friendly grid of cards, with infinite scrolling and search
        functionality.
      </p>
    ),
    skills: ['Next.js', 'TypeScript', 'Tailwind'],
  },
]

const skills = [
  { name: 'HTML', icon: '/icons/htmlicon.png' },
  { name: 'CSS', icon: '/icons/cssicon.png' },
  { name: 'JavaScript', icon: '/icons/javascriptIcon.png' },
  { name: 'TypeScript', icon: '/icons/typescriptIcon.png' },
  { name: 'React', icon: '/icons/reactIcon.png' },
  { name: 'Next.js', icon: '/icons/nextjsIconWhite.png' },
  { name: 'SASS', icon: '/icons/sassIcon.png' },
  { name: 'Redux', icon: '/icons/reduxIcon.png' },
  { name: 'Tailwind', icon: '/icons/tailwindIcon.png' },
  { name: 'Node.js', icon: '/icons/nodejsIcon.png' },
  { name: 'Git', icon: '/icons/gitIcon.png' },
  { name: 'Jest', icon: '/icons/jestIcon.png' },
  { name: 'Firebase', icon: '/icons/firebaseIcon.png' },
  { name: 'MongoDB', icon: '/icons/mongodbIcon.webp' },
  { name: 'Clerk', icon: '/icons/clerkIcon.webp' },
  { name: 'Stripe', icon: '/icons/stripeIcon.webp' },
]

export default function Home() {
  const AboutMeRef = useRef(null)

  const ProjectsRef = useRef(null)

  const ContactRef = useRef(null)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between sm:p-10 p-2  bg-[#1f1c2c] gap-20 overflow-hidden">
      <div className="backgroundPattern w-full h-[520px] sm:h-[580px] absolute sm:top-[150px] top-[100px]"></div>
      <Header
        AboutMeRef={AboutMeRef}
        ProjectsRef={ProjectsRef}
        ContactRef={ContactRef}
      />

      <Intro />
      <main className="sm:w-[75%] w-full flex flex-row items-center gap-2 -mb-8">
        <p className="w-10 h-10 bg-[#3a376c] rounded-sm font-bold text-2xl flex items-center justify-center text-white">
          企
        </p>
        <h2
          className="text-5xl text-[#9bc1e7] font-bold sm:text-left sm:w-[75%] w-full scroll-mt-3"
          ref={ProjectsRef}
        >
          Projects
        </h2>
      </main>

      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-items-center max-w-[1600px] w-full gap-10">
        {Projects.map((item: any, index: number) => (
          <ProjectCard
            project={item}
            key={index}
            offset={index}
            skills={skills}
          />
        ))}
      </div>

      <div className="sm:w-[75%] w-full flex flex-row items-center gap-2 -mb-8">
        <p className="w-10 h-10 bg-[#3a376c] rounded-sm font-bold text-2xl flex items-center justify-center text-white">
          能
        </p>
        <h2 className="text-5xl text-[#9bc1e7] font-bold text-left sm:w-[75%]  w-full">
          Skills
        </h2>
      </div>

      <Skills skills={skills} />
      <AboutMe AboutMeRef={AboutMeRef} />
      <Contact ContactRef={ContactRef} />
    </div>
  )
}
