import { Scale, Moon, Sun } from 'lucide-react';

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
    <header className={`p-6 shadow ${darkMode ? 'bg-gray-800 text-white' : 'bg-blue-700 text-white'}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3">
          <Scale className="w-8 h-8" />
          <h1 className="text-xl md:text-2xl font-bold">SDG 16: Peace, Justice & Institutions</h1>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
          {navItems.map(({ key, label }) => (
            <button
              key={key}
              className={`capitalize ${activeTab === key ? 'font-bold border-b-2 border-white' : 'hover:text-blue-200'}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          className="p-2 rounded-full hover:bg-gray-700"
          onClick={toggleDarkMode}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
