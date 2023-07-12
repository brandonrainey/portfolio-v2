import React from 'react'

interface HeaderProps {
  AboutMeRef: any
}

export default function Header({ AboutMeRef }: HeaderProps) {

  function handleAboutMeClick() {
    AboutMeRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div className='w-full flex justify-between mb-10'>
        <h1 className='text-white font-extrabold text-4xl border-2 w-fit p-2 rounded shadow-white shadow self-center text-center'>勇剣</h1>
        <nav className='flex flex-col sm:flex-row items-center gap-2'>
            <ul className='flex gap-4 items-center justify-center text-white px-4'>
                <li className='cursor-pointer hover:border-[1px] hover:px-[3px] px-1 rounded '>Project</li>
                <li className='cursor-pointer hover:border-[1px] hover:px-[3px] px-1 rounded ' onClick={() => handleAboutMeClick()}>About</li>
                <li className='cursor-pointer hover:border-[1px] hover:px-[3px] px-1 rounded '>Contact</li>
            </ul>
            <div className='flex items-center gap-2'>
              <a href="https://github.com/brandonrainey"><img src="/githubIconWhite.png" alt="github icon" className='w-[40px] hover:shadow-icons hover:shadow-white ease-in-out duration-75 rounded-full'/></a>
              <a href="https://www.linkedin.com/in/brandon-rainey/"><img src="/linkedinIcon.png" alt="linkedin icon" className='w-[46px] hover:shadow-icons hover:shadow-white ease-in-out duration-75 rounded-full'/></a>
            </div>
        </nav>
    </div>
  )
}
