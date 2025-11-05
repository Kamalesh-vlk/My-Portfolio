import { useEffect, useRef, useState } from 'react';
import { Download, User } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-[#0F172A]"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-[#6366F1] to-[#F59E0B] rounded-3xl p-1">
              <div className="w-full h-full bg-[#1E293B] rounded-3xl flex items-center justify-center">
                <img
                  src="/profile1.jpg"
                  alt="Profile"
                  className="w-full h-full object-contain rounded-3xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F59E0B]/20 rounded-full blur-2xl"></div>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a passionate AI engineer with expertise in building intelligent systems and automation workflows. 
              With a strong foundation in machine learning, data analysis, and agentic frameworks, I create adaptive 
              AI solutions that combine reasoning, context, and real-world interaction.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              My journey in AI has been driven by curiosity and a desire to explore how machines can think and learn. 
              I specialize in developing ML & DL Models,AI agents, chatbots, and RAG-based applications using frameworks 
              like LangChain, LangGraph, and CrewAI — continuously learning and experimenting to push the boundaries 
              of intelligent automation.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-2xl font-medium hover:shadow-lg hover:shadow-[#6366F1]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <a
                href="/KAMALESH_RESUME.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-2xl font-medium hover:shadow-lg hover:shadow-[#6366F1]/50 transition-all duration-300 hover:scale-105"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>             
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
