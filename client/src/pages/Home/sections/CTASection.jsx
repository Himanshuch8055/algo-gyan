import { Link } from 'react-router-dom';
import { FaArrowRight, FaRocket, FaChartLine, FaCode, FaUsers, FaStar, FaLightbulb } from 'react-icons/fa';

const stats = [
  { value: '10,000+', label: 'Active Learners', icon: <FaUsers className="text-amber-500" /> },
  { value: '500+', label: 'Coding Problems', icon: <FaCode className="text-cyan-500" /> },
  { value: '50+', label: 'Learning Paths', icon: <FaChartLine className="text-purple-500" /> },
  { value: '24/7', label: 'Support', icon: <FaLightbulb className="text-amber-500" /> }
];

const testimonials = [
  {
    quote: "AlgoGyan completely transformed my approach to coding interviews. The structured learning paths helped me land my dream job!",
    author: "John Doe",
    position: "Software Engineer @ Google",
    initials: "JD"
  },
  {
    quote: "The platform's interactive coding environment made learning algorithms enjoyable. My problem-solving speed improved significantly!",
    author: "Sarah Johnson",
    position: "Frontend Developer @ Microsoft",
    initials: "SJ"
  }
];

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-full mb-6">
            <div className="px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 text-sm font-medium border border-amber-200 dark:border-amber-700">
              <div className="flex items-center">
                <FaRocket className="w-3.5 h-3.5 mr-2" />
                <span>Start Your Journey Today</span>
                <FaStar className="w-3 h-3 ml-2 text-amber-400" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Ready to <span className="bg-gradient-to-r from-amber-600 to-cyan-500 bg-clip-text text-transparent">elevate</span> your
            <br />
            coding career?
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Join our community of passionate developers and take your problem-solving skills to the next level.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-cyan-500 text-white font-medium rounded-xl hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Start Learning Free
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>

            <Link
              to="/problems"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
            >
              <FaCode className="mr-2" />
              Browse Problems
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-2xl">{stat.icon}</div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Learners Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-amber-600 dark:text-amber-400 text-4xl">"</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-cyan-500 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
