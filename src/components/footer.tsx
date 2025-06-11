import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-purple-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Mail, href: "#", label: "Email", color: "hover:text-green-400" }
  ];

  const footerLinks = [
    {
      title: "About",
      links: ["Our Mission", "Our Team", "Our Impact", "Careers"]
    },
    {
      title: "Programs",
      links: ["Peace Building", "Justice Initiatives", "Community Development", "Education"]
    },
    {
      title: "Resources",
      links: ["Reports", "Research", "Blog", "Media Kit"]
    },
    {
      title: "Support",
      links: ["Contact Us", "Volunteer", "Donate", "Partner With Us"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  };

  return (
    <footer className="relative bg-gray-950/80 backdrop-blur-xl border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white font-bold text-lg">H</span>
                </motion.div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Harmony Now
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Building bridges between communities, fostering peace, and creating sustainable 
                solutions for a more just and equitable world.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-4 h-4 text-red-400" />
                </motion.div>
                <span>for a better world</span>
              </div>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold text-white">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest updates on our programs and impact stories.
              </p>
              <div className="flex space-x-3">
                <div className="relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 backdrop-blur-sm rounded-xl border border-white/10" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="relative w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Links Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {footerLinks.map((section, index) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <motion.li key={link}>
                      <motion.a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`w-12 h-12 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-400 text-sm">
              © 2024 Harmony Now. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <motion.a href="#" whileHover={{ color: "#ffffff" }} className="hover:text-white transition-colors">
                Privacy Policy
              </motion.a>
              <motion.a href="#" whileHover={{ color: "#ffffff" }} className="hover:text-white transition-colors">
                Terms of Service
              </motion.a>
              <motion.a href="#" whileHover={{ color: "#ffffff" }} className="hover:text-white transition-colors">
                Cookie Policy
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl" />
    </footer>
  );
};

export default Footer;