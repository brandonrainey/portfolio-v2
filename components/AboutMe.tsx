interface AboutMeProps {
  AboutMeRef: React.RefObject<HTMLDivElement>
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

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 sm:gap-y-12">
        <p className="border rounded-lg p-2 border-[#37448f7a] z-20 relative aboutPanel shadow-sm shadow-cyan-400">
          Hi, I&apos;m a Frontend Developer based in Goose Creek, SC, passionate
          about using technology to create impactful solutions. Over the past
          few years, I&apos;ve been honing my skills in HTML, CSS, and
          JavaScript/TypeScript, with a focus on building websites using React.
        </p>

        <p className="border rounded-lg p-2 border-[#37448f7a] z-20 relative aboutPanel shadow-sm shadow-cyan-400">
          One of my key projects is an events platform site that I developed,
          featuring Stripe integration for transactions, user authentication via
          Clerk, and MongoDB as the database. I used Next.js, TypeScript, and
          Tailwind CSS to create a modern interface and user experience.
        </p>

        <p className="border rounded-lg p-2 border-[#37448f7a] z-20 relative aboutPanel shadow-sm shadow-cyan-400">
          My long-term goal is to continually expand my knowledge and eventually
          become a senior-level developer. As a self-taught programmer, I&apos;m
          driven by self-motivation and a love for learning new things.
          Currently, I&apos;m also learning Japanese.
        </p>

        <p className="border rounded-lg p-2 border-[#37448f7a] z-20 relative aboutPanel shadow-sm shadow-cyan-400">
          I&apos;m seeking opportunities as a Frontend Developer and would love to
          bring my skills, dedication, and enthusiasm to your team. If you're
          looking for a passionate and ambitious developer, please feel free to
          reach out!
        </p>
      </div>
    </section>
  )
}
