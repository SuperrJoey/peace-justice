import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Target, Users, Globe, Shield, Heart, Zap, ArrowRight, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Target,
      title: "SDG 16: Peace & Justice",
      description: "Promoting peaceful and inclusive societies for sustainable development, providing access to justice for all.",
      color: "purple",
      stats: "12 targets",
      highlights: ["Rule of Law", "Inclusive Institutions", "Reduced Violence"]
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Building stronger communities through active participation and collaborative decision-making processes.",
      color: "cyan",
      stats: "1000+ communities",
      highlights: ["Local Leadership", "Youth Programs", "Civic Participation"]
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating sustainable change that transcends borders and connects communities worldwide.",
      color: "pink",
      stats: "50+ countries",
      highlights: ["Cross-border Cooperation", "Knowledge Sharing", "Global Networks"]
    },
    {
      icon: Shield,
      title: "Protection & Security",
      description: "Ensuring safety and security for all individuals while promoting human rights and dignity.",
      color: "green",
      stats: "24/7 support",
      highlights: ["Human Rights", "Conflict Prevention", "Safety Measures"]
    },
    {
      icon: Heart,
      title: "Social Innovation",
      description: "Developing creative solutions to address social challenges and promote inclusive development.",
      color: "orange",
      stats: "250+ projects",
      highlights: ["Tech Solutions", "Social Entrepreneurship", "Innovation Labs"]
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Quick mobilization of resources and expertise to address emerging challenges and crises.",
      color: "blue",
      stats: "72h response",
      highlights: ["Emergency Support", "Crisis Management", "Rapid Deployment"]
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.8,
      },
    },
  };

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        gradient: "from-purple-500 to-purple-600",
        text: "text-purple-400",
        border: "border-purple-500/20",
        glow: "shadow-purple-500/20"
      },
      cyan: {
        gradient: "from-cyan-500 to-cyan-600",
        text: "text-cyan-400",
        border: "border-cyan-500/20",
        glow: "shadow-cyan-500/20"
      },
      pink: {
        gradient: "from-pink-500 to-pink-600",
        text: "text-pink-400",
        border: "border-pink-500/20",
        glow: "shadow-pink-500/20"
      },
      green: {
        gradient: "from-green-500 to-green-600",
        text: "text-green-400",
        border: "border-green-500/20",
        glow: "shadow-green-500/20"
      },
      orange: {
        gradient: "from-orange-500 to-orange-600",
        text: "text-orange-400",
        border: "border-orange-500/20",
        glow: "shadow-orange-500/20"
      },
      blue: {
        gradient: "from-blue-500 to-blue-600",
        text: "text-blue-400",
        border: "border-blue-500/20",
        glow: "shadow-blue-500/20"
      }
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300 text-sm font-medium">Our Features</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Innovative Solutions
            </span>
            <br />
            <span className="text-white">for Global Change</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how our cutting-edge approach combines technology, community engagement, 
            and sustainable practices to create lasting impact worldwide.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border transition-all duration-500 ${
                  isHovered ? `${colorClasses.border} shadow-2xl ${colorClasses.glow}` : 'border-white/10'
                }`} />
                
                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colorClasses.gradient} opacity-0 transition-opacity duration-500`}
                  style={{
                    background: isHovered ? `linear-gradient(45deg, transparent, ${feature.color === 'purple' ? '#8b5cf6' : feature.color === 'cyan' ? '#06b6d4' : '#ec4899'}20, transparent)` : undefined,
                    opacity: isHovered ? 0.1 : 0,
                  }}
                />

                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses.gradient} flex items-center justify-center mb-6 relative overflow-hidden`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", damping: 15 }}
                  >
                    <feature.icon className="w-8 h-8 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Stats Badge */}
                  <motion.div
                    className={`inline-flex items-center space-x-2 ${colorClasses.text} text-sm font-medium mb-4`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-current`} />
                    <span>{feature.stats}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {feature.highlights.map((highlight, i) => (
                      <motion.div
                        key={highlight}
                        className="flex items-center space-x-2 text-sm text-gray-400"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.1 + 0.7 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.text.replace('text-', 'bg-')}`} />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    className={`group/btn flex items-center space-x-2 ${colorClasses.text} hover:text-white font-medium transition-colors duration-300`}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", damping: 25 }}
                  >
                    <span>Learn more</span>
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ type: "spring", damping: 25 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className={`w-3 h-3 rounded-full ${colorClasses.text.replace('text-', 'bg-')} blur-sm`} />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Explore All Features</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 