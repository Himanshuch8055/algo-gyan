import { FaCode, FaUsers, FaTrophy, FaLaptopCode, FaRocket, FaStar, FaArrowRight } from 'react-icons/fa';
import { FaShieldHalved, FaLightbulb, FaCodeBranch, FaChartLine } from 'react-icons/fa6';
import FeatureCard from '../components/FeatureCard';

const features = [
  {
    icon: FaCode,
    title: 'Interactive Challenges',
    description: 'Solve coding tasks with instant feedback.',
    gradient: 'from-amber-500 to-cyan-400'
  },
  {
    icon: FaChartLine,
    title: 'Progress Tracking',
    description: 'Track growth with stats and insights.',
    gradient: 'from-purple-500 to-indigo-400'
  },
  {
    icon: FaUsers,
    title: 'Community Support',
    description: 'Connect, share, and learn with peers.',
    gradient: 'from-amber-500 to-teal-400'
  },
  {
    icon: FaLaptopCode,
    title: 'Real-world Projects',
    description: 'Build practical, portfolio-ready projects.',
    gradient: 'from-amber-500 to-amber-400'
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-full mb-6">
            <div className="px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 text-sm font-medium border border-amber-200 dark:border-amber-700">
              <FaRocket className="w-3.5 h-3.5 mr-2" />
              <span>Powerful Features</span>
              <FaStar className="w-3 h-3 ml-2 text-amber-400" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need to <span className="bg-gradient-to-r from-amber-600 to-cyan-500 bg-clip-text text-transparent">succeed</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform provides all the tools and resources to master data structures and algorithms efficiently.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-amber-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-amber-100 dark:border-gray-700 shadow-sm">
            <FaLightbulb className="w-5 h-5 mr-3 text-amber-500 dark:text-amber-400" />
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              These features are designed to work together seamlessly, providing you with a comprehensive learning experience.
            </p>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-cyan-500 text-white font-medium rounded-xl hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
            Explore All Features
            <FaArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
