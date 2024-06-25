import { useState } from 'react'
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

  const [isHovered, setIsHovered] = useState([false, false, false])

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

      <nav className={`flex flex-wrap sm:flex-row items-center border border-slate-500/50 rounded-xl ${text === 'Developer' ? 'px-1' : 'px-2'} bg-[#151229a5] w-[230px] sm:w-[300px] h-auto min-h-[50px] justify-around shadow-lg font-semibold`}>
        <motion.p
          className="cursor-pointer sm:text-lg text-base text-slate-300 hover:text-slate-50 relative"
          onClick={() => handleProjectsClick()}
          onHoverStart={() => setIsHovered([true, false, false])}
          onHoverEnd={() => setIsHovered([false, false, false])}
        >
          Projects
          <motion.span
            className="border-b absolute bottom-0 left-0 w-full"
            initial={{ width: 0 }}
            transition={{ duration: 0.2 }}
            animate={{ width: isHovered[0] ? '100%' : 0 }}
          ></motion.span>
        </motion.p>

        <motion.p
          className="cursor-pointer sm:text-lg text-base text-slate-300 hover:text-slate-50 relative"
          onClick={() => handleAboutMeClick()}
          onHoverStart={() => setIsHovered([false, true, false])}
          onHoverEnd={() => setIsHovered([false, false, false])}
        >
          About
          <motion.span
            className="border-b absolute bottom-0 left-0 w-full"
            initial={{ width: 0 }}
            transition={{ duration: 0.2 }}
            animate={{ width: isHovered[1] ? '100%' : 0 }}
          ></motion.span>
        </motion.p>

        <motion.p
          className="cursor-pointer sm:text-lg text-base text-slate-300 hover:text-slate-50 relative"
          onClick={() => handleContactClick()}
          onHoverStart={() => setIsHovered([false, false, true])}
          onHoverEnd={() => setIsHovered([false, false, false])}
        >
          Contact
          <motion.span
            className="border-b absolute bottom-0 left-0 w-full"
            initial={{ width: 0 }}
            transition={{ duration: 0.2 }}
            animate={{ width: isHovered[2] ? '100%' : 0 }}
          ></motion.span>
        </motion.p>
      </nav>
    </header>
  )
}
