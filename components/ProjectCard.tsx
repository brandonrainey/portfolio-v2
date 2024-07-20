import { motion } from 'framer-motion'

interface ProjectCardProps {
  project: {
    title: string
    image: string
    github: string
    live: string
    page: string
    description: string
    skills: string[]
  }
  skills: {
    name: string
    icon: string
  }[]
  offset: number
}

export default function ProjectCard({
  project,
  skills,
  offset,
}: ProjectCardProps) {

  return (
    <motion.article
      className="w-full h-full flex flex-col sm:p-6 p-4 rounded-xl projectBackgroundGradient relative pb-[30px] shadow-lg max-w-[700px]"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0, offset: '-100px' }}
      transition={{ duration: 0.5, delay: 0.1 * offset }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col my-2">
        <h2 className="text-white text-3xl font-semibold mb-2">
          {project.title}
        </h2>
        {project.description}
      </div>
      <div className="flex mt-auto">
        <div className="flex items-center">
          {project.skills.map((skill: string, index) =>
            skills.map(
              (s) =>
                s.name === skill && (
                  <div
                    className={`sm:h-14 w-10 sm:w-14 h-10 p-1 flex items-center justify-center rounded-full border-2 border-white/50 skillIcon -ml-2 shadow shadow-slate-700 z-[${
                      index + 10
                    }]`}
                    key={index}
                  >
                    <img
                      src={s.icon}
                      className={`  object-contain object-center w-full h-full rounded-full `}
                    />
                  </div>
                )
            )
          )}
        </div>
        <div className="flex flex-col ml-auto gap-2">
          <motion.button
            className={`border-2  text-white text-lg font-semibold shadow-slate-500 shadow rounded w-20 ${
              project.title === 'Open Source Contribution' && 'hidden'
            }`}
            initial={{
              backgroundPosition: '0% 0%',
              background:
                'linear-gradient(90deg, transparent 100%, #3498db 100%)',
            }}
            whileHover={{
              backgroundPosition: '100% 0%',
              background:
                'linear-gradient(90deg, transparent 0%, #3498db 100%)',
            }}
            transition={{ duration: 0.2, ease: 'easeIn' }}
            aria-label="live site link"
          >
            <a href={project.live}>Live</a>
          </motion.button>
          <motion.button
            className="border-2 hover:bg-[#224777b3] text-white text-lg font-semibold shadow-slate-500 shadow rounded w-20"
            initial={{
              backgroundPosition: '0% 0%',
              background:
                'linear-gradient(90deg, transparent 100%, #3498db 100%)',
            }}
            whileHover={{
              backgroundPosition: '100% 0%',
              background:
                'linear-gradient(90deg, transparent 0%, #3498db 100%)',
            }}
            transition={{ duration: 0.2, ease: 'easeIn' }}
            aria-label="github project link"
          >
            <a href={project.github}>Github</a>
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
