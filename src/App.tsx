import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/header';
import ContentSection from './components/contentsection';
import Footer from './components/footer';

const SDGPeaceAndJustice: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { key: 'overview', label: 'Overview' },
    { key: 'targets', label: 'Targets' },
    { key: 'explore', label: 'Explore Impact' },
    { key: 'learn', label: 'Learn' },
    { key: 'getInvolved', label: 'Get Involved' },
    { key: 'faq', label: 'FAQs' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} font-sans transition-all`}>
      <Header navItems={navItems} activeTab={activeTab} setActiveTab={setActiveTab} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ContentSection activeTab={activeTab} darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default SDGPeaceAndJustice;