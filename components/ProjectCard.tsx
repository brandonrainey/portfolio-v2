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
}

export default function ProjectCard({ project, skills }: ProjectCardProps) {
  return (
    <article className="w-full h-full flex flex-col sm:p-6 p-4 rounded-xl projectBackgroundGradient shadow-lg">
      <div className="flex items-center justify-center">
        <img src={project.image} alt={project.title} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex flex-col my-2">
        <h2 className="text-white text-3xl font-semibold mb-2">
          {project.title}
        </h2>
        {project.description}
      </div>
      <div className="flex mt-auto">
        <div className="flex items-center">
          {project.skills.map((skill: string) =>
            skills.map(
              (s) =>
                s.name === skill && (
                  <div className={`sm:h-14 w-10 sm:w-14 h-10 p-1 flex items-center justify-center rounded-full border-2 border-white/50 bg-[#444059] -ml-2 shadow shadow-slate-700`}>
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
          <button className={`bg-[#24518c] hover:bg-[#22477777] text-white text-lg font-semibold shadow-slate-500 shadow rounded w-20 ${project.title === 'Open Source Contribution' && 'hidden'}`}>
            <a href={project.live}>Live</a>
            
          </button>
          <button className="bg-[#24518c] hover:bg-[#22477777] text-white text-lg font-semibold shadow-slate-500 shadow rounded w-20">
            <a href={project.github}>Github</a>
            
          </button>
        </div>
      </div>
    </article>
  )
}
