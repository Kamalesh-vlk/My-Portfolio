import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import DynamicScroll from './components/DynamicScroll';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <DynamicScroll />
      <Contact />
    </div>
  );
}

export default App;
