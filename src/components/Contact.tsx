import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
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

  const contactInfo = [
    {
      icon: <Phone size={32} />,
      label: 'Phone',
      value: '+91 9384025215',
      link: 'tel:+919384025215'
    },
    {
      icon: <Mail size={32} />,
      label: 'Email',
      value: 'kamaleshvlk27@gmail.com',
      link: 'mailto:kamaleshvlk27@gmail.com'
    },
    {
      icon: <Linkedin size={32} />,
      label: 'LinkedIn',
      value: 'Kamalesh Srinivasan',
      link: 'https://www.linkedin.com/in/kamalesh-srinivasan-867595225/'
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#1E293B] to-[#0F172A] relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl top-1/4 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl bottom-1/4 right-1/4"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-xl mb-16">
            Let's connect and collaborate.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`bg-[#1E293B] rounded-3xl p-8 hover:bg-[#2D3748] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#6366F1]/30 group ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-[#6366F1] mb-4 flex justify-center group-hover:text-[#F59E0B] transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          <div
            className={`mt-16 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="text-gray-500 text-sm">
              © 2025 KAMALESH SRINIVASAN. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
