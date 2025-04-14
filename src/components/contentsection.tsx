import React, { useState } from 'react'; // Added React import
import { motion } from 'framer-motion';
// Removed unused BarChart2, Share2 imports
import { Scale, ChevronDown, ChevronUp, Globe, Link, AlertTriangle, Lock, Users, Heart, BookOpen, CheckCircle, XCircle } from 'lucide-react';

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

interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  readTime: string;
  link: string;
  mcqs: MCQ[];
}

interface MCQ {
  question: string;
  options: string[];
  correctAnswer: number;
}

const ContentSection: React.FC<ContentSectionProps> = ({ activeTab, darkMode }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  // Note: Consider making this state structure dynamic based on mcqs.length
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: { [key: number]: number | null } }>({
    'article1': { 0: null, 1: null, 2: null, 3: null },
    'article2': { 0: null, 1: null, 2: null, 3: null }
  });
  const [showResults, setShowResults] = useState<{ [key: string]: boolean }>({
    'article1': false,
    'article2': false
  });

  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  const selectAnswer = (articleId: string, questionIndex: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [articleId]: {
        ...prev[articleId],
        [questionIndex]: optionIndex
      }
    }));
  };

  const checkAnswers = (articleId: string) => {
    setShowResults(prev => ({
      ...prev,
      [articleId]: true
    }));
  };

  const resetQuiz = (articleId: string) => {
    // Note: Consider making this reset dynamic based on mcqs.length
    setSelectedAnswers(prev => ({
      ...prev,
      [articleId]: { 0: null, 1: null, 2: null, 3: null }
    }));
    setShowResults(prev => ({
      ...prev,
      [articleId]: false
    }));
  };

  const calculateScore = (articleId: string) => {
    return articles.find(a => a.id === articleId)?.mcqs.reduce((score, mcq, index) => {
      return score + (selectedAnswers[articleId][index] === mcq.correctAnswer ? 1 : 0);
    }, 0) || 0;
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
    { sdg: "SDG 10: Reduced Inequalities", description: "Inclusive institutions ensure equal access to resources and opportunities for all." }, // Corrected SDG typo
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

  const articles: Article[] = [
    {
      id: 'article1',
      title: "The Role of Technology in Promoting Judicial Transparency",
      description: "Explore how digital tools are transforming justice systems worldwide, making legal processes more accessible and transparent for citizens.",
      // Note: Consider using a public placeholder or actual image URL
      imageUrl: "https://as2.ftcdn.net/v2/jpg/05/72/05/73/1000_F_572057368_JQA6LNMVl6FJHIvMvnzaaH0urUlduRTb.jpg",
      readTime: "8 min read",
      link: "https://www.un.org/sustainabledevelopment/peace-justice/",
      mcqs: [
        {
          question: "Which technology has been most effective in reducing court backlogs?",
          options: ["Blockchain records", "Case management systems", "AI-powered legal research", "Virtual reality courtrooms"],
          correctAnswer: 1
        },
        {
          question: "What percentage of countries have implemented digital court systems?",
          options: ["Less than 20%", "About 35%", "Over 50%", "Nearly 75%"],
          correctAnswer: 2
        },
        {
          question: "Which challenge is most significant when implementing judicial technology in developing nations?",
          options: ["Language barriers", "Infrastructure limitations", "Cultural resistance", "Cost of maintenance"],
          correctAnswer: 1
        },
        {
          question: "According to the article, successful digital transformation of justice systems requires:",
          options: ["Complete replacement of traditional systems", "Focus primarily on high-profile cases", "Stakeholder engagement and training", "Privatization of court services"],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 'article2',
      title: "Building Peaceful Communities Through Inclusive Governance",
      description: "Learn how participatory decision-making at local levels helps reduce conflict and build social cohesion across diverse communities.",
      // Note: Consider using a public placeholder or actual image URL
      imageUrl: "https://th.bing.com/th/id/OIP.Y2E5YtixXtxR6Tsewkq3CAHaE7?cb=iwp&rs=1&pid=ImgDetMain",
      readTime: "12 min read",
      link: "https://sdgs.un.org/goals/goal16",
      mcqs: [
        {
          question: "What is the primary benefit of inclusive governance according to the article?",
          options: ["Faster decision-making", "Reduced implementation costs", "Increased community ownership", "Simplified administration"],
          correctAnswer: 2
        },
        {
          question: "Which group is often most marginalized in local governance processes?",
          options: ["Ethnic minorities", "Youth under 25", "Women in rural areas", "People with disabilities"],
          correctAnswer: 3 // Assuming index 3 corresponds to 'People with disabilities' based on original code structure
        },
        {
          question: "The article suggests which approach is most effective for conflict reduction?",
          options: ["Strong central leadership", "Multi-stakeholder dialogue", "Expert-driven policy solutions", "International intervention"],
          correctAnswer: 1
        },
        {
          question: "Communities with inclusive governance models experienced what percentage reduction in violent incidents?",
          options: ["15-20%", "30-35%", "45-60%", "70-85%"],
          correctAnswer: 2
        }
      ]
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

  // --- Start of JSX ---
  return (
    <main className="container mx-auto py-8 px-4">
      <motion.section
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Overview Tab */}
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
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <AlertTriangle className={`w-10 h-10 mx-auto ${darkMode ? 'text-red-400' : 'text-red-600'}`} />, title: "Conflict & Violence", stat: "70+ million", desc: "people displaced globally due to conflict" },
                { icon: <Lock className={`w-10 h-10 mx-auto ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />, title: "Justice Access", stat: "5 billion", desc: "people lack meaningful access to justice" },
                { icon: <Users className={`w-10 h-10 mx-auto ${darkMode ? 'text-green-400' : 'text-green-600'}`} />, title: "Corruption", stat: "$3.6 trillion", desc: "lost annually due to corruption worldwide" }
              ].map((item, idx) => (
                <motion.div key={idx} custom={idx} variants={cardVariants} initial="hidden" animate="visible" className={`p-6 rounded-lg shadow-md text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
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
                The goal encourages participation, transparency, and the rule of law to strengthen governance and build a peaceful future for all. Without peace, justice, and inclusion, achieving other sustainable development goals becomes nearly impossible.
              </p>
            </div>
          </div>
        )}

        {/* Targets Tab */}
        {activeTab === 'targets' && (
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Key SDG 16 Targets</h2>
            <ul className="space-y-4">
              {[
                { title: 'Reduce Violence', description: 'Significantly reduce all forms of violence and related death rates everywhere.', icon: <AlertTriangle className="w-6 h-6" /> },
                { title: 'Protect Children', description: 'End abuse, exploitation, trafficking and all forms of violence against and torture of children.', icon: <Users className="w-6 h-6" /> },
                { title: 'Promote Rule of Law', description: 'Promote the rule of law at the national and international levels and ensure equal access to justice for all.', icon: <Scale className="w-6 h-6" /> },
                { title: 'Reduce Corruption', description: 'Substantially reduce corruption and bribery in all their forms.', icon: <Lock className="w-6 h-6" /> },
                { title: 'Effective Institutions', description: 'Develop effective, accountable and transparent institutions at all levels.', icon: <Globe className="w-6 h-6" /> },
                { title: 'Inclusive Decision-Making', description: 'Ensure responsive, inclusive, participatory and representative decision-making at all levels.', icon: <Users className="w-6 h-6" /> },
                { title: 'Global Governance', description: 'Broaden and strengthen the participation of developing countries in the institutions of global governance.', icon: <Globe className="w-6 h-6" /> }
              ].map((target, idx) => (
                <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className={`p-4 border-l-4 shadow-md flex items-start ${darkMode ? 'bg-gray-800 border-blue-500' : 'bg-blue-50 border-blue-700'}`}>
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

        {/* Explore Tab */}
        {activeTab === 'explore' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <Globe className={`w-16 h-16 mx-auto ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
              <h2 className={`text-3xl font-bold mt-3 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Global Impact</h2>
              <p className="mt-2 max-w-2xl mx-auto">Explore how SDG 16 is transforming societies and institutions worldwide</p>
            </div>
            {/* Impact Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {impactCards.map((card, idx) => (
                <motion.div key={idx} custom={idx} variants={cardVariants} initial="hidden" animate="visible" className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">{card.title}</h3>
                  <p className="text-center">{card.description}</p>
                </motion.div>
              ))}
            </div>
            {/* Regional Progress Table */}
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
                      <tr key={idx} className={idx % 2 === 0 ? (darkMode ? 'bg-gray-900' : 'bg-blue-50') : (darkMode ? 'bg-gray-800' : 'bg-white')}>
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
            {/* Success/Challenges */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">Success Stories</h3>
                <ul className="space-y-3">
                  {/* Success stories list items */}
                  <li className="flex items-start"><div className={`mr-2 mt-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>•</div><p><strong>Colombia:</strong> Peace agreement implementation reducing violence by 40% in former conflict zones</p></li>
                  <li className="flex items-start"><div className={`mr-2 mt-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>•</div><p><strong>Rwanda:</strong> Reforms leading to 80% public trust in judicial institutions</p></li>
                  <li className="flex items-start"><div className={`mr-2 mt-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>•</div><p><strong>Indonesia:</strong> Anti-corruption initiatives recovering $1.2B in misappropriated funds</p></li>
                </ul>
              </div>
              <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">Challenges Ahead</h3>
                <ul className="space-y-3">
                  {/* Challenges list items */}
                  <li className="flex items-start"><div className={`mr-2 mt-1 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>•</div><p>35% of world population lives in countries with declining rule of law scores</p></li>
                  <li className="flex items-start"><div className={`mr-2 mt-1 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>•</div><p>Armed conflicts have increased 60% in the last decade</p></li>
                  <li className="flex items-start"><div className={`mr-2 mt-1 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>•</div><p>Only 31% of refugees have access to legal representation</p></li>
                </ul>
              </div>
            </div>
            {/* SDG Connections */}
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

        {/* Learn Tab */}
        {activeTab === 'learn' && (
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center mb-8">
              <BookOpen className={`w-16 h-16 mx-auto ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
              <h2 className={`text-3xl font-bold mt-3 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Learn About SDG 16</h2>
              <p className="mt-2 max-w-2xl mx-auto">Explore articles and test your knowledge on peace, justice, and strong institutions</p>
            </div>
            {/* Articles */}
            {articles.map((article) => (
              <div key={article.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
                {/* Article Content */}
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>{article.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                        {article.readTime}
                      </span>
                    </div>
                    <p className="mb-4">{article.description}</p>
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center px-4 py-2 rounded-md font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'}`}>
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Article
                    </a>
                  </div>
                </div>
                {/* MCQ Section */}
                <div className={`p-6 mt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h4 className="text-xl font-semibold mb-4">Test Your Knowledge</h4>
                  <div className="space-y-6">
                    {article.mcqs.map((mcq, qIdx) => (
                      <div key={qIdx} className="space-y-3">
                        <p className="font-medium">{qIdx + 1}. {mcq.question}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {mcq.options.map((option, oIdx) => (
                            // Note: Consider simplifying this className logic
                            <button
                              key={oIdx}
                              onClick={() => !showResults[article.id] && selectAnswer(article.id, qIdx, oIdx)}
                              className={`p-3 rounded-md text-left transition-all ${selectedAnswers[article.id]?.[qIdx] === oIdx ? (darkMode ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white') : (darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200')} ${showResults[article.id] && (oIdx === mcq.correctAnswer ? (darkMode ? 'ring-2 ring-green-500' : 'ring-2 ring-green-500') : (selectedAnswers[article.id]?.[qIdx] === oIdx ? (darkMode ? 'ring-2 ring-red-500' : 'ring-2 ring-red-500') : ''))}`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{option}</span>
                                {showResults[article.id] && (
                                  oIdx === mcq.correctAnswer ? (<CheckCircle className="w-5 h-5 text-green-500" />) : (selectedAnswers[article.id]?.[qIdx] === oIdx && (<XCircle className="w-5 h-5 text-red-500" />))
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Quiz Controls/Results */}
                  <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
                    {!showResults[article.id] ? (
                      <button onClick={() => checkAnswers(article.id)} className={`px-6 py-3 rounded-lg font-semibold transition-all ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'}`} disabled={!Object.values(selectedAnswers[article.id] || {}).every(val => val !== null)}>
                        Submit Answers
                      </button>
                    ) : (
                      <div className="flex flex-col space-y-2 items-center md:items-start">
                        <div className={`text-lg font-medium ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                          Your Score: {calculateScore(article.id)}/{article.mcqs.length}
                        </div>
                        <button onClick={() => resetQuiz(article.id)} className={`px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>
                          Try Again
                        </button>
                      </div>
                    )}
                    {showResults[article.id] && (
                      <div className={`p-4 rounded-lg ${calculateScore(article.id) === article.mcqs.length ? (darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800') : (darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800')}`}>
                        {calculateScore(article.id) === article.mcqs.length ? 'Perfect score! You have a great understanding of this topic.' : 'Great attempt! Review the answers to learn more about this important topic.'}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Get Involved Tab */}
        {activeTab === 'getInvolved' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <Heart className={`w-16 h-16 mx-auto ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
              <h2 className={`text-3xl font-bold mt-3 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Get Involved</h2>
              <p className="mt-2 max-w-2xl mx-auto">Ways you can contribute to promoting peace, justice, and strong institutions</p>
            </div>
            {/* Actions/Initiatives */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Individual Actions */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">Individual Actions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /><span>Stay informed about human rights and justice issues in your community</span></li>
                  <li className="flex items-start"><CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /><span>Vote in elections and participate in democratic processes</span></li>
                  <li className="flex items-start"><CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /><span>Report corruption or rights violations to appropriate authorities</span></li>
                  <li className="flex items-start"><CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /><span>Volunteer with legal aid organizations helping vulnerable populations</span></li>
                  <li className="flex items-start"><CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /><span>Practice inclusive communication and conflict resolution</span></li>
                </ul>
              </motion.div>
              {/* Community Initiatives */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-xl font-bold mb-4">Community Initiatives</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /><span>Organize awareness campaigns about social justice issues</span></li>
                  <li className="flex items-start"><CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /><span>Support community policing and neighborhood safety programs</span></li>
                  <li className="flex items-start"><CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /><span>Create platforms for youth engagement in local governance</span></li>
                  <li className="flex items-start"><CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /><span>Partner with schools to educate on peace and conflict resolution</span></li>
                  <li className="flex items-start"><CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /><span>Advocate for transparent local government processes</span></li>
                </ul>
              </motion.div>
            </div>
            {/* Organizations */}
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
              <h3 className="text-xl font-bold mb-4">Organizations to Support</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: "Transparency International", description: "Works to combat global corruption and promotes transparency", website: "https://www.transparency.org" },
                  { name: "International Justice Mission", description: "Protects the poor from violence by rescuing victims and helping authorities", website: "https://www.ijm.org" },
                  { name: "Peace Direct", description: "Supports local peacebuilders in conflict areas around the world", website: "https://www.peacedirect.org" },
                  { name: "Legal Aid Society", description: "Provides free legal services to low-income individuals", website: "https://www.legal-aid.org" }
                ].map((org, idx) => (
                  <div key={idx} className={`p-4 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                    <h4 className="font-semibold">{org.name}</h4>
                    <p className="mt-1 mb-2 text-sm">{org.description}</p>
                    <a href={org.website} target="_blank" rel="noopener noreferrer" className={`text-sm inline-flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-700'} hover:underline`}>
                      <Globe className="w-4 h-4 mr-1" /> Visit Website
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* Newsletter Signup */}
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-4">Join Our Network</h3>
              <p className="mb-6">Sign up to receive updates about SDG 16 initiatives and opportunities to get involved.</p>
              <div className="max-w-md mx-auto">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" id="email" className={`w-full p-3 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-blue-500`} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium mb-1">Areas of Interest</label>
                    <select id="interests" className={`w-full p-3 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-blue-500`}>
                      <option>Access to Justice</option>
                      <option>Anti-corruption</option>
                      <option>Peace Building</option>
                      <option>Institutional Reform</option>
                      <option>Human Rights</option>
                    </select>
                  </div>
                  <button className={`w-full py-3 rounded-md font-medium transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'}`}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Frequently Asked Questions</h2>
              <p className="mt-2">Find answers to common questions about SDG 16</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
                  <button onClick={() => toggleFaq(idx)} className={`w-full p-4 flex justify-between items-center text-left rounded-lg transition-all ${expandedFaq === idx ? (darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-800') : (darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200')}`}>
                    <span className="font-medium">{faq.question}</span>
                    {expandedFaq === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {expandedFaq === idx && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={`p-4 rounded-b-lg mt-1 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.section>
    </main>
  );
};

export default ContentSection;