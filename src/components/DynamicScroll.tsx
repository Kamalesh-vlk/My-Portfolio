import { useState, useEffect, useRef } from 'react';
import { Code,  Brain,  Palette, Wrench, Database, Cloud, Zap, ExternalLink, BrainCog, Bot, Component } from 'lucide-react';
import Modal from './Modal';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

interface Publication {
  id: number;
  title: string;
  summary: string;
  abstract: string;
  date: string;
  link: string;
  journal?: string;
}

const skills: Skill[] = [
  { name: 'React', icon: <Code size={24} />, category: 'Frontend' },
  { name: 'Next.js', icon: <Code size={24} />, category: 'Frontend' },
  { name: 'TypeScript', icon: <Code size={24} />, category: 'Frontend' },
  { name: 'HTML', icon: <Code size={24} />, category: 'Frontend' },
  { name: 'Python', icon: <Zap size={24} />, category: 'Programming & Backend' },
  { name: 'Node.js', icon: <Zap size={24} />, category: 'Programming & Backend' },
  { name: "Java", icon: <Zap size={24} />, category: 'Programming & Backend' },
  { name: "Flask", icon: <Zap size={24} />, category: 'Programming & Backend' },
  { name: 'Computer Vision', icon: <Bot size={24} />, category: 'Field of AI & ML' },
  { name: 'Natural Language Processing', icon: <Bot size={24} />, category: 'Field of AI & ML' },
  { name: 'Data Visualization', icon: <Bot size={24} />, category: 'Field of AI & ML' },
  { name: 'LangChain', icon: <Brain size={24} />, category: 'AI Frameworks' },
  { name: 'LangGraph', icon: <Brain size={24} />, category: 'AI Frameworks' },
  { name: 'CrewAI', icon: <Brain size={24} />, category: 'AI Frameworks' },
  { name: 'RAG', icon: <Brain size={24} />, category: 'AI Frameworks' },
  { name: 'Google ADK', icon: <Brain size={24} />, category: 'AI Frameworks' },
  { name: 'Microsoft Agent Framework', icon: <Brain size={24} />, category: 'AI Frameworks' },
  { name: 'Numpy', icon: <BrainCog size={24} />, category: 'ML Libraries' },
  { name: 'Pandas', icon: <BrainCog size={24} />, category: 'ML Libraries' },
  { name: 'Scikit-learn', icon: <BrainCog size={24} />, category: 'ML Libraries' },
  { name: 'Tensorflow', icon: <BrainCog size={24} />, category: 'ML Libraries' },
  { name: 'Matplotlib', icon: <BrainCog size={24} />, category: 'ML Libraries' },
  { name: 'Seaborn', icon: <BrainCog size={24} />, category: 'ML Libraries' },
  { name: 'Git', icon: <Wrench size={24} />, category: 'Tools' },
  { name: 'Microsoft Copilot Studio', icon: <Wrench size={24} />, category: 'Tools' },
  { name: 'Microsoft Azure AI Foundry', icon: <Wrench size={24} />, category: 'Tools' },
  { name: 'PowerBI', icon: <Wrench size={24} />, category: 'Tools' },
  { name: 'Tailwind CSS', icon: <Component size={24} />, category: 'Design' },
  { name: 'Bootstrap', icon: <Component size={24} />, category: 'Design' },
  { name: 'Streamlit', icon: <Component size={24} />, category: 'Design' },
  { name: 'Figma', icon: <Palette size={24} />, category: 'Design Tool' },
  { name: 'Adobe Photoshop', icon: <Palette size={24} />, category: 'Design Tool' },
  { name: 'Adobe Premiere Pro', icon: <Palette size={24} />, category: 'Design Tool' },
  { name: 'Docker', icon: <Cloud size={24} />, category: 'DevOps' },
  { name: 'AWS', icon: <Cloud size={24} />, category: 'DevOps' },
];

const publications: Publication[] = [
  {
    id: 1,
    title: 'Automated Helmet and Number Plate Detection Using YOLOv9: Enhancing Road Safety Compliance',
    summary: 'An intelligent system using the YOLOv9x model for automated helmet violation detection and license plate recognition to enhance road safety enforcement.',
    abstract: 'This paper presents an automated system for detecting motorcycle helmet violations and recognizing license plates using the YOLOv9 deep learning model. The YOLOv9x variant achieved outstanding results, with 98.77% accuracy, 95.11% recall, and 96.23% mAP, outperforming models like Faster R-CNN, R-FCN, and SSD. By integrating helmet detection and license plate recognition, the system offers an effective and scalable solution for enhancing road safety enforcement.',
    date: 'June 2025',
    link: 'https://ieeexplore.ieee.org/document/11039355/keywords#keywords',
    journal: 'IEEE'
  },
  {
    id: 2,
    title: 'Enhancing Operational Efficiency and Security in Multi-Sectioned Businesses with Edge AI through Real-Time Analytics',
    summary: 'An IoT and machine learning–based smart monitoring system that provides real-time insights into customer behavior and operational efficiency through edge-based video analytics.',
    abstract: 'This paper presents an IoT and machine learning–powered intelligent monitoring system designed to enhance business operations and customer experience. By utilizing CCTV cameras and edge devices, the system captures real-time activity, analyzes visitor movement, and generates heat maps to optimize resource allocation. Localized processing ensures privacy while enabling real-time anomaly detection, offering businesses a comprehensive, data-driven approach to improve efficiency and security.',
    date: 'January 2025',
    link: 'https://ieeexplore.ieee.org/document/10846180',
    journal: 'IEEE'
  },
];

export default function DynamicScroll() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl font-bold text-white mb-4 text-center">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-xl text-center mb-12">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
              <div
                key={category}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-[#F59E0B] font-bold text-lg mb-4">{category}</h3>
                <div className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-[#1E293B] rounded-2xl hover:bg-[#2D3748] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366F1]/20"
                    >
                      <div className="text-[#6366F1]">{skill.icon}</div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 text-center">
            Publications
          </h2>
          <p className="text-gray-400 text-xl text-center mb-12">
            Research papers and technical articles
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <div
                key={publication.id}
                className={`bg-gradient-to-br from-[#1E293B] to-[#334155] rounded-3xl p-6 hover:shadow-2xl hover:shadow-[#F59E0B]/20 transition-all duration-500 cursor-pointer group ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
                onClick={() => setSelectedPublication(publication)}
              >
                <div className="text-[#F59E0B] text-sm font-medium mb-2">
                  {publication.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6366F1] transition-colors">
                  {publication.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {publication.summary}
                </p>
                {publication.journal && (
                  <p className="text-sm text-[#A5B4FC] mb-4">
                    {publication.journal}
                  </p>
                )}
                <button className="text-[#F59E0B] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedPublication}
        onClose={() => setSelectedPublication(null)}
      >
        {selectedPublication && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#F59E0B] font-medium">
                {selectedPublication.date}
              </span>
              {selectedPublication.journal && (
                <span className="text-[#A5B4FC] text-sm">
                  {selectedPublication.journal}
                </span>
              )}
            </div>

            <h3 className="text-4xl font-bold text-white mb-6">
              {selectedPublication.title}
            </h3>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-3">Abstract</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                {selectedPublication.abstract}
              </p>
            </div>

            <a
              href={selectedPublication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366F1] text-white rounded-xl font-medium hover:bg-[#5558E3] transition-colors"
            >
              <ExternalLink size={20} />
              View Publication
            </a>
          </div>
        )}
      </Modal>
    </section>
  );
}
