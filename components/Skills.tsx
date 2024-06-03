import { motion } from 'framer-motion'
interface SkillProps {
  skills: {
    name: string
    icon: string
  }[]
}

export default function Skills({ skills }: SkillProps) {
  return (
    <section className="flex sm:gap-4 gap-2 sm:w-[75%] w-[100%] flex-wrap justify-center">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="p-2 w-28 flex flex-col items-center justify-center rounded drop-shadow skillIcon group "
        >
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            className={`w-16 ${skill.name === 'React' && 'w-20'}`}
          />
          <p className="text-white font-bold">{skill.name}</p>
        </div>
      ))}
    </section>
  )
}
