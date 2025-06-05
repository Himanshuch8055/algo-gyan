import { motion } from 'framer-motion';
import { SiLeetcode, SiCodechef, SiCodeforces, SiHackerrank, SiHackerearth } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import PlatformIntegration from '../components/PlatformIntegration';

const platforms = [
  {
    icon: SiLeetcode,
    name: 'LeetCode',
    description: 'Master algorithms with our curated LeetCode problems'
  },
  {
    icon: SiCodechef,
    name: 'CodeChef',
    description: 'Tackle competitive programming challenges'
  },
  {
    icon: SiCodeforces,
    name: 'Codeforces',
    description: 'Solve problems from programming competitions'
  },
  {
    icon: SiHackerrank,
    name: 'HackerRank',
    description: 'Practice coding challenges and prepare for interviews'
  },
  {
    icon: FaCode,
    name: 'AtCoder',
    description: 'Participate in programming contests'
  },
  {
    icon: SiHackerearth,
    name: 'HackerEarth',
    description: 'Solve problems and compete with developers'
  }
];

const PlatformsSection = () => (
  <section className="relative py-24 overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-amber-50/50 dark:to-amber-900/5" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 text-sm font-medium mb-4 border border-amber-100 dark:border-amber-900/50">
          <svg className="w-3.5 h-3.5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
          </svg>
          Platform Integrations
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Practice on <span className="bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">Your Favorite</span> Platform
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Seamlessly integrate with top coding platforms to track your progress and solve problems in one place.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {platforms.map((platform, index) => (
          <PlatformIntegration 
            key={index}
            icon={platform.icon}
            name={platform.name}
            description={platform.description}
            delay={index % 3}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 text-center"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          More platform integrations coming soon...
        </p>
      </motion.div>
    </div>
  </section>
);

export default PlatformsSection;
