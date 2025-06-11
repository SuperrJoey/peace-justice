import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Award, Users, Globe, ChevronRight, Play } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      description: "Harmony Now was established with a vision to promote peace and justice globally through sustainable development initiatives.",
      milestone: "Organization Founded"
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Expanded operations to 25 countries, establishing local partnerships and community-driven programs.",
      milestone: "25 Countries Reached"
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched digital platforms and virtual programs to maintain impact during global challenges.",
      milestone: "Digital Transformation"
    },
    {
      year: "2023",
      title: "Sustainable Impact",
      description: "Achieved carbon neutrality and implemented comprehensive sustainability measures across all operations.",
      milestone: "Carbon Neutral"
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Continuing to innovate and expand our reach, aiming to impact 1 million lives by 2030.",
      milestone: "1M Lives Goal"
    }
  ];

  const stats = [
    { value: "50+", label: "Countries", icon: Globe },
    { value: "1,000+", label: "Communities", icon: Users },
    { value: "250+", label: "Projects", icon: Award },
    { value: "9", label: "Years", icon: Calendar }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">About</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Harmony Now
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Building bridges between communities, fostering peace, and creating sustainable 
            solutions for a more just and equitable world.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-purple-500/30 transition-all duration-300" />
              <div className="relative p-6 text-center">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", damping: 15 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Our Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 rounded-full" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  onMouseEnter={() => setActiveTimeline(index)}
                  onMouseLeave={() => setActiveTimeline(-1)}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      className={`relative group cursor-pointer ${
                        activeTimeline === index ? 'scale-105' : ''
                      } transition-transform duration-300`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-purple-500/30 transition-all duration-300" />
                      <div className="relative p-6">
                        <div className="text-purple-400 font-bold text-lg mb-2">{item.year}</div>
                        <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                        <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                        <div className="inline-flex items-center space-x-2 text-cyan-400 text-sm font-medium">
                          <Award className="w-4 h-4" />
                          <span>{item.milestone}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 flex items-center justify-center">
                    <motion.div
                      className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                        activeTimeline === index 
                          ? 'bg-purple-500 border-purple-300 scale-125' 
                          : 'bg-gray-800 border-gray-600'
                      }`}
                      whileHover={{ scale: 1.5 }}
                    />
                    {activeTimeline === index && (
                      <motion.div
                        className="absolute w-12 h-12 bg-purple-500/20 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      />
                    )}
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border border-white/10" />
            <div className="relative p-12">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                "To create a world where peace and justice are not aspirations, but realities. 
                Through innovative technology, community engagement, and sustainable practices, 
                we empower individuals and communities to build lasting positive change."
              </p>
              <motion.button
                className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Watch Our Story</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 