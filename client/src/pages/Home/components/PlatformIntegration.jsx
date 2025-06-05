import { motion } from 'framer-motion';

const platformColors = {
  'LeetCode': 'from-amber-500 to-amber-500',
  'CodeChef': 'from-gray-800 to-amber-600',
  'Codeforces': 'from-amber-500 to-amber-700',
  'HackerRank': 'from-emerald-500 to-amber-600',
  'AtCoder': 'from-gray-700 to-gray-900',
  'HackerEarth': 'from-amber-500 to-cyan-500'
};

const PlatformIntegration = ({ icon: Icon, name }) => {
  const gradient = platformColors[name] || 'from-amber-500 to-cyan-500';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
        hover: { duration: 0.3 }
      }}
      className="group relative h-full"
    >
      <div className="absolute inset-0.5 bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-800/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/10 dark:group-hover:shadow-amber-900/20 group-hover:-translate-y-1 flex flex-col items-center text-center">
        <div className={`w-16 h-16 rounded-2xl mb-5 flex items-center justify-center bg-gradient-to-br ${gradient} shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-amber-600 dark:group-hover:text-amber-400">
          {name}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Coming soon
        </p>
        <div className="mt-4 w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-amber-500 to-cyan-500 rounded-full"
            initial={{ width: '0%' }}
            whileInView={{ width: ['0%', '100%'] }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PlatformIntegration;
