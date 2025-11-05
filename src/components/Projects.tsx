import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Modal from './Modal';

interface Project {
  id: number;
  title: string;
  description: string;
  // image removed
  tags: string[];
  fullDescription: string;
  role: string;
  features: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Enhancing Operational Efficiency and Security with Edge AI',
    description:
      'Edge-AI system for multi-section businesses: real-time heatmaps, people-counting, and shoplifting/anomaly detection via on-device inference.',
    tags: ['Edge AI', 'Computer Vision', 'YOLO', 'FAISS', 'Raspberry Pi'],
    fullDescription:
      'An IoT + Edge AI platform that analyzes CCTV streams on edge devices to produce heatmaps, people counts, anomaly/shoplifting alerts and analytics dashboards — all with local processing for low-latency and privacy-preserving operation. Designed for multi-storey/multi-section retail environments to optimize staffing, layout and security.',
    role: 'ML Engineer / Edge Developer',
    features: [
      'Real-time heatmap generation for footfall analytics',
      'People counting & tracking across sections',
      'Shoplifting and anomaly detection with alerting',
      'Local edge inference to protect privacy and reduce latency',
      'Dashboard visualizations for operational decisions'
    ],
    github: 'https://github.com/Kamalesh-vlk/Enhancing-Operational-Efficiency-and-Security-in-Multi-Sectioned-Businesses-with-Edge-AI',
  },
  {
    id: 2,
    title: 'AI-Powered Investment Portfolio Advisor',
    description:
      'Multi-agent investment advisor using Cohere LLMs + CrewAI agents to generate market analysis and portfolio recommendations.',
    tags: ['Cohere', 'CrewAI', 'Streamlit', 'Python', 'Finance'],
    fullDescription:
      'A multi-agent system where one agent performs structured market analysis and another generates risk-aware portfolio allocations. Users pick exchange, asset types and risk tolerance; the system returns a data-backed Markdown report plus a suggested portfolio with rationale and risk breakdown.',
    role: 'Lead ML Integration Engineer',
    features: [
      'Multi-agent orchestration (market analysis + portfolio generator)',
      'Configurable asset universe (stocks, ETFs, crypto, bonds, mutual funds)',
      'Risk tolerance-driven allocation (low / moderate / high)',
      'Streamlit UI with interactive inputs and downloadable report',
      'Uses Cohere LLMs for explainable recommendation text'
    ],
    github: 'https://github.com/Kamalesh-vlk/Investment-Portfolio-Advisor-AI-AGENT',
  },
  {
    id: 3,
    title: 'AI-Powered Book Recommendation System',
    description:
      'Personalized book recommendations powered by Cohere LLMs and CrewAI to produce explainable suggestions based on reading history and taste.',
    tags: ['Cohere', 'CrewAI', 'Streamlit', 'NLP', 'Python'],
    fullDescription:
      'An explainable multi-agent recommendation system that uses user preferences and prior reads to produce ranked book suggestions with reasoning. Agents handle preference parsing, candidate generation and re-ranking to deliver diverse and relevant recommendations.',
    role: 'NLP Engineer / Full Stack',
    features: [
      'Personalized recommendations using multi-agent LLM pipeline',
      'Explanation for each suggestion (why it fits the user)',
      'Support for favourite genres, styles and themes',
      'Streamlit UI for quick user testing and feedback',
      'Multi-language / multi-source candidate aggregation'
    ],
    github: 'https://github.com/Kamalesh-vlk/Book-Recommendation-System-AI-Agent',
  },
  {
    id: 4,
    title: 'Bone Fracture Detection',
    description:
      'Two-step medical imaging pipeline: ResNet50 for bone-type classification and specialized CNNs for fracture detection on X-rays.',
    tags: ['ResNet50', 'CNN', 'TensorFlow', 'Keras', 'Medical Imaging'],
    fullDescription:
      'A clinical-aid system that first classifies the bone type (elbow, hand, shoulder) then runs a bone-specific fracture detector. Trained and validated on ~20k X-ray images (MURA) with data augmentation, the system produces predictions and visual explanations (Grad-CAM) to assist clinicians.',
    role: 'Model Developer',
    features: [
      'Two-stage pipeline: bone type classification then fracture detection',
      'Data augmentation and class-balanced training',
      'Model explainability via Grad-CAM heatmaps',
      'Validation on held-out test sets and performance metrics reporting',
      'Simple UI integration for image upload and result display'
    ],
    github: 'https://github.com/Kamalesh-vlk/Bone-Fracture-Detection-System',
  },
  {
    id: 5,
    title: 'OD and Leave Request System',
    description:
      'Web application for students and department admins to submit, review and approve OD / leave requests with role-based interfaces.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    fullDescription:
      'A lightweight web portal providing user and admin dashboards to submit, approve and track OD and leave requests. Includes notification flows, persistent request history and admin tools for batch approvals and reporting.',
    role: 'Full Stack Developer',
    features: [
      'User & Admin role-based dashboards',
      'Request lifecycle: submit → review → approve/reject',
      'SQL-backed persistence and audit logs',
      'Responsive UI for desktop and mobile',
      'Exportable reports for administrative use'
    ],
    github: 'https://github.com/Kamalesh-vlk/OD-and-Leave-Request-System',
  },
  {
    id: 6,
    title: 'Pattern Recognition in Images',
    description:
      'CNN-based image classification and pattern recognition system for textures and object categories with improved accuracy.',
    tags: ['CNN', 'TensorFlow', 'OpenCV', 'Python'],
    fullDescription:
      'A pattern recognition solution using convolutional neural networks to detect and classify visual patterns. Developed for applications such as industrial quality control and image analytics, with modular preprocessing and model components for quick retraining on new pattern classes.',
    role: 'ML Researcher',
    features: [
      'CNN-based feature extraction and classification',
      'Preprocessing pipeline with OpenCV for normalization and augmentation',
      'High-accuracy pattern classification with transfer learning support',
      'Modular codebase for easy dataset swapping',
      'Evaluation metrics and confusion-matrix based reporting'
    ],
    github: 'https://github.com/Kamalesh-vlk/Pattern-Recognition-in-Images/tree/main',
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-xl">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-[#1E293B] rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#6366F1]/20 transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image removed — show a compact header instead */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#6366F1] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#6366F1]/20 text-[#A5B4FC] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-[#F59E0B] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Details
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div>
            {/* Image removed from modal — show title / role / content */}
            <h3 className="text-4xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-[#F59E0B] font-medium mb-6">{selectedProject.role}</p>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {selectedProject.fullDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#6366F1]/20 text-[#A5B4FC] rounded-xl font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-3">Key Features</h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  className="px-6 py-3 bg-[#1E293B] border border-gray-600 text-white rounded-xl font-medium hover:bg-[#2D3748] transition-colors flex items-center gap-2"
                >
                  <Github size={20} />
                  View
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  className="px-6 py-3 bg-[#6366F1] text-white rounded-xl font-medium hover:bg-[#5558E3] transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
/*import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Modal from './Modal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  fullDescription: string;
  role: string;
  features: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    fullDescription: 'A comprehensive e-commerce platform featuring real-time inventory tracking, secure payment processing, and an intuitive admin dashboard. Built with modern technologies to ensure scalability and performance.',
    role: 'Full Stack Developer',
    features: [
      'Real-time inventory synchronization',
      'Secure payment processing with Stripe',
      'Advanced product filtering and search',
      'Responsive admin dashboard',
      'Order tracking and management'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'Machine learning powered content creation tool for marketing teams',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    fullDescription: 'An AI-powered content generation platform that helps marketing teams create engaging copy. Leverages GPT models and custom training to match brand voice and style.',
    role: 'Lead Developer',
    features: [
      'AI-powered content suggestions',
      'Brand voice customization',
      'Multi-language support',
      'SEO optimization tools',
      'Collaboration features'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    fullDescription: 'A modern task management system designed for remote teams. Features real-time collaboration, automated workflows, and comprehensive analytics.',
    role: 'Frontend Lead',
    features: [
      'Real-time collaboration',
      'Drag-and-drop task organization',
      'Automated workflow triggers',
      'Team analytics dashboard',
      'Mobile-responsive design'
    ],
    github: '#'
  },
  {
    id: 4,
    title: 'Health Tracking App',
    description: 'Mobile-first health and fitness tracking application',
    image: 'https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    fullDescription: 'A comprehensive health tracking application that helps users monitor fitness goals, nutrition, and wellness metrics. Integrates with popular wearable devices.',
    role: 'Full Stack Developer',
    features: [
      'Activity and nutrition tracking',
      'Wearable device integration',
      'Goal setting and progress tracking',
      'Social sharing features',
      'Personalized recommendations'
    ],
    demo: '#'
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform for business intelligence',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'D3.js', 'GraphQL', 'Redis'],
    fullDescription: 'An enterprise-grade analytics platform providing real-time insights through interactive visualizations. Handles millions of data points with optimized performance.',
    role: 'Senior Developer',
    features: [
      'Real-time data streaming',
      'Interactive charts and graphs',
      'Custom report builder',
      'Export and scheduling',
      'Role-based access control'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 6,
    title: 'Social Media Scheduler',
    description: 'Multi-platform social media content planning and automation tool',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Prisma', 'Supabase', 'Vercel'],
    fullDescription: 'A powerful social media management tool that allows teams to plan, schedule, and analyze content across multiple platforms from a single interface.',
    role: 'Full Stack Developer',
    features: [
      'Multi-platform scheduling',
      'Content calendar view',
      'Analytics and reporting',
      'Team collaboration tools',
      'Media library management'
    ],
    github: '#'
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-xl">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-[#1E293B] rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#6366F1]/20 transition-all duration-500 cursor-pointer ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#6366F1] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#6366F1]/20 text-[#A5B4FC] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-[#F59E0B] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Details
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />

            <h3 className="text-4xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-[#F59E0B] font-medium mb-6">
              {selectedProject.role}
            </p>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {selectedProject.fullDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#6366F1]/20 text-[#A5B4FC] rounded-xl font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-3">Key Features</h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  className="px-6 py-3 bg-[#1E293B] border border-gray-600 text-white rounded-xl font-medium hover:bg-[#2D3748] transition-colors flex items-center gap-2"
                >
                  <Github size={20} />
                  View Code
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  className="px-6 py-3 bg-[#6366F1] text-white rounded-xl font-medium hover:bg-[#5558E3] transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
*/