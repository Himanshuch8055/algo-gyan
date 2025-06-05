import { useState, useEffect } from 'react';
import { FaTrophy, FaMedal, FaUser, FaSearch, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'rank', direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [timeRange, setTimeRange] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - in a real app, you would fetch this from an API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const mockData = [
          { id: 1, name: 'Alice Johnson', rank: 1, score: 9875, problemsSolved: 428, accuracy: 92.5, streak: 35 },
          { id: 2, name: 'Bob Smith', rank: 2, score: 9560, problemsSolved: 412, accuracy: 89.7, streak: 28 },
          { id: 3, name: 'Charlie Brown', rank: 3, score: 9240, problemsSolved: 398, accuracy: 91.2, streak: 42 },
          { id: 4, name: 'Diana Prince', rank: 4, score: 8950, problemsSolved: 385, accuracy: 87.6, streak: 30 },
          { id: 5, name: 'Ethan Hunt', rank: 5, score: 8720, problemsSolved: 372, accuracy: 85.9, streak: 25 },
          { id: 6, name: 'Fiona Green', rank: 6, score: 8450, problemsSolved: 360, accuracy: 88.3, streak: 33 },
          { id: 7, name: 'George Wilson', rank: 7, score: 8120, problemsSolved: 345, accuracy: 84.7, streak: 22 },
          { id: 8, name: 'Hannah Baker', rank: 8, score: 7980, problemsSolved: 330, accuracy: 86.1, streak: 27 },
          { id: 9, name: 'Ian Cooper', rank: 9, score: 7750, problemsSolved: 318, accuracy: 83.4, streak: 20 },
          { id: 10, name: 'Julia Roberts', rank: 10, score: 7520, problemsSolved: 305, accuracy: 87.8, streak: 24 },
        ];
        setUsers(mockData);
        setIsLoading(false);
      }, 800);
    };

    fetchData();
  }, []);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="text-gray-400" />;
    return sortConfig.direction === 'asc' ?
      <FaSortUp className="text-amber-500" /> :
      <FaSortDown className="text-amber-500" />;
  };

  const getMedal = (rank) => {
    if (rank === 1) return <FaTrophy className="text-amber-500 text-xl" />;
    if (rank === 2) return <FaMedal className="text-gray-400 text-lg" />;
    if (rank === 3) return <FaMedal className="text-amber-600 text-lg" />;
    return <span className="text-gray-400">{rank}</span>;
  };

  const getRankColor = (rank) => {
    if (rank === 1) return 'bg-gradient-to-r from-amber-200 to-amber-100';
    if (rank === 2) return 'bg-gradient-to-r from-gray-200 to-gray-100';
    if (rank === 3) return 'bg-gradient-to-r from-amber-200 to-amber-100';
    return '';
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-14">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <select
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 w-full sm:w-auto"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                >
                  <option value="all">All Time</option>
                  <option value="month">This Month</option>
                  <option value="week">This Week</option>
                </select>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-pulse flex space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        <button
                          onClick={() => requestSort('rank')}
                          className="flex items-center gap-1 focus:outline-none"
                        >
                          Rank
                          {getSortIcon('rank')}
                        </button>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        <button
                          onClick={() => requestSort('name')}
                          className="flex items-center gap-1 focus:outline-none"
                        >
                          Name
                          {getSortIcon('name')}
                        </button>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        <button
                          onClick={() => requestSort('score')}
                          className="flex items-center gap-1 focus:outline-none"
                        >
                          Score
                          {getSortIcon('score')}
                        </button>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        <button
                          onClick={() => requestSort('problemsSolved')}
                          className="flex items-center gap-1 focus:outline-none"
                        >
                          Problems Solved
                          {getSortIcon('problemsSolved')}
                        </button>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        <button
                          onClick={() => requestSort('accuracy')}
                          className="flex items-center gap-1 focus:outline-none"
                        >
                          Accuracy
                          {getSortIcon('accuracy')}
                        </button>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        <button
                          onClick={() => requestSort('streak')}
                          className="flex items-center gap-1 focus:outline-none"
                        >
                          Streak
                          {getSortIcon('streak')}
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <td className={`px-6 py-4 whitespace-nowrap ${getRankColor(user.rank)}`}>
                          <div className="flex items-center gap-2">
                            {getMedal(user.rank)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-purple-500 flex items-center justify-center text-white font-medium">
                              <FaUser />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white font-medium">{user.score}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-300">{user.problemsSolved}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-300">{user.accuracy}%</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <div className="text-sm text-gray-500 dark:text-gray-300">{user.streak}</div>
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
