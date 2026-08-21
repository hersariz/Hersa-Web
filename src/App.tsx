import { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIWorkflow from './components/AIWorkflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  // Resolve the theme before the first render. Reading it in an effect instead
  // let the "write theme to storage" effect below clobber a saved choice with
  // the initial default on every load.
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update document class when theme changes
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save theme choice to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Drive the progress bar straight through the DOM inside rAF. Holding it in
  // state re-rendered the whole page on every scroll event.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = progressRef.current;
      if (!el) return;
      const total =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      el.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Include required font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-inter bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      {/* Scroll Progress Indicator */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-0.5 bg-accent-600 dark:bg-accent-400 z-50 origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
      
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      
      <Element name="home" className="element">
        <Hero />
      </Element>
      
      <Element name="about" className="element">
        <About />
      </Element>
      
      <Element name="experience" className="element">
        <Experience />
      </Element>

      <Element name="skills" className="element">
        <Skills />
      </Element>
      
      <Element name="projects" className="element">
        <Projects />
      </Element>
      
      <Element name="ai-workflow" className="element">
        <AIWorkflow />
      </Element>
      
      <Element name="contact" className="element">
        <Contact />
      </Element>
      
      <Footer />
    </div>
  );
}

export default App;
