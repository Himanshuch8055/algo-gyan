import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaChartLine, FaCode, FaUserGraduate, FaUsers, FaBook, FaHeadset, FaTrophy } from 'react-icons/fa';

const HeroSection = () => {
  // Reduced animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const stats = [
    { value: '500+', label: 'Coding Problems', icon: <FaCode className="text-amber-500" /> },
    { value: '50+', label: 'Learning Paths', icon: <FaBook className="text-amber-500" /> },
    { value: '24/7', label: 'Support', icon: <FaHeadset className="text-purple-500" /> },
    { value: '10,000+', label: 'Active Users', icon: <FaUsers className="text-cyan-500" /> }
  ];

  const features = [
    {
      title: "500+ Problems",
      description: "Curated problems with detailed solutions and explanations",
      icon: <FaCode className="w-5 h-5 text-amber-500" />,
      color: "blue"
    },
    {
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics",
      icon: <FaChartLine className="w-5 h-5 text-cyan-500" />,
      color: "cyan"
    },
    {
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals",
      icon: <FaUserGraduate className="w-5 h-5 text-purple-500" />,
      color: "purple"
    },
    {
      title: "Interview Prep",
      description: "Practice with real interview questions from top companies",
      icon: <FaTrophy className="w-5 h-5 text-amber-500" />,
      color: "yellow"
    }
  ];

  return (
    <section className="relative overflow-hidden pt-16">
      {/* Simplified background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 text-sm font-medium mb-6 border border-amber-100 dark:border-amber-900/50"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              🚀 The most advanced DSA platform
            </motion.div>

            <motion.h1
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Master <span className="bg-gradient-to-r from-amber-600 to-cyan-500 bg-clip-text text-transparent">Data Structures</span> & <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-amber-600 to-cyan-500 bg-clip-text text-transparent">Algorithms</span> Efficiently
            </motion.h1>

            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Ace your coding interviews with our structured learning paths, 500+ problems, and expert solutions.
              Join thousands of developers who have successfully landed their dream jobs.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Link
                to="/problems"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-amber-600 to-cyan-500 text-white font-medium rounded-xl hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Start Practicing Now
                <FaArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/signup"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
              >
                Get Started Free
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 ${i === 3 ? 'bg-indigo-500 flex items-center justify-center text-white text-xs font-bold' : i === 1 ? 'bg-amber-500' : 'bg-cyan-500'}`}>
                      {i === 3 && '10K+'}
                    </div>
                  ))}
                </div>
                <span className="text-gray-500 dark:text-gray-400">Trusted by 10,000+ developers</span>
              </div>
            </div>
          </div>

          {/* Right content - Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}-50 dark:bg-${feature.color}-900/30 flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-100 dark:border-gray-800 mt-20 rounded-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="px-4 py-3">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-50 dark:bg-gray-700">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
