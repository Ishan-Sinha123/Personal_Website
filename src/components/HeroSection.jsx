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
      {/* Background images row - only as background */}
      <div className="absolute inset-0 w-full h-full flex z-0">
        {[img1, img2, img3, img4, img5].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Background ${idx + 1}`}
            className="object-cover w-1/5 h-full opacity-70"
            draggable={false}
            style={{ filter: "blur(1px)" }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container max-w-4xl mx-auto text-center z-10 relative">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0a2342]">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-[#0a2342] opacity-0 animate-fade-in-delay-1">
              {" "}
              Ishan
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#0a2342] max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I architect complex systems that are scalable & well-fit to price, memory, + compute constraints.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button text-[#0a2342] border-[#0a2342] hover:bg-[#0a2342] hover:text-white">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-[#0a2342] mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-[#0a2342]" />
      </div>
    </section>
  );
};
