import { Eye, Database, Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl relative">
        {/* Background images row */}
        <div className="absolute inset-0 w-full h-64 flex z-0">
          {[1,2,3,4,5].map((num) => (
            <img
              key={num}
              src={require(`../assets/ishan_picture (${num}).jpeg`)}
              alt={`Background ${num}`}
              className="w-1/5 h-full object-cover opacity-60"
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        {/* Profile image and name/title */}
        <div className="relative z-10 pt-8 pb-8">
          <img
            src="/profile.jpg"
            alt="Ishan Sinha"
            className="mx-auto rounded-full w-32 h-32 mb-6 object-cover border-4 border-primary"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">
            Hi I'm Ishan Sinha
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate BackEnd Developer
            </h3>

            <p className="text-muted-foreground">
              With over 4 years of experience in software development, I specialize
              in creating high throughput, low latency systems that are cloud
              agnostic, maintainable, and cost efficient.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about learning new technologies. I'm constantly
              exploring the forefront of technical innovation. Some of my recent interests include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground pl-6 space-y-2">
              <li>
                <a href="https://github.com/XTXMarkets/ternfs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  TernFs (XTX Market's Open Source Distributed File System)
                </a>
              </li>
              <li>
                <a href="https://github.com/open-telemetry/opentelemetry-ebpf-profiler" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  OpenTelemetry eBPF Profiler (ElasticSearch Open Sourced Project! - Also learning more about eBPF :D)
                </a>
              </li>
              <li>
                <a href="https://github.com/ByteDance-Seed/Seed-Prover" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Seed-Prover from ByteDance (State of the Art - Formal Proof Generation for Advanced Mathematics)
                </a>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/IshanSinha2026Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                      <Eye className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Observability</h4>
                  <p className="text-muted-foreground">
                    Building complex distributed tracing infrastructure with OpenTelemetry
                    for Agentic workflows (using LangSmith/LangFuse) & high-demand data systems
                    (using AWS X-Ray, Grafana).
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                      <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Pipelines</h4>
                  <p className="text-muted-foreground">
                    Implementing terabyte-scale data pipelines
                    using both Apache Airflow & bespoke infrastructure
                    with intelligent sharding to optimize resource usage.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                      <Brain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Reasoning Model Research</h4>
                  <p className="text-muted-foreground">
                    Post-training & expanded inference with SOTA reasoning models.
                    Focus on improving reasoning capabilities for formal proof verification
                    in advanced mathematics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
