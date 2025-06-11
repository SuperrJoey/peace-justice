import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/footer';
import LoadingScreen from './components/LoadingScreen';
import BackgroundElements from './components/BackgroundElements';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    // Loading screen simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden relative">
      {/* Animated Background Elements */}
      <BackgroundElements scrollY={scrollY} />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={activeSection}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative z-10"
        >
          {activeSection === 'home' && <Hero />}
          {activeSection === 'features' && <Features />}
          {activeSection === 'about' && <About />}
          {activeSection === 'contact' && <Contact />}
        </motion.main>
      </AnimatePresence>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;