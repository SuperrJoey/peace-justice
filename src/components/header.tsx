import { Scale, Moon, Sun, Heart } from 'lucide-react';

interface NavItem {
  key: string;
  label: string;
}

interface HeaderProps {
  navItems: NavItem[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ navItems, activeTab, setActiveTab, darkMode, toggleDarkMode }) => {
  return (
    <header className={`p-6 shadow-lg sticky top-0 z-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-700 text-white'}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-full">
            <Scale className={`w-8 h-8 ${darkMode ? 'text-gray-800' : 'text-blue-700'}`} />
          </div>
          <h1 className="text-xl md:text-2xl font-bold">SDG 16: Peace, Justice & Institutions</h1>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-5">
          {navItems.map(({ key, label }) => (
            <button
              key={key}
              className={`capitalize transition-all duration-200 px-3 py-1 rounded-md ${
                activeTab === key 
                  ? (darkMode ? 'bg-blue-600 font-bold' : 'bg-white text-blue-700 font-bold') 
                  : 'hover:bg-blue-600'
              }`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          className={`p-3 rounded-full transition-all duration-200 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-600 hover:bg-blue-500'}`}
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}

export default Header;