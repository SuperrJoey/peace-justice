import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8 text-center">
      <div className="space-y-2">
        <div className="flex justify-center items-center space-x-2">
          <Heart className="w-5 h-5" />
          <span className="font-bold">SDG 16 Initiative</span>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} Peace and Justice Project. All rights reserved.
        </div>
        <div className="flex justify-center items-center space-x-1">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-400" />
          <span>for a fairer world</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
