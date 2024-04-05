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
        <div className="flex sm:flex-row flex-col-reverse gap-4 items-center  text-white sm:px-4 px-2 border-r-2 mt-[2px]">
          <p
            className="cursor-pointer sm:hover:underline  px-1 rounded text-lg border-[#4a79ae]"
            onClick={() => handleProjectsClick()}
          >
            Projects
          </p>
          <a href="https://github.com/brandonrainey">
            <button aria-label="github link">
              <img
                src="/githubIconWhite.png"
                alt="github icon"
                className="w-[40px] hover:shadow-icons hover:shadow-white ease-in-out duration-75 rounded-full"
              />
            </button>
          </a>
        </div>
        <div className="flex sm:flex-row flex-col-reverse  items-center sm:gap-2 gap-4 ">
          <p
            className="cursor-pointer sm:hover:underline px-1 rounded text-lg text-white sm:-mb-[0px] -mb-[4px] border-[#4a79ae]"
            onClick={() => handleAboutMeClick()}
          >
            About
          </p>
          <a href="https://www.linkedin.com/in/brandon-rainey/">
            <button aria-label="linkedin link">
              <img
                src="/linkedinIcon.png"
                alt="linkedin icon"
                className="w-[40px] hover:shadow-icons hover:shadow-white ease-in-out duration-75 rounded-full -mb-[2px]"
              />
            </button>
          </a>
        </div>
      </nav>
    </header>
  )
}
