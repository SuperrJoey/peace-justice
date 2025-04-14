import { motion } from 'framer-motion';
import { Scale, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface ContentSectionProps {
  activeTab: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ activeTab }) => {
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
    }
  ];

  return (
    <main className="container mx-auto py-8 px-4">
      <motion.section
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === 'overview' && (
          <div className="space-y-6 max-w-3xl mx-auto text-center">
            <Scale className="w-16 h-16 mx-auto text-blue-700" />
            <h2 className="text-3xl font-bold text-blue-800">Peace, Justice and Strong Institutions</h2>
            <p>
              SDG 16 advocates for inclusive and peaceful societies, equitable access to justice, and effective, accountable institutions. It’s about ending violence, ensuring justice for all, and upholding human rights.
            </p>
            <p>
              Globally, over 70 million people are displaced due to conflict. Corruption, violence, and weak institutions are significant barriers to development.
            </p>
            <p>
              The goal encourages participation, transparency, and the rule of law to strengthen governance and build a peaceful future for all.
            </p>
          </div>
        )}

        {activeTab === 'targets' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Key SDG 16 Targets</h2>
            <ul className="space-y-4">
              {[
                'Significantly reduce violence and related death rates.',
                'End abuse, exploitation, trafficking and violence against children.',
                'Promote rule of law and access to justice.',
                'Reduce corruption and bribery.',
                'Develop accountable and transparent institutions.',
                'Ensure inclusive decision-making at all levels.',
                'Broaden participation in global governance.'
              ].map((text, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 bg-blue-50 border-l-4 border-blue-700 shadow"
                >
                  {text}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'getInvolved' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 text-center">Get Involved</h2>
            <div>
              <h3 className="text-lg font-semibold">What You Can Do</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Educate yourself and others on justice issues.</li>
                <li>Report corruption or injustice when you see it.</li>
                <li>Volunteer with organizations supporting peace and rights.</li>
                <li>Participate in civic activities like voting or forums.</li>
                <li>Advocate for transparency and fair decision-making.</li>
              </ul>
            </div>
            <form className="bg-blue-50 p-6 rounded shadow space-y-4">
              <h3 className="text-lg font-semibold">Connect with Us</h3>
              <input type="text" placeholder="Your name" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Your email" className="w-full p-2 border rounded" />
              <textarea placeholder="How you want to help..." className="w-full p-2 border rounded h-24"></textarea>
              <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Submit</button>
            </form>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 text-center">FAQs</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full text-left font-semibold text-blue-800"
                  aria-expanded={false}
                  aria-controls={`faq-${index}`}
                >
                  {faq.question}
                  {false ? <ChevronUp /> : <ChevronDown />}
                </button>
                <motion.p
                  id={`faq-${index}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-gray-700"
                >
                  {faq.answer}
                </motion.p>
              </div>
            ))}
          </div>
        )}
      </motion.section>
    </main>
  );
};

export default ContentSection;
