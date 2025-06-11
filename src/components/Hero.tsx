import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Shield, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 1.2,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl" />
      </motion.div>

      <motion.div
        style={{ y: y2, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-60 right-10 w-16 h-16 bg-purple-400/20 rounded-full blur-lg" />
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-cyan-400/20 rounded-full blur-lg" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Floating Icons */}
        <div className="absolute -top-20 left-0 right-0 flex justify-center space-x-16">
          <motion.div
            variants={iconVariants}
            className="relative"
            whileHover={{ scale: 1.2, rotate: 15 }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
          </motion.div>

          <motion.div
            variants={iconVariants}
            className="relative"
            whileHover={{ scale: 1.2, rotate: -15 }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center">
              <Globe className="w-8 h-8 text-cyan-400" />
            </div>
          </motion.div>

          <motion.div
            variants={iconVariants}
            className="relative"
            whileHover={{ scale: 1.2, rotate: 10 }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              y: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 },
              rotate: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-pink-400" />
            </div>
          </motion.div>
        </div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Building
          </span>
          <br />
          <span className="text-white">Peace &</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Justice
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Empowering communities worldwide through innovative solutions for
          <span className="text-purple-400 font-semibold"> sustainable development</span>,
          <span className="text-cyan-400 font-semibold"> social justice</span>, and
          <span className="text-pink-400 font-semibold"> lasting peace</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            />
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Explore Impact</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              initial={false}
              whileHover={{ opacity: 0.1 }}
            />
          </motion.button>

          <motion.button
            className="group relative px-8 py-4 border border-white/20 rounded-xl font-semibold text-white backdrop-blur-sm overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Learn More</span>
          </motion.button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          {[
            { label: "Communities Reached", value: "1,000+", color: "purple" },
            { label: "Projects Completed", value: "250+", color: "cyan" },
            { label: "Lives Impacted", value: "10,000+", color: "pink" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-xl backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300" />
              <div className="relative p-6 text-center">
                <motion.div
                  className={`text-3xl font-bold mb-2 bg-gradient-to-r ${
                    stat.color === 'purple' ? 'from-purple-400 to-purple-300' :
                    stat.color === 'cyan' ? 'from-cyan-400 to-cyan-300' :
                    'from-pink-400 to-pink-300'
                  } bg-clip-text text-transparent`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2 + index * 0.2, type: "spring", damping: 15 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Interactive Mouse Follow Effect */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
        }}
        animate={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <div className="w-48 h-48 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-xl" />
      </motion.div>
    </section>
  );
};

export default Hero; 