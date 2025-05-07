import { ProgressBar } from "../../widgets/ProgressBar/ProgressBar";
import { Section } from "../../widgets/Section/Section";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Programming Languages":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "Frontend Technologies":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "Backend Technologies":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      );
    case "Databases":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z M9 17v-6 M12 17v-8 M15 17v-4" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
  }
};

export const Skills = () => {
  const skillsData = {
    "Programming Languages": [
      { name: "TypeScript", proficiency: 80, color: "bg-blue-500" },
      { name: "JavaScript", proficiency: 80, color: "bg-yellow-500" }
    ],
    "Frontend Technologies": [
      { name: "React", proficiency: 80, color: "bg-cyan-500" },
      { name: "Next.js", proficiency: 80, color: "bg-slate-700" },
      { name: "Vue", proficiency: 75, color: "bg-emerald-500" },
      { name: "Nuxt", proficiency: 75, color: "bg-green-600" },
      { name: "Tailwind", proficiency: 70, color: "bg-sky-500" }
    ],
    "Backend Technologies": [
      { name: "Nest", proficiency: 60, color: "bg-red-600" },
      { name: "Prisma", proficiency: 60, color: "bg-violet-500" },
      { name: "Node.js", proficiency: 60, color: "bg-green-600" }
    ],
    "Databases": [
      { name: "MongoDB", proficiency: 40, color: "bg-green-700" },
      { name: "PostgreSQL", proficiency: 40, color: "bg-blue-700" }
    ],
    "Other Tools": [
      { name: "Git", proficiency: 80, color: "bg-orange-600" },
      { name: "Docker", proficiency: 40, color: "bg-blue-600" }
    ]
  };

  return (
    <Section className="bg-slate-100" title="Skills" id="skills">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-base font-medium text-gray-800 mb-4 flex items-center border-b pb-2">
                {getCategoryIcon(category)}
                <span className="ml-2">{category}</span>
              </h3>
              <div className="space-y-3">
                {skills.map((skill, skillIndex) => (
                  <ProgressBar
                    key={skillIndex}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
};
