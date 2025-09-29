import { Eye, Database, Brain } from "lucide-react";

import ishan1 from '../assets/ishan_picture (1).jpeg';
import ishan2 from '../assets/ishan_picture (2).jpeg';
import ishan3 from '../assets/ishan_picture (3).jpeg';
import ishan4 from '../assets/ishan_picture (4).jpeg';
import ishan5 from '../assets/ishan_picture (5).jpeg';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Passionate BackEnd Developer
            </h3>
            <p className="text-foreground">
              With over 4 years of experience in software development, I specialize
              in creating high throughput, low latency systems that are cloud native and scalable.
            </p>
            <p className="text-foreground">
              Exploring the forefront of technical innovation. Some of my recent interests include:
            </p>
            <ul className="list-disc list-inside text-foreground pl-6 space-y-2">
              <li>
                <a href="https://github.com/XTXMarkets/ternfs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  TernFS: High-performance distributed file system
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
              <a href="#contact" className="cosmic-button text-foreground">
                Get In Touch
              </a>
              <a
                href="/IshanSinha2026Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-foreground hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">Observability</h4>
                  <p className="text-foreground">
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
                  <h4 className="font-semibold text-lg text-foreground">Data Pipelines</h4>
                  <p className="text-foreground">
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
                  <h4 className="font-semibold text-lg text-foreground">Reasoning Model Research</h4>
                  <p className="text-foreground">
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
