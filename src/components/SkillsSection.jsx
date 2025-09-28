import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
  { name: "Python", description: "JumpTrading, Axiom, Machine Learning curriculum @ UW." },
  { name: "Java", description: "Amazon Web Services, Distributed Systems & majority of UW curriculum" },
  { name: "C++", description: "eBPF Profiler Project, Operating Systems course, actively working on improving here!" },
  { name: "Go", description: "Amazon Web Services" },
  { name: "React", description: "Built this website." },
  { name: "MySQL", description: "JumpTrading - Building Airflow from ground up." },
  { name: "PostgreSQL/ClickHouse", description: "Axiom - Self-hosted observability infrastructure." },
  { name: "Git/GitHub", description: "Ubiquitous." },
  { name: "Docker/Kubernetes", description: "Unavoidable." },
  { name: "Figma", description: "Personal Project Designs." },
];


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <ul className="space-y-6">
          {skills.map((skill, key) => (
            <li key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <h3 className="font-semibold text-lg text-primary mb-2">{skill.name}</h3>
              <p className="text-muted-foreground text-base">{skill.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
