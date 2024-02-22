interface ProjectCardProps {
  project: {
    title: string
    image: string
    github: string
    live: string
    page: string
    description: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="max-w-[500px]  bg-[#2a2833] flex flex-col shadow-slate-600 shadow-md border-none rounded-md border-[#4a79ae]">
      <img
        src={project.image}
        className="rounded-t"
        alt={project.title}
      />
      <div className="bg-[#2a2833] text-white p-4 border-t-2 border-[#4a79ae]">
        <h2 className="font-bold text-4xl pb-4">{project.title}</h2>
        <p className="text-white">{project.description}</p>
      </div>
      <div className="bg-[#2a2833] flex justify-around mt-auto pb-2">
        <a href={project.live}>
          <button className="text-white hover:bg-[#313c89] text-lg border-2 hover:border-2 px-4 border-[#4a79ae] rounded transition-all ease-in-out duration-150">
            Live
          </button>
        </a>
        <a href={project.github}>
          <button className="text-white hover:bg-[#313c89] text-lg border-2 hover:border-2 px-4 border-[#4a79ae] rounded transition-all ease-in-out duration-150">
            Github
          </button>
        </a>
      </div>
    </article>
  )
}
