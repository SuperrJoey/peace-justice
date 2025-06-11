import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, BookOpen, Award, Briefcase } from 'lucide-react';

interface AboutUsProps {
  darkMode: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ darkMode }) => {
  const teamMembers = [
    {
      name: "Eshan Bhandary",
      regNo: "230953004",
      email: "eshan.mitmpl2023@learner.manipal.edu",
      bio: "CCE A",
    },
    {
      name: "Ahmad Faraz Vaid",
      regNo: "230953532",
      email: "faraz.mitmpl2023@learner.manipal.edu",
      bio: "CCE A",
    },
    {
      name: "Ishan Saha",
      regNo: "230953224",
      email: "ishan2.mitmpl2023@learner.manipal.edu",
      bio: "CCE A",
    },
    {
      name: "Amrit Kumar",
      regNo: "220953650",
      email: "amrit.mitmpl2022@learner.manipal.edu",
      bio: "CCE A",
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Users className={`w-16 h-16 mx-auto ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
          <h1 className={`text-4xl font-bold mt-4 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>About Our Team</h1>
          <div className={`mt-6 p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
            <p className="text-lg">
              We are a dedicated group of students from Manipal Institute of Technology working together to promote SDG 16: 
              Peace, Justice, and Strong Institutions. Our team brings diverse skills and perspectives to raise awareness 
              and drive action toward building more peaceful, just, and inclusive societies.
            </p>
          </div>
        </motion.div>

        {/* Our Mission */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className="flex items-center mb-4">
            <BookOpen className={`w-6 h-6 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p>
            Our mission is to educate and engage our campus community and beyond about the critical importance of 
            SDG 16 in creating a sustainable future. We believe that peace, justice, and effective institutions 
            are foundational elements for achieving all other development goals. Through our educational platform, 
            we aim to inspire action and promote solutions that contribute to more peaceful and inclusive societies.
          </p>
        </motion.div>

        {/* Team Members */}
        <div>
          <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold ${darkMode ? 'bg-blue-600' : 'bg-blue-700'} text-white`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {member.regNo}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start mt-1 mb-3">
                      <Mail className={`w-4 h-4 mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                      <a 
                        href={`mailto:${member.email}`} 
                        className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-700 hover:text-blue-600'}`}
                      >
                        {member.email}
                      </a>
                    </div>
                    <p className="mb-3 text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}
        >
          <div className="flex items-center mb-4">
            <Award className={`w-6 h-6 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
            <h2 className="text-2xl font-bold">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              { value: "Inclusion", description: "We believe in creating spaces where everyone's voice matters." },
              { value: "Transparency", description: "We are committed to openness and accountability in all our work." },
              { value: "Collaboration", description: "We foster partnerships to achieve greater impact together." },
              { value: "Innovation", description: "We seek creative solutions to complex social challenges." },
              { value: "Integrity", description: "We hold ourselves to the highest ethical standards." },
              { value: "Empowerment", description: "We aim to equip others with knowledge and tools for change." }
            ].map((item, idx) => (
              <div key={idx} className={`p-4 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <h3 className="font-bold mb-2">{item.value}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Get In Touch */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
            Get In Touch
          </h2>
          <p className="mb-6">
            Interested in learning more about our work or collaborating with us? We'd love to hear from you!
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:sdg16team@learner.manipal.edu" 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'
              }`}
            >
              Contact Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutUs;