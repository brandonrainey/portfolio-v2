import React from 'react'

export default function Intro() {
  return (
    <div className='relative flex justify-around w-[75%] max-w-[800px]    z-50'>
        <div className='flex flex-col text-white bg-[#232041] p-4 rounded'>
          <div className='flex justify-around'>
            <h2 className='lg:text-6xl text-5xl font-semibold mb-4 self-center drop-shadow'>Hello! I'm <span className='text-[#9bc1e7]'>Brandon,</span></h2>
            <img src="/pfp.png" alt="" className='min-w-[200px] h-[200px] rounded-[50%]'/>
          </div>
          
          <p className='text-[#bbbec3] lg:text-lg text-base'>a self-taught <span className='font-semibold text-[#9bc1e7]'>Frontend Developer</span> with a knack for crafting engaging, responsive web solutions. With a diverse portfolio spanning e-commerce sites to interactive games, my passion lies in leveraging the power of <span className='font-semibold text-[#9bc1e7]'>HTML</span>, <span className='font-semibold text-[#9bc1e7]'>CSS</span>, <span className='font-semibold text-[#9bc1e7]'>JavaScript</span>, and <span className='font-semibold text-[#9bc1e7]'>React</span> to bring ideas to life. I believe in the magic of code and its ability to shape user experiences, drive engagement, and bring color to the digital world. Dive in to discover my work, skills, and the creative solutions I bring to the web development table.</p>
        </div>

        
        <div className='absolute bg-slate-600 w-[500px] h-[400px] top-[20px] left-[-20px] z-[-1] rounded'>

          </div>
    </div>
  )
}
