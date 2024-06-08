interface AboutMeProps {
  AboutMeRef: any
}

export default function AboutMe({ AboutMeRef }: AboutMeProps) {
  return (
    <section
      className="sm:w-[75%] text-[#dadbde] flex-col flex gap-4"
      ref={AboutMeRef}
    >
      <div className="sm:w-[75%] w-full flex flex-row items-center gap-2">
        <p className="w-10 h-10 bg-[#3a376c] rounded-sm font-bold text-2xl flex items-center justify-center text-white">
          約
        </p>
        <h2 className="text-5xl text-[#9bc1e7] font-bold">About Me</h2>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <p className="border rounded-lg p-2 border-[#37448f7a] z-20 relative aboutPanel shadow-sm shadow-cyan-400">
        Hi, I am a Frontend Developer based in Goose Creek, South Carolina, and
        I am passionate about leveraging technology to create impactful
        solutions. For over the past several years, I&apos;ve been honing my
        skills in HTML, CSS, and JavaScript/TypeScript, with a focus on
        developing websites and web apps using JavaScript and React.
      </p>

      <p className="border rounded-lg p-2 border-[#37448f7a] z-20 relative aboutPanel shadow-sm shadow-cyan-400">
        A key project I&apos;m particularly proud of is a responsive e-commerce
        site I developed, featuring Stripe integration for seamless transactions
        and secure user authentication via Google OAuth. I utilized technologies
        such as Next.js, TypeScript, Redux Toolkit, and Tailwind CSS to create a
        modern interface and efficient Firestore and Stripe events handling.
      </p>
      <p className="border rounded-lg p-2 border-[#37448f7a] z-20 relative aboutPanel shadow-sm shadow-cyan-400">
        Short-term, I aspire to transition from a non-technical role into a web
        development position. Long-term, I aim to continually expand my
        knowledge, with the goal of becoming a senior developer and beyond. As a
        self-taught programmer, I&apos;m a testament to self-motivation and have
        a love for learning new things - currently, I&apos;m also learning
        Japanese.
      </p>
      <p className="border rounded-lg p-2 border-[#37448f7a] z-20 relative aboutPanel shadow-sm shadow-cyan-400">
        Outside of professional interests, I enjoy staying up-to-date with the
        latest tech trends like AI, PC gaming, and watching anime. I am
        currently seeking opportunities as a Frontend Developer and would love
        to bring my skills, dedication, and enthusiasm to your team. If
        you&apos;re looking for a passionate and ambitious developer, please
        don&apos;t hesitate to reach out!
      </p>
      </div>

      
    </section>
  )
}
