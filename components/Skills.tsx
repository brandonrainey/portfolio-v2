export default function Skills() {
  const skills = [
    { name: "HTML", icon: "/htmlicon.png" },
    { name: "CSS", icon: "/cssicon.png" },
    { name: "JavaScript", icon: "/javascriptIcon.png" },
    { name: "TypeScript", icon: "/typescriptIcon.png" },
    { name: "React", icon: "/reactIcon.png" },
    { name: "Next.js", icon: "/nextjsIcon.png" },
    { name: "SASS", icon: "/sassIcon.png" },
    { name: "Redux", icon: "/reduxIcon.png" },
    { name: "Tailwind", icon: "/tailwindIcon.png" },
    { name: "Node.js", icon: "/nodejsIcon.png" },
    { name: "Git", icon: "/gitIcon.png" },
    { name: "Jest", icon: "/jestIcon.png" },
    { name: "Firebase", icon: "/firebaseIcon.png" },
    { name: "MongoDB", icon: "/mongodbIcon.webp" },
  ];

  return (
    <section className="flex sm:gap-4 gap-2 sm:w-[75%] w-[100%] flex-wrap justify-center ">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-[#444059] p-2 w-28 flex flex-col items-center justify-center hover:transition hover:scale-105 ease-in-out duration-75 rounded drop-shadow-xl"
        >
          <img src={skill.icon} alt={`${skill.name} icon`} className={`w-16 ${skill.name === 'React' && 'w-20'}`} />
          <p className="text-white font-bold">{skill.name}</p>
        </div>
      ))}
    </section>
  );
}
