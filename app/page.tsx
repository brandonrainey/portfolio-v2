'use client'

import Image from 'next/image'
import ProjectCard from '../components/ProjectCard'
import Header from '@/components/Header'
import AboutMe from '@/components/AboutMe'

const Projects = [
  {
    title: 'Stripe Shop',
    image: '/stripe-shop-image.webp',
    github: 'https://github.com/brandonrainey/stripe-shop',
    live: 'https://stripe-shop.netlify.app/',
    page: '/stripe-shop',
    description:
    
      'Developed a responsive e-commerce site with Stripe integration for seamless transactions and secure user authentication via Google OAuth. Utilized technologies such as Next.js, TypeScript, Redux Toolkit, and Tailwind CSS for modern interface design and efficient Firestore and Stripe events handling.'
  },

  {
    title: 'Game Feedback',
    image: '/game-feedback-image.png',
    github: 'https://github.com/brandonrainey/game-feedback',
    live: 'https://game-feedback.netlify.app',
    page: '/game-feedback',
    description: 'Created an interactive application with CRUD functionality for posts, comments, and replies, using MongoDB for efficient data handling. The app, styled with SCSS, leverages the Next.js framework for a modern, visually appealing interface.',
  },
  {
    title: 'Anime Database',
    image: '/anime-db-image.webp',
    github: 'https://github.com/brandonrainey/anime-database',
    live: 'https://anime-calendar.netlify.app',
    page: '/anime-database',
    description: 'Developed a dynamic application that fetches data from an API to display in a user-friendly grid of cards, with pagination and search functionality. It features a personalized watchlist calendar leveraging local storage. The app uses Next.js, TypeScript, and is styled with Tailwind CSS for a modern look.',
  },

  {
    title: 'Tile Memory Game',
    image: '/tile-game-image.webp',
    github: 'https://github.com/brandonrainey/tile-game',
    live: 'https://tile-memory-game.netlify.app',
    page: '/tile-memory-game',
    description: 'Developed an engaging memory game with various grid sizes, challenging users to memorize patterns within a time limit, enhanced by appealing animations and progress tracking. The game is built with Next.js and styled with Tailwind CSS for a modern, appealing interface.',
  },

  {
    title: 'Twitch Follow Tracker',
    image: '/twitch-follow-tracker-image.png',
    github: 'https://github.com/brandonrainey/twitch-vip-tracker',
    live: 'https://mytwitchfollows.netlify.app',
    page: '/twitch-follow-tracker',
    description: 'Developed a personalized application fetching data from Twitch API to display user followed streams and their latest VODs in a searchable grid. Built with Next.js, incorporated Redux Toolkit for state management, and styled with Tailwind CSS.',
  },

  {
    title: 'Developer Application',
    image: '/developer-application-image.png',
    github: 'https://github.com/brandonrainey/developer-application-v2',
    live: 'https://developer-job-application.netlify.app',
    page: '/developer-application',
    description: 'Created a streamlined, three-step application tailored for frontend developers, incorporating various input styles for efficient data collection. Developed using Next.js and styled with SCSS for a modern, intuitive user experience.',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-[#10121d] gap-20">
      <Header />
      <div className="flex flex-row flex-wrap justify-center w-full gap-10">
        {Projects.map((item: any, index: number) => (
          <ProjectCard project={item} key={index} />
        ))}
      </div>
      <AboutMe />
    </main>
  )
}
