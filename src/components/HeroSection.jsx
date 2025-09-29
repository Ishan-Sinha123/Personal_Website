import { ArrowDown } from "lucide-react";
import img1 from "@/assets/ishan_picture (1).jpeg";
import img2 from "@/assets/ishan_picture (2).jpeg";
import img3 from "@/assets/ishan_picture (3).jpeg";
import img4 from "@/assets/ishan_picture (4).jpeg";
import img5 from "@/assets/ishan_picture (5).jpeg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Animated background images row */}
      <div className="absolute inset-0 w-full h-full flex z-0 overflow-hidden">
        <div className="flex w-full h-full animate-hero-scroll-reverse">
          {[img1, img2, img3, img4, img5, img1, img2, img3, img4, img5].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Background ${idx + 1}`}
              className="object-cover h-full"
              style={{ minWidth: "100vw", filter: "blur(1px)" }}
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* Main content with strong visibility */}
      <div className="container max-w-4xl mx-auto text-center z-10 relative">
        <div className="space-y-6 bg-white/80 rounded-xl shadow-lg p-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0a2342] drop-shadow">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-[#0a2342] opacity-0 animate-fade-in-delay-1">
              {" "}
              Ishan
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#0a2342] max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 drop-shadow">
            I architect complex systems that are scalable & well-fit to price, memory, + compute constraints.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button bg-white text-[#0a2342] border-[#0a2342] hover:bg-[#0a2342] hover:text-white font-bold">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-[#0a2342] mb-2 drop-shadow"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-[#0a2342] drop-shadow" />
      </div>
    </section>
  );
};
