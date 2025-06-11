import { Heart, Mail, Globe, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="font-bold text-xl">SDG 16 Initiative</span>
            </div>
            <p className="text-blue-100">
              Working together to promote peace, justice, and strong institutions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Projects</a></li>
              <li><a href="#" className="hover:text-blue-300">Resources</a></li>
              <li><a href="#" className="hover:text-blue-300">News</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@sdg16initiative.org" className="hover:text-blue-300">amrit.mitmpl2022@learner.manipal.edu</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@sdg16initiative.org" className="hover:text-blue-300">ishan2.mitmpl2023@learner.manipal.edu</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@sdg16initiative.org" className="hover:text-blue-300">faraz.mitmpl2023@learner.manipal.edu</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@sdg16initiative.org" className="hover:text-blue-300">eshan.mitmpl2023@learner.Manipal.edu</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <div className="text-sm">
            © {new Date().getFullYear()} Peace and Justice Project. All rights reserved.
          </div>
          <div className="flex justify-center items-center space-x-1 mt-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for a fairer world</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;