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
        <h1 className='text-white font-extrabold text-4xl border-2 w-fit p-2 rounded shadow-white shadow'>勇剣</h1>
        <nav className='flex'>
            <ul className='flex gap-4 items-center justify-center text-white'>
                <li className='cursor-pointer'>Project</li>
                <li className='cursor-pointer' onClick={() => handleAboutMeClick()}>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
        </nav>
    </div>
  )
}
