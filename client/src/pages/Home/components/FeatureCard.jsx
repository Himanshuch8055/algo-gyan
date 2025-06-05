import { FaArrowRight } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description, gradient }) => {
  return (
    <div className="h-full">
      <div className="relative h-full rounded-2xl p-6 md:p-8 bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-sm">
          <Icon className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" />
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 pt-4">
          <a href="#" className="inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors">
            Learn more
            <FaArrowRight className="ml-1 w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
