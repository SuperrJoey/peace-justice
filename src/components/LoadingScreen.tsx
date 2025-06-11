import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { 
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2 
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.8 
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-cyan-900/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(3, 7, 18, 1), rgba(6, 182, 212, 0.1))",
              "linear-gradient(225deg, rgba(6, 182, 212, 0.1), rgba(3, 7, 18, 1), rgba(139, 92, 246, 0.1))",
              "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(3, 7, 18, 1), rgba(6, 182, 212, 0.1))"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo/Icon */}
        <motion.div
          variants={logoVariants}
          className="relative"
        >
          <motion.div
            className="w-16 h-16 border-2 border-purple-500 rounded-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 w-20 h-20 border border-cyan-500/30 rounded-full -m-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Brand Text */}
        <motion.div
          variants={textVariants}
          className="text-center space-y-2"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Harmony Now
          </h1>
          <p className="text-gray-400 text-sm">Building Peace & Justice</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          variants={textVariants}
          className="w-64 space-y-2"
        >
          <div className="flex justify-between text-xs text-gray-400">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          variants={textVariants}
          className="flex space-x-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-purple-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 