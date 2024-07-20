

export default function Intro() {
  return (
    <section className="relative flex justify-around sm:w-[75%] max-w-[800px] z-50 sm:mt-0 -mt-10 rounded-xl">
      <div className="flex flex-col text-white bg-[#15122992] p-4 rounded-xl shadow-lg border border-white/30">
        <div className="flex justify-around">
          <h2 className="lg:text-6xl sm:text-5xl text-4xl font-semibold mb-4 self-center drop-shadow">
            Hi, I&apos;m <span className="text-[#9bc1e7]">Brandon</span>,
          </h2>
          <div className="sm:min-w-[250px] min-w-[150px] sm:h-[250px]  min-h-[150px] rounded-[50%] border-4 border-[#bbbec3] shadow-2xl relative z-10">
            <img
              src="/pfp-transparent.webp"
              alt="profile picture"
              className="object-contain w-auto max-h-[242px] aspect-square"
            />
          </div>
        </div>

        <p className="text-[#bbbec3] lg:text-lg sm:text-base text-sm">
          a self-taught{' '}
          <span className="font-semibold sm:text-xl text-lg text-[#9bc1e7]">
            Frontend Developer
          </span>{' '}
          with a passion for creating engaging, responsive websites and apps.
          With a diverse portfolio spanning e-commerce sites to interactive
          games, my interest lies in leveraging the power of{' '}
          <span className="font-semibold sm:text-xl text-lg text-[#9bc1e7]">
            HTML
          </span>
          ,{' '}
          <span className="font-semibold sm:text-xl text-lg text-[#9bc1e7]">
            CSS
          </span>
          ,{' '}
          <span className="font-semibold sm:text-xl text-lg text-[#9bc1e7]">
            JavaScript/TypeScript
          </span>
          , and{' '}
          <span className="font-semibold sm:text-xl text-lg text-[#9bc1e7]">
            React
          </span>{' '}
          to bring ideas to life. I believe in the power of code and its ability
          to shape user experiences, drive engagement, and bring color to the
          digital world. Dive in to discover my work, skills, and the creative
          solutions I bring to the web development industry.
        </p>
      </div>

      <div className="absolute bg-[#554b84] w-[110%] h-[100%] opacity-70 z-[-1] rounded shadow-icons shadow-[#10121d] blur-3xl backdrop-blur-3xl "></div>
    </section>
  )
}
