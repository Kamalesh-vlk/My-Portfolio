import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#6366F1]/20 rounded-full blur-3xl animate-float -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-[#F59E0B]/20 rounded-full blur-3xl animate-float-delayed bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Kamalesh Srinivasan
          <span className="block text-[#6366F1] mt-2">AI Engineer</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-delay">
          I build intelligent agents, machine learning models, and chatbots that solve real-world problems.

        </p>

        <div className="flex gap-6 justify-center animate-fade-in-delay-2">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-[#6366F1] text-white rounded-2xl font-medium hover:bg-[#5558E3] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366F1]/50 flex items-center gap-2"
          >
            View Projects
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white/10 text-white rounded-2xl font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
          >
            Get in Touch
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out 2s infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s both;
        }
      `}</style>
    </section>
  );
}
