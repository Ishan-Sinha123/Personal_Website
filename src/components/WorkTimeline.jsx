import React from "react";
// Install with: npm install react-vertical-timeline-component
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const WorkTimeline = ({ items }) => {
  const defaultItems = [
    {
      id: 1,
      role: "Software Engineer Intern - Machine Learning",
      company: "Axiom Math AI",
      location: "Palo Alto, CA",
      date: "September 2025 - December 2025",
      bullets: [
        "Team of 8 ex-Meta Superintelligence Lab Researchers + Stanford PhD.",
        "Raised $60M to develop LLMs trained on mathematical proofs with a moonshot goal to formalize all of Math.",
        "Working on ETL pipelines and LEAN proof validator.",
        "TernFS: High-performance distributed file system",
        "Seed-Prover from ByteDance (State of the Art - Formal Proof Generation for Advanced Mathematics)",
      ],
      logo: "/projects/axiom-logo.png",
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "Jump Trading",
      location: "Chicago, IL",
      date: "June 2025 - August 2025",
      bullets: [
        "Designed and implemented cross-platform, automated dependency management system supporting cloud-scale ETL pipeline backfills.",
        "Architected remote access solutions for closed-network nodes, Airflow infrastructure, and grid computing systems.",
        "Engineered intelligent sharding algorithms reducing backfill processing time by 6+ hours and optimizing compute resource utilization.",
        "OpenTelemetry eBPF Profiler (ElasticSearch Open Sourced Project! - Also learning more about eBPF :D)",
      ],
      logo: "/projects/jump-logo.png",
    },
    {
      id: 3,
      role: "Software Development Engineer Intern, AWS X-Ray (CloudWatch)",
      company: "Amazon Web Services",
      location: "Seattle, WA",
      date: "June 2024 - September 2024",
      bullets: [
        "Optimized distributed tracing architecture in AWS X-Ray by refactoring core algorithms, eliminating 15+ redundant method calls for 1M+ daily traces.",
        "Developed OpenTelemetry Protocol (OTLP) integration enabling seamless trace export to gRPC and HTTP endpoints.",
        "Integrated OpenTelemetry libraries into Brazil build system with secure package management and automated testing pipelines for production deployment.",
      ],
      logo: "/projects/aws-logo.png",
    },
  ];

  const list = items && items.length ? items : defaultItems;

  // Highlight About links in timeline bullets
  const isHighlighted = (text) =>
    /ternfs|opentelemetry e?bpf profiler|seed-prover/i.test(text);

  return (
    <section id="experience" className="py-12">
      <div className="container max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Experience</h3>

        <VerticalTimeline>
          {list.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              date={item.date}
              iconStyle={{ background: "transparent", boxShadow: "none" }}
              icon={
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="w-full h-full object-contain bg-transparent"
                    style={{ maxWidth: 48, maxHeight: 48 }}
                  />
                </div>
              }
              contentStyle={{ background: "transparent", boxShadow: "none", padding: 0 }}
              contentArrowStyle={{ borderRight: "7px solid transparent" }}
            >
              <div className="bg-card/80 dark:bg-card/90 rounded-md p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-lg font-semibold">{item.role}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.company}
                      {item.location ? ` • ${item.location}` : ""}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground ml-4">{item.date}</div>
                </div>

                <ul className="mt-3 ml-5 list-disc text-sm leading-tight space-y-1 text-left">
                  {item.bullets.map((b, i) => (
                    <li
                      key={i}
                      className={`break-words ${
                        isHighlighted(b) ? "font-bold text-white" : ""
                      }`}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default WorkTimeline;
