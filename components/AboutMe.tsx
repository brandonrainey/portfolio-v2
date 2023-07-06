import React, { useRef } from 'react'

interface AboutMeProps {
  AboutMeRef: any
}

export default function AboutMe({ AboutMeRef }: AboutMeProps) {

  

  return (
    <div className='w-[75%] text-[#dadbde] flex-col flex gap-4' ref={AboutMeRef}>
        <h2 className='text-5xl text-[#9bc1e7] font-bold'>About Me</h2>
        <p className='border-l-4 pl-2 border-[#37448f]'>As a 29-year-old Frontend Developer based in Goose Creek, South Carolina, I am passionate about leveraging technology to create impactful solutions. For the past two years, I've been honing my skills in HTML, CSS, and JavaScript/TypeScript, with a focus on developing engaging websites and web applications using JavaScript and React.</p>
        <p className='border-l-4 pl-2 border-[#37448f]'>
        A key project I'm particularly proud of is a responsive e-commerce site I developed, featuring Stripe integration for seamless transactions and secure user authentication via Google OAuth. I utilized technologies such as Next.js, TypeScript, Redux Toolkit, and Tailwind CSS to create a modern interface and efficient Firestore and Stripe events handling.
        </p>
        <p className='border-l-4 pl-2 border-[#37448f]'>
        Short-term, I aspire to transition from a non-technical role into a web development position. Long-term, I aim to continually expand my knowledge, with the goal of becoming a senior developer. As a self-taught programmer, I'm a testament to self-motivation and have a love for learning new things - currently, I'm learning Japanese. 
        </p>
        <p className='border-l-4 pl-2 border-[#37448f]'>
        Aside from technical skills, I bring adaptability, effective teamwork, and excellent customer-facing skills to the table, developed through previous roles. My enthusiasm for problem-solving and continual learning motivates me in this ever-evolving field.
        </p>
        <p className='border-l-4 pl-2 border-[#37448f]'>
        Outside of professional interests, I enjoy staying up-to-date with the latest tech trends, PC gaming, and watching anime. Currently, I am actively seeking opportunities as a Frontend Developer and would love to bring my skills, dedication, and enthusiasm to your team. If you're looking for a passionate and ambitious developer, please don't hesitate to reach out!
        </p>
    </div>
  )
}
