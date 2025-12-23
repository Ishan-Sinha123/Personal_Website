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
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">
          My <span className="text-foreground"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="hexagon-container group"
              style={{
                width: '140px',
                height: '161px',
              }}
            >
              <div className="hexagon bg-card border-2 border-foreground/10 group-hover:border-foreground/30 group-hover:scale-105 transition-all duration-300">
                <div className="hexagon-content flex flex-col items-center justify-center p-4">
                  <img
                    src={skill.logo}
                    alt={skill.name + ' logo'}
                    className={`${skill.name === 'Go' ? 'w-10 h-10' : 'w-8 h-8'} object-contain mb-2 ${skill.invertLogo ? 'filter brightness-0 dark:brightness-0 dark:invert dark:contrast-125' : ''}`}
                  />
                  <h3 className="font-semibold text-sm text-foreground text-center leading-tight">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
