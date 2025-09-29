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
  { name: "Python", description: "JumpTrading, Axiom, Machine Learning curriculum @ UW.", logo: pythonLogo },
  { name: "Java", description: "Amazon Web Services, Distributed Systems & majority of UW curriculum", logo: javaLogo },
  { name: "C++", description: "eBPF Profiler Project, Operating Systems course, actively working on improving here!", logo: cppLogo },
  { name: "Go", description: "Amazon Web Services", logo: goLogo },
  { name: "React", description: "Built this website.", logo: reactLogo },
  { name: "MySQL", description: "JumpTrading - Building Airflow from ground up.", logo: mysqlLogo },
  { name: "PostgreSQL/ClickHouse", description: "Axiom - Self-hosted observability infrastructure.", logo: postgresLogo },
  { name: "Git/GitHub", description: "Ubiquitous.", logo: gitLogo },
  { name: "Docker/Kubernetes", description: "Unavoidable.", logo: dockerLogo },
  { name: "Figma", description: "Personal Project Designs.", logo: figmaLogo },
];


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4">
              <img src={skill.logo} alt={skill.name + ' logo'} className="w-10 h-10 object-contain" />
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-base">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, key) => (
              <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <h3 className="font-semibold text-lg text-primary mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-base">{skill.description}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};
