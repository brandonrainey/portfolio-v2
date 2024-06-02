import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface HeaderProps {
  AboutMeRef: React.RefObject<HTMLDivElement>
  ProjectsRef: React.RefObject<HTMLDivElement>
  ContactRef: React.RefObject<HTMLDivElement>
}

export default function Header({
  AboutMeRef,
  ProjectsRef,
  ContactRef,
}: HeaderProps) {
  function handleAboutMeClick() {
    AboutMeRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleProjectsClick() {
    ProjectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleContactClick() {
    ContactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const japaneseText = '開発者'
  const englishText = 'Developer'

  const [text, setText] = useState(japaneseText)

  function handleHeaderTextEnter() {
    setText(englishText)
  }

  function handleHeaderTextLeave() {
    setText(japaneseText)
  }

  const getAnimationDuration = (textLength: number) => {
    return textLength * 0.05
  }

  return (
    <header className="w-full flex justify-between mb-10 items-center">
      <motion.div
        className="inline-block"
        layout
        transition={{ duration: getAnimationDuration(text.length) }}
      >
        <h1
          className="text-white font-extrabold sm:text-4xl text-3xl border-2 border-white/50 w-fit p-2 rounded-lg self-center text-center flex "
          onMouseEnter={() => handleHeaderTextEnter()}
          onMouseLeave={() => handleHeaderTextLeave()}
        >
          {text.split('').map((char, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i * 0.05,
              }}
              key={`${char}-${i}`}
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      <nav className="flex flex-wrap sm:flex-row items-center border border-slate-500/50 rounded-xl px-2 bg-[#151229a5] w-[200px] sm:w-[300px] h-auto min-h-[50px] justify-around shadow-lg">
        <p
          className="cursor-pointer sm:hover:border-b sm:text-lg text-base text-white "
          onClick={() => handleProjectsClick()}
        >
          Projects
        </p>

        <p
          className="cursor-pointer sm:hover:border-b sm:text-lg text-base text-white "
          onClick={() => handleAboutMeClick()}
        >
          About
        </p>

        <p
          className="cursor-pointer sm:hover:border-b sm:text-lg text-base text-white"
          onClick={() => handleContactClick()}
        >
          Contact
        </p>
      </nav>
    </header>
  )
}
