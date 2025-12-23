const skills = [
  { name: "Python" },
  { name: "Java" },
  { name: "C++" },
  { name: "Go" },
  { name: "React" },
  { name: "MySQL" },
  { name: "PostgreSQL/ClickHouse" },
  { name: "Git/GitHub" },
  { name: "Docker/Kubernetes" },
  { name: "Figma" },
];


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          My <span className="text-foreground"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="px-6 py-3 bg-card rounded-full border-2 border-foreground/20 hover:border-foreground/50 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <h3 className="font-semibold text-base text-foreground whitespace-nowrap">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
