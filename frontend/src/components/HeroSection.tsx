import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="newspaper-container py-12">
      <div className="newspaper-border p-6 md:p-10">
        
        <h1 className="font-heading text-3xl md:text-5xl font-black leading-tight mb-4">
          PARV AGARWAL
        </h1>

        <h2 className="text-lg md:text-2xl font-semibold mb-6 italic">
          Software Development Engineer focused on Scalable Systems
        </h2>

        <p className="text-lg md:text-xl mb-8 max-w-3xl border-l-2 border-newspaper-black dark:border-newspaper-white pl-4 italic">
          I build high-performance, scalable applications using modern web
          technologies. With 1000+ DSA problems solved and hands-on experience
          in full-stack development, I focus on writing efficient, clean, and
          production-ready code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          
          <Button className="group">
            <a href="#projects" className="flex items-center">
              View My Work
            </a>
            <ArrowRight
              size={16}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Button>

          <Button variant="outline">
            <a href="#contact" className="flex items-center">
              Get In Touch
            </a>
          </Button>

        </div>

      </div>
    </section>
  );
}