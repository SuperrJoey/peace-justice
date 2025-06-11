import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@harmonynow.org",
      color: "purple"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      color: "cyan"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Peace Street, Global City",
      color: "pink"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

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

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-500 to-purple-600",
      cyan: "from-cyan-500 to-cyan-600",
      pink: "from-pink-500 to-pink-600"
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Get in</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to make a difference? We'd love to hear from you. 
            Let's collaborate to build a more peaceful and just world.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-8"
            >
              Let's Connect
            </motion.h3>

            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-purple-500/30 transition-all duration-300" />
                <div className="relative p-6 flex items-center space-x-4">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(item.color)} rounded-xl flex items-center justify-center`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="mt-12 p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <h4 className="text-xl font-bold text-white mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border border-white/10" />
              <div className="relative p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                        focusedField === 'name' ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/10'
                      }`} />
                      <div className="relative flex items-center">
                        <User className="absolute left-4 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your Name"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                        />
                      </div>
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                        focusedField === 'email' ? 'border-cyan-500/50 bg-cyan-500/5' : 'border-white/10'
                      }`} />
                      <div className="relative flex items-center">
                        <Mail className="absolute left-4 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your Email"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                        />
                      </div>
                    </motion.div>

                    {/* Subject Field */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                        focusedField === 'subject' ? 'border-pink-500/50 bg-pink-500/5' : 'border-white/10'
                      }`} />
                      <div className="relative flex items-center">
                        <MessageSquare className="absolute left-4 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Subject"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                        />
                      </div>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                        focusedField === 'message' ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/10'
                      }`} />
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your Message"
                          rows={5}
                          required
                          className="w-full p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none"
                        />
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </span>
                    </motion.button>
                  </form>
                ) : (
                  /* Success Message */
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: 1 }}
                      className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 