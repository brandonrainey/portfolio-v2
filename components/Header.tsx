interface HeaderProps {
  AboutMeRef: React.RefObject<HTMLDivElement>
  ProjectsRef: React.RefObject<HTMLDivElement>
}

export default function Header({ AboutMeRef, ProjectsRef }: HeaderProps) {
  function handleAboutMeClick() {
    AboutMeRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleProjectsClick() {
    ProjectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  

  return (
    <header className="w-full flex justify-between mb-10">
      <h1 className="text-white font-extrabold text-4xl border-2 w-fit p-2 rounded shadow-white shadow self-center text-center">
        開発者
      </h1>
      <nav className="flex sm:flex-row items-center gap-2 ">
        <div className="flex sm:flex-row flex-col gap-4 items-center justify-center text-white px-4 border-r-2">
          <p
            className="cursor-pointer sm:hover:underline  px-1 rounded text-lg border-[#4a79ae]"
            onClick={() => handleProjectsClick()}
          >
            Projects
          </p>
          <a href="https://github.com/brandonrainey">
            <img
              src="/githubIconWhite.png"
              alt="github icon"
              className="w-[40px] hover:shadow-icons hover:shadow-white ease-in-out duration-75 rounded-full"
            />
          </a>
        </div>
        <div className="flex sm:flex-row flex-col items-center sm:gap-2 gap-4 ">
          <p
            className="cursor-pointer sm:hover:underline px-1 rounded text-lg text-white sm:-mb-[0px] -mb-[4px] border-[#4a79ae]"
            onClick={() => handleAboutMeClick()}
          >
            About
          </p>
          <a href="https://www.linkedin.com/in/brandon-rainey/">
            <img
              src="/linkedinIcon.png"
              alt="linkedin icon"
              className="w-[44px] hover:shadow-icons hover:shadow-white ease-in-out duration-75 rounded-full -mb-[2px]"
            />
          </a>
        </div>
      </nav>
    </header>
  )
}
