import { cn } from "@/lib/utils";
import pythonLogo from "@/assets/python-logo.png";
import javaLogo from "@/assets/java-logo.png";
import cppLogo from "@/assets/cpp-logo.png";
import goLogo from "@/assets/go-logo.png";
import reactLogo from "@/assets/react.svg";
import mysqlLogo from "@/assets/mysql-logo.png";
import postgresLogo from "@/assets/postgres-logo.png";
import gitLogo from "@/assets/git-logo.png";
import dockerLogo from "@/assets/docker-logo.png";
import figmaLogo from "@/assets/figma-logo.png";


const skills = [
  { name: "Python", logo: pythonLogo, invertLogo: true },
  { name: "Java", logo: javaLogo, invertLogo: true },
  { name: "C++", logo: cppLogo, invertLogo: true },
  { name: "Go", logo: goLogo, invertLogo: true },
  { name: "React", logo: reactLogo, invertLogo: false },
  { name: "MySQL", logo: mysqlLogo, invertLogo: false },
  { name: "PostgreSQL/ClickHouse", logo: postgresLogo, invertLogo: true },
  { name: "Git/GitHub", logo: gitLogo, invertLogo: true },
  { name: "Docker/Kubernetes", logo: dockerLogo, invertLogo: true },
  { name: "Figma", logo: figmaLogo, invertLogo: true },
];


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          My <span className="text-foreground"> Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center">
              <img
                src={skill.logo}
                alt={skill.name + ' logo'}
                className={`${skill.name === 'Go' ? 'w-12 h-12' : 'w-10 h-10'} object-contain mb-2 ${skill.invertLogo ? 'filter dark:brightness-0 dark:invert dark:contrast-125' : ''}`}
              />
              <h3 className="font-semibold text-lg text-foreground mb-2 text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
