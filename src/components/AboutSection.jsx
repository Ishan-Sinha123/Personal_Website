import { Eye, Database, Brain, Download } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column: intro and links */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold text-foreground">Passionate BackEnd Developer</h3>
            <p className="text-foreground">
              With over 4 years of experience in software development, I specialize
              in creating high throughput, low latency systems that are cloud native and scalable.
            </p>
            <p className="text-foreground">Exploring the forefront of technical innovation. Some of my recent interests:</p>

            <div className="space-y-3">
              <div className="border border-border rounded-md p-4 bg-background/50">
                <a href="https://github.com/XTXMarkets/ternfs" target="_blank" rel="noopener noreferrer" className="underline text-foreground hover:text-foreground/80">
                  TernFS: High-performance distributed file system
                </a>
              </div>

              <div className="border border-border rounded-md p-4 bg-background/50">
                <a href="https://github.com/open-telemetry/opentelemetry-ebpf-profiler" target="_blank" rel="noopener noreferrer" className="underline text-foreground hover:text-foreground/80 block">
                  OpenTelemetry eBPF Profiler (ElasticSearch Open Sourced Project! - Also learning more about eBPF :D)
                </a>
              </div>

              <div className="border border-border rounded-md p-4 bg-background/50">
                <a href="https://github.com/ByteDance-Seed/Seed-Prover" target="_blank" rel="noopener noreferrer" className="underline text-foreground hover:text-foreground/80">
                  Seed-Prover from ByteDance (State of the Art - Formal Proof Generation for Advanced Mathematics)
                </a>
              </div>
            </div>

            <div className="mt-6" />
          </div>
          {/* Right column: cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Specializations</h3>

            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Eye className="h-6 w-6 text-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">Observability</h4>
                  <p className="mt-2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                    Building complex distributed tracing infrastructure with OpenTelemetry
                    for Agentic workflows (using LangSmith/LangFuse) & high-demand data systems
                    (using AWS X-Ray, Grafana).
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">Data Pipelines</h4>
                  <p className="mt-2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                    Implementing terabyte-scale data pipelines
                    using both Apache Airflow & bespoke infrastructure
                    with intelligent sharding to optimize resource usage.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">Reasoning Model Research</h4>
                  <p className="mt-2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                    Post-training & expanded inference with SOTA reasoning models.
                    Focus on improving reasoning capabilities for formal proof verification
                    in advanced mathematics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered oval action buttons below both columns */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-foreground text-foreground bg-background hover:bg-foreground hover:text-background transition-colors font-bold">
            Get In Touch
          </a>
          <a href="/IshanSinha2026Resume.pdf" download className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-foreground text-foreground bg-background hover:bg-foreground hover:text-background transition-colors font-bold">
            <Download className="h-4 w-4 inline-block mr-2" /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
