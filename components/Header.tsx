interface HeaderProps {
  AboutMeRef: React.RefObject<HTMLDivElement>
  ProjectsRef: React.RefObject<HTMLDivElement>
  ContactRef: React.RefObject<HTMLDivElement>
}

export default function Header({ AboutMeRef, ProjectsRef, ContactRef }: HeaderProps) {
  function handleAboutMeClick() {
    AboutMeRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleProjectsClick() {
    ProjectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleContactClick() {
    ContactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  

  return (
    <header className="w-full flex justify-between mb-10 items-center">
      <h1 className="text-white font-extrabold sm:text-4xl text-3xl border-2 border-white/50 w-fit p-2 rounded-lg self-center text-center">
        開発者
      </h1>

      <nav className="flex sm:flex-row items-center gap-2 border border-slate-500/50 rounded-xl px-2 bg-[#151229a5] h-[40px] shadow-lg">
        <p
          className="cursor-pointer sm:hover:underline px-1 rounded sm:text-lg text-base text-white "
          onClick={() => handleProjectsClick()}
        >
          Projects
        </p>

        <p
          className="cursor-pointer sm:hover:underline px-1 rounded sm:text-lg text-base text-white "
          onClick={() => handleAboutMeClick()}
        >
          About
        </p>

        <p className="cursor-pointer sm:hover:underline px-1 rounded sm:text-lg text-base text-white"
          onClick={() => handleContactClick()}
        >
          Contact
        </p>

      </nav>
    </header>
  )
}
