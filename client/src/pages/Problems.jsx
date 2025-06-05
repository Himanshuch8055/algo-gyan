import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaCheck, FaLock, FaCheckCircle, FaRegClock, FaHeart, FaBookmark } from 'react-icons/fa';

export default function Problems() {
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const problemsPerPage = 10;

  // Mock data - in a real app, this would come from an API
  const problems = [
    { id: 1, title: 'Two Sum', difficulty: 'easy', tags: ['Array', 'Hash Table'], solved: true, successRate: 75, favorites: 120 },
    { id: 2, title: 'Add Two Numbers', difficulty: 'medium', tags: ['Linked List', 'Math'], solved: false, successRate: 60, favorites: 95 },
    { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'medium', tags: ['Hash Table', 'Sliding Window'], solved: false, successRate: 55, favorites: 150 },
    { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 'hard', tags: ['Array', 'Binary Search'], solved: false, successRate: 40, favorites: 80 },
    { id: 5, title: 'Longest Palindromic Substring', difficulty: 'medium', tags: ['String', 'DP'], solved: true, successRate: 65, favorites: 110 },
    // Add more problems as needed
  ];

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        problem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty === difficultyFilter;
    const matchesStatus = statusFilter === 'all' || (statusFilter === 'solved' && problem.solved) || (statusFilter === 'unsolved' && !problem.solved);
    return matchesSearch && matchesDifficulty && matchesStatus;
  });

  // Get current problems
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0 text-gray-900 dark:text-white">Problems</h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:min-w-[300px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search problems..."
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <select
                  className="appearance-none bg-gray-800 border border-gray-700 rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                >
                  <option value="all">All Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <FaFilter className="text-gray-400" />
                </div>
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-gray-800 border border-gray-700 rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="solved">Solved</option>
                  <option value="unsolved">Unsolved</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <FaFilter className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Tags
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Success Rate
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center">
                      <FaRegClock className="mr-1.5 text-gray-400" />
                      <span>Time to Solve</span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {currentProblems.length > 0 ? (
                  currentProblems.map((problem) => (
                    <tr key={problem.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {problem.solved ? (
                          <FaCheckCircle className="text-amber-500 text-xl" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          to={`/problems/${problem.id}`}
                          className="text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 font-medium transition-colors"
                        >
                          {problem.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          problem.difficulty === 'easy' ? 'bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-500/30' :
                          problem.difficulty === 'medium' ? 'bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-500/30' :
                          'bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-500/30'
                        }`}>
                          {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {problem.tags.map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: `${problem.successRate}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-500">{problem.successRate}%</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {problem.difficulty === 'easy' ? '15-30 min' :
                         problem.difficulty === 'medium' ? '30-45 min' : '45-60 min'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button className="text-gray-400 hover:text-amber-500">
                            <FaHeart />
                          </button>
                          <button className="text-gray-400 hover:text-amber-500">
                            <FaBookmark />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                      No problems found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav className="inline-flex rounded-md shadow">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: Math.ceil(filteredProblems.length / problemsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 border-t border-b border-gray-300 bg-white text-sm font-medium ${
                  currentPage === i + 1
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(filteredProblems.length / problemsPerPage)}
              className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
