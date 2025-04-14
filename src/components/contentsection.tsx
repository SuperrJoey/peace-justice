import { motion } from 'framer-motion';
import { Scale, ChevronDown, ChevronUp, Globe, BarChart2, Share2, Link, AlertTriangle, Lock, Users, Heart } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface ContentSectionProps {
  activeTab: string;
  darkMode: boolean;
}

interface ImpactData {
  region: string;
  corruptionIndex: number;
  justiceAccess: number;
  peaceIndex: number;
}

interface ImpactCard {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ activeTab, darkMode }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  const faqs: FAQ[] = [
    {
      question: "What is SDG 16?",
      answer: "SDG 16 promotes peaceful, just, and inclusive societies. It aims to provide access to justice for all and build accountable institutions."
    },
    {
      question: "Why is peace important?",
      answer: "Peace, justice, and strong institutions are foundational for sustainable development and ensuring no one is left behind."
    },
    {
      question: "How can I help?",
      answer: "Engage in community initiatives, raise awareness, promote transparency, and support legal aid organizations."
    },
    {
      question: "How does SDG 16 relate to other goals?",
      answer: "SDG 16 is interconnected with all other SDGs. Without peace, justice, and strong institutions, progress on poverty reduction, education, health, and environmental sustainability is jeopardized."
    },
    {
      question: "What progress has been made on SDG 16?",
      answer: "Progress has been mixed. While some countries have improved access to justice and reduced violence, challenges remain with corruption, human rights violations, and weak institutions in many regions."
    }
  ];

  const impactData: ImpactData[] = [
    { region: "North America", corruptionIndex: 75, justiceAccess: 82, peaceIndex: 78 },
    { region: "Europe", corruptionIndex: 68, justiceAccess: 76, peaceIndex: 80 },
    { region: "Asia Pacific", corruptionIndex: 45, justiceAccess: 53, peaceIndex: 60 },
    { region: "Africa", corruptionIndex: 32, justiceAccess: 40, peaceIndex: 48 },
    { region: "Latin America", corruptionIndex: 43, justiceAccess: 51, peaceIndex: 62 }
  ];

  const sdgConnections = [
    { sdg: "SDG 1: No Poverty", description: "Justice and strong institutions reduce inequality and provide opportunities for economic growth." },
    { sdg: "SDG 4: Quality Education", description: "Peaceful societies enable better access to education for all." },
    { sdg: "SDG 5: Gender Equality", description: "Just institutions promote equal rights and opportunities for women and girls." },
    { sdg: "SDG, Reduced Inequalities", description: "Inclusive institutions ensure equal access to resources and opportunities for all." },
    { sdg: "SDG 17: Partnerships", description: "Strong institutions facilitate effective partnerships for sustainable development." }
  ];

  const impactCards: ImpactCard[] = [
    {
      title: "Reduced Violence",
      icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
      description: "Over 200,000 fewer violent deaths annually in regions implementing SDG 16 initiatives."
    },
    {
      title: "Justice Access",
      icon: <Lock className="w-8 h-8 text-green-500" />,
      description: "Legal aid programs have helped 18 million people access justice systems in developing nations."
    },
    {
      title: "Transparency",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "Countries adopting transparency laws have seen corruption perception indices improve by 22% on average."
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
    <main className="container mx-auto py-8 px-4">
      <motion.section
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === 'overview' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Scale className={`w-20 h-20 mx-auto ${darkMode ? 'text-blue-500' : 'text-blue-700'}`} />
              <h2 className={`text-4xl font-bold mt-4 mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                Peace, Justice and Strong Institutions
              </h2>
              
              <div className={`p-6 rounded-lg shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                <p className="text-lg mb-4">
                  SDG 16 advocates for inclusive and peaceful societies, equitable access to justice, and effective, accountable institutions. 
                  It's about ending violence, ensuring justice for all, and upholding human rights.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <AlertTriangle className={`w-10 h-10 mx-auto ${darkMode ? 'text-red-400' : 'text-red-600'}`} />,
                  title: "Conflict & Violence",
                  stat: "70+ million",
                  desc: "people displaced globally due to conflict"
                },
                {
                  icon: <Lock className={`w-10 h-10 mx-auto ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />,
                  title: "Justice Access",
                  stat: "5 billion",
                  desc: "people lack meaningful access to justice"
                },
                {
                  icon: <Users className={`w-10 h-10 mx-auto ${darkMode ? 'text-green-400' : 'text-green-600'}`} />,
                  title: "Corruption",
                  stat: "$3.6 trillion",
                  desc: "lost annually due to corruption worldwide"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className={`p-6 rounded-lg shadow-md text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold mt-3 mb-2">{item.title}</h3>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>{item.stat}</p>
                  <p className="mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
              <h3 className="text-xl font-bold mb-3">Why This Matters</h3>
              <p>
                The goal encourages participation, transparency, and the rule of law to strengthen governance and build a peaceful future for all. 
                Without peace, justice, and inclusion, achieving other sustainable development goals becomes nearly impossible.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'targets' && (
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Key SDG 16 Targets</h2>
            <ul className="space-y-4">
              {[
                {
                  title: 'Reduce Violence',
                  description: 'Significantly reduce all forms of violence and related death rates everywhere.',
                  icon: <AlertTriangle className="w-6 h-6" />
                },
                {
                  title: 'Protect Children',
                  description: 'End abuse, exploitation, trafficking and all forms of violence against and torture of children.',
                  icon: <Users className="w-6 h-6" />
                },
                {
                  title: 'Promote Rule of Law',
                  description: 'Promote the rule of law at the national and international levels and ensure equal access to justice for all.',
                  icon: <Scale className="w-6 h-6" />
                },
                {
                  title: 'Reduce Corruption',
                  description: 'Substantially reduce corruption and bribery in all their forms.',
                  icon: <Lock className="w-6 h-6" />
                },
                {
                  title: 'Effective Institutions',
                  description: 'Develop effective, accountable and transparent institutions at all levels.',
                  icon: <Globe className="w-6 h-6" />
                },
                {
                  title: 'Inclusive Decision-Making',
                  description: 'Ensure responsive, inclusive, participatory and representative decision-making at all levels.',
                  icon: <Users className="w-6 h-6" />
                },
                {
                  title: 'Global Governance',
                  description: 'Broaden and strengthen the participation of developing countries in the institutions of global governance.',
                  icon: <Globe className="w-6 h-6" />
                }
              ].map((target, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-4 border-l-4 shadow-md flex items-start ${
                    darkMode 
                      ? 'bg-gray-800 border-blue-500' 
                      : 'bg-blue-50 border-blue-700'
                  }`}
                >
                  <div className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                    {target.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{target.title}</h3>
                    <p>{target.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'explore' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <Globe className={`w-16 h-16 mx-auto ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
              <h2 className={`text-3xl font-bold mt-3 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Global Impact</h2>
              <p className="mt-2 max-w-2xl mx-auto">Explore how SDG 16 is transforming societies and institutions worldwide</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {impactCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div className="flex justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">{card.title}</h3>
                  <p className="text-center">{card.description}</p>
                </motion.div>
              ))}
            </div>

            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
              <h3 className="text-xl font-bold mb-4">Regional Progress Indicators</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className={darkMode ? 'border-b border-gray-700' : 'border-b-2 border-blue-200'}>
                      <th className="text-left py-3 px-4">Region</th>
                      <th className="text-center py-3 px-4">Corruption Index</th>
                      <th className="text-center py-3 px-4">Justice Access</th>
                      <th className="text-center py-3 px-4">Peace Index</th>
                    </tr>
                  </thead>
                  <tbody>
                    {impactData.map((data, idx) => (
                      <tr 
                        key={idx} 
                        className={idx % 2 === 0 
                          ? darkMode ? 'bg-gray-900' : 'bg-blue-50' 
                          : darkMode ? 'bg-gray-800' : 'bg-white'
                        }
                      >
                        <td className="py-3 px-4 font-medium">{data.region}</td>
                        <td className="text-center py-3 px-4">{data.corruptionIndex}/100</td>
                        <td className="text-center py-3 px-4">{data.justiceAccess}/100</td>
                        <td className="text-center py-3 px-4">{data.peaceIndex}/100</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">Success Stories</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className={`mr-2 mt-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>•</div>
                    <p><strong>Colombia:</strong> Peace agreement implementation reducing violence by 40% in former conflict zones</p>
                  </li>
                  <li className="flex items-start">
                    <div className={`mr-2 mt-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>•</div>
                    <p><strong>Rwanda:</strong> Reforms leading to 80% public trust in judicial institutions</p>
                  </li>
                  <li className="flex items-start">
                    <div className={`mr-2 mt-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>•</div>
                    <p><strong>Indonesia:</strong> Anti-corruption initiatives recovering $1.2B in misappropriated funds</p>
                  </li>
                </ul>
              </div>
              
              <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">Challenges Ahead</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className={`mr-2 mt-1 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>•</div>
                    <p>35% of world population lives in countries with declining rule of law scores</p>
                  </li>
                  <li className="flex items-start">
                    <div className={`mr-2 mt-1 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>•</div>
                    <p>Armed conflicts have increased 60% in the last decade</p>
                  </li>
                  <li className="flex items-start">
                    <div className={`mr-2 mt-1 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>•</div>
                    <p>Only 31% of refugees have access to legal representation</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
              <h3 className="text-xl font-bold mb-4">SDG 16 Connections to Other Goals</h3>
              <div className="space-y-4">
                {sdgConnections.map((connection, idx) => (
                  <div key={idx} className="flex items-start">
                    <Link className={`flex-shrink-0 mr-3 mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
                    <div>
                      <h4 className="font-semibold">{connection.sdg}</h4>
                      <p>{connection.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'getInvolved' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Get Involved</h2>
            
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
              <h3 className="text-xl font-semibold mb-4">What You Can Do</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Individual Actions</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Educate yourself and others on justice issues</li>
                    <li>Report corruption or injustice when you see it</li>
                    <li>Volunteer with organizations supporting peace and rights</li>
                    <li>Participate in civic activities like voting or forums</li>
                    <li>Advocate for transparency and fair decision-making</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Community Initiatives</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Start neighborhood conflict resolution programs</li>
                    <li>Support local governance transparency projects</li>
                    <li>Create safe spaces for marginalized community members</li>
                    <li>Organize community dialogues on justice and peace</li>
                    <li>Partner with legal aid organizations for community workshops</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Volunteer",
                  icon: <Users className={`w-10 h-10 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />,
                  description: "Join local and international organizations working for peace and justice"
                },
                {
                  title: "Advocate",
                  icon: <Share2 className={`w-10 h-10 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />,
                  description: "Raise awareness about SDG 16 issues through social media and community outreach"
                },
                {
                  title: "Donate",
                  icon: <Heart className={`w-10 h-10 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />,
                  description: "Support organizations providing legal aid and peace-building programs"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className={`p-6 rounded-lg shadow-md text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div className="flex justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <form className={`p-6 rounded-lg shadow-lg space-y-4 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
              <h3 className="text-xl font-semibold">Connect with Us</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-blue-200'}`} 
                />
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-blue-200'}`} 
                />
              </div>
              <select className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-blue-200'}`}>
                <option value="">How would you like to help?</option>
                <option value="volunteer">I want to volunteer</option>
                <option value="donate">I want to donate</option>
                <option value="advocate">I want to advocate</option>
                <option value="other">Other</option>
              </select>
              <textarea 
                placeholder="Your message..." 
                className={`w-full p-3 border rounded-lg h-32 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-blue-200'}`}
              ></textarea>
              <button className={`px-6 py-3 rounded-lg font-semibold ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-700 hover:bg-blue-800'} text-white`}>
                Submit
              </button>
            </form>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className={`text-3xl font-bold text-center mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-4`}
              >
                <button
                  className={`flex justify-between items-center w-full text-left font-semibold p-3 rounded-t-lg ${
                    expandedFaq === index 
                      ? (darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-800')
                      : ''
                  }`}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={expandedFaq === index}
                  aria-controls={`faq-${index}`}
                >
                  {faq.question}
                  {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedFaq === index && (
                  <motion.div
                    id={`faq-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} rounded-b-lg`}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        )}
      </motion.section>
    </main>
  );
};

export default ContentSection;