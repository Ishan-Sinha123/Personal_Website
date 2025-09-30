import React from "react";
// Install with: npm install react-vertical-timeline-component
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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
      ],
      logo: "/projects/axiom-logo.png",
      logo: "AXIOM",
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
      <div className="container max-w-6xl mx-auto flex flex-col items-center">
  <h3 className="text-sm font-extrabold mb-6 text-center text-blue-900 dark:text-slate-300">Experience</h3>
        <div className="relative w-full">
          {/* Single left timeline line: blue in light, slate-200 in dark */}
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-blue-900 dark:bg-slate-200 rounded-full z-0" />
          <div className="space-y-6">
            {list.map((item, idx) => (
              <div key={item.id} className="relative flex flex-row items-start w-full pl-16 pr-4 py-2">
                <div className="z-10 flex-shrink-0 -ml-10">
                  <div className="w-6 h-6 rounded-full bg-blue-900 dark:bg-slate-200 border-2 dark:border-slate-300 border-white" />
                </div>
                <div className="bg-card/80 dark:bg-card/90 rounded-md p-4 w-full max-w-3xl mx-auto">
                  <div className="flex flex-col gap-2 items-start">
                    <div className="text-2xl font-extrabold text-left text-blue-900 dark:text-white">{item.company}</div>
                    <div className="text-sm text-left text-blue-900 dark:text-slate-300">{item.date}</div>
                    <div className="text-sm text-left text-blue-900 dark:text-slate-300">{item.role} {item.location ? `• ${item.location}` : ''}</div>
                  </div>
                  <ul className="mt-1 ml-4 list-disc text-sm leading-tight space-y-1 text-left w-full">
                    {item.bullets.map((b, i) => (
                      <li key={i} className={`break-words ${isHighlighted(b) ? 'font-bold text-white' : ''}`}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
