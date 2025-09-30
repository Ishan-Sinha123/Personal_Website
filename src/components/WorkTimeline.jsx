import React from "react";

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

  return (
    <section id="experience" className="py-12">
      <div className="container max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Experience</h3>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-8">
            {list.map((item, idx) => (
              <div key={item.id} className="flex items-start gap-6 sm:pl-12 pl-6">
                {/* logo */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-card shadow flex items-center justify-center">
                  {/* Use img with fallback alt; you can add logo files at the provided paths */}
                  <img src={item.logo} alt={`${item.company} logo`} className="w-full h-full object-contain" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold">{item.role}</div>
                      <div className="text-sm text-muted-foreground">{item.company} {item.location ? `• ${item.location}` : ""}</div>
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">{item.date}</div>
                  </div>

                  <ul className="mt-3 list-disc list-inside text-sm space-y-1 text-foreground">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>

                {/* connector dot for large screens */}
                <div className="hidden sm:block absolute left-2 z-0 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2" style={{ top: `${(idx + 0.5) * 4}rem` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
