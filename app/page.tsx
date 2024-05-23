'use client'

import { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import dynamic from 'next/dynamic'

const Skills = dynamic(() => import('@/components/Skills'), { ssr: true })

const AboutMe = dynamic(() => import('@/components/AboutMe'), { ssr: true })

const Projects = [
  {
    title: 'Japan Events',
    image: '/japan-events-image.webp',
    github: 'https://github.com/brandonrainey/Events-App',
    live: 'https://events-app-kappa-five.vercel.app/',
    description: (
      <p className="text-white ">
        Fully featured event hosting platform allowing users to host and buy
        events. Integrates Stripe for payment processing, uses Clerk for
        authentication, and stores event and order data in MongoDB, utilizing a
        webhook to capture Stripe events. Created using Next.js, Typescript and
        styled with Tailwind CSS and Shadcn UI.
      </p>
    ),
  },
  {
    title: 'Stripe Shop',
    image: '/stripe-shop-image-small.webp',
    github: 'https://github.com/brandonrainey/stripe-shop',
    live: 'https://stripe-shop.netlify.app/',
    description: (
      <p className="text-white ">
        Developed a responsive e-commerce site with Stripe integration for
        seamless transactions and secure user authentication via Google OAuth.
        Utilized technologies such as Next.js, TypeScript, Redux Toolkit, and
        Tailwind CSS for modern interface design and efficient Firestore and
        Stripe events handling.
      </p>
    ),
  },

  {
    title: 'Open Source Contribution',
    image: '/yomitan-logo-wide.png',
    github: 'https://github.com/themoeway/yomitan',
    live: null,
    description: (
      <p className="text-white ">
        Contributed to the open source project{' '}
        <span className="font-bold text-lg text-[#9bc1e7]">Yomitan</span>, a
        Japanese popup dictionary extention for Chrome and Firefox. Improved
        code clarity/readability and expanded behavior of a function used for
        user accessibility. Developed a test with Vitest to ensure the function
        works as expected for current and future versions.
      </p>
    ),
  },

  {
    title: 'Game Feedback',
    image: '/game-feedback-image-small.webp',
    github: 'https://github.com/brandonrainey/game-feedback',
    live: 'https://game-feedback.netlify.app',
    description: (
      <p className="text-white ">
        Created an interactive application with CRUD functionality for posts,
        comments, and replies, using MongoDB for efficient data handling. The
        app, styled with SCSS, leverages the Next.js framework for a modern,
        visually appealing interface.
      </p>
    ),
  },
  {
    title: 'Smiley Tour',
    image: '/smileytour-image-small.webp',
    github: 'https://github.com/brandonrainey/smiley-tours',
    live: 'https://smileytour.guide',
    description: (
      <p className="text-white ">
        Crafted a vibrant website showcasing the tour guide services in Asakusa,
        Tokyo, led by a former Japanese idol. Leveraged SEO best practices to
        improve search engine discoverability, and used Next.js and Tailwind CSS
        for a modern, appealing interface.
      </p>
    ),
  },
  {
    title: 'Anime Database',
    image: '/anime-db-image-small.webp',
    github: 'https://github.com/brandonrainey/anime-database',
    live: 'https://my-anime-database.netlify.app/',
    description: (
      <p className="text-white ">
        Developed a dynamic application that fetches data from an API to display
        in a user-friendly grid of cards, with infinite scrolling and search
        functionality. The app uses Next.js with Sever Actions, TypeScript, and
        is styled with Tailwind CSS for a modern look.
      </p>
    ),
  },
]

export default function Home() {
  const AboutMeRef = useRef(null)

  const ProjectsRef = useRef(null)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between sm:p-10 p-4 bg-[#1f1c2c] gap-20">
      <Header AboutMeRef={AboutMeRef} ProjectsRef={ProjectsRef} />

      <Intro />
      <main className="sm:w-[75%] w-full flex flex-row items-center gap-2 -mb-8">
        <p className="w-10 h-10 bg-slate-600 rounded-sm font-bold text-2xl flex items-center justify-center text-white">
          企
        </p>
        <h2
          className="text-5xl text-[#9bc1e7] font-bold sm:text-left sm:w-[75%] w-full scroll-mt-3"
          ref={ProjectsRef}
        >
          Projects
        </h2>
      </main>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center max-w-[1600px] w-full gap-10">
        {Projects.map((item: any, index: number) => (
          <ProjectCard project={item} key={index} />
        ))}
      </div>

      <div className="sm:w-[75%] w-full flex flex-row items-center gap-2 -mb-8">
        <p className="w-10 h-10 bg-slate-600 rounded-sm font-bold text-2xl flex items-center justify-center text-white">
          能
        </p>
        <h2 className="text-5xl text-[#9bc1e7] font-bold text-left sm:w-[75%]  w-full">
          Skills
        </h2>
      </div>

      <Skills />
      <AboutMe AboutMeRef={AboutMeRef} />
    </div>
  )
}
