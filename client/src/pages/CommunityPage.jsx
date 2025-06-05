import { useState, useEffect } from 'react';
import { FaUsers, FaComments, FaQuestionCircle, FaSearch, FaPlus, FaThumbsUp, FaBookmark, FaShare, FaEllipsisH, FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('newest');

  // Mock data - in a real app, you would fetch this from an API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const mockData = [
          {
            id: 1,
            title: "Best way to implement Dijkstra's algorithm?",
            content: "I'm working on a project that requires finding the shortest path in a weighted graph. What's the most efficient way to implement Dijkstra's algorithm in JavaScript?",
            author: "Alice Johnson",
            date: "2 hours ago",
            likes: 42,
            comments: 18,
            tags: ["algorithms", "javascript", "graph"],
            bookmarked: false,
            liked: false
          },
          {
            id: 2,
            title: "Dynamic Programming Resources",
            content: "Can anyone recommend good resources for learning dynamic programming? I'm struggling with the concept and need some practice problems.",
            author: "Bob Smith",
            date: "5 hours ago",
            likes: 35,
            comments: 12,
            tags: ["learning", "dynamic-programming", "resources"],
            bookmarked: true,
            liked: false
          },
          {
            id: 3,
            title: "Weekly Coding Challenge #42",
            content: "This week's challenge is to implement a trie data structure with insert, search, and startsWith methods. Who can share their solutions?",
            author: "Charlie Brown",
            date: "1 day ago",
            likes: 78,
            comments: 34,
            tags: ["challenge", "data-structures", "weekly"],
            bookmarked: false,
            liked: true
          },
          {
            id: 4,
            title: "How to prepare for FAANG interviews?",
            content: "I have an upcoming interview with a FAANG company. What are the most important topics to focus on and what resources would you recommend?",
            author: "Diana Prince",
            date: "2 days ago",
            likes: 120,
            comments: 45,
            tags: ["interviews", "career", "preparation"],
            bookmarked: true,
            liked: true
          }
        ];
        setPosts(mockData);
        setIsLoading(false);
      }, 800);
    };

    fetchData();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOption === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === 'popular') {
      return b.likes - a.likes;
    } else if (sortOption === 'comments') {
      return b.comments - a.comments;
    }
    return 0;
  });

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1, liked: true } : post
    ));
  };

  const handleBookmark = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post
    ));
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-14">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-64 border-r border-gray-200 dark:border-gray-700 p-6">
              <div className="mb-8">
                <button className="w-full flex items-center justify-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors">
                  <FaPlus className="mr-2" />
                  New Post
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-3 px-2">
                  Community
                </h3>
                <ul className="space-y-1">
                  {[
                    { id: 'discussions', label: 'Discussions', icon: FaComments },
                    { id: 'qna', label: 'Q&A', icon: FaQuestionCircle },
                    { id: 'events', label: 'Events', icon: FaUsers },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center px-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === item.id
                            ? 'bg-amber-50 dark:bg-gray-700 text-amber-600 dark:text-amber-400'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <item.icon className="mr-3" />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-3 px-2">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['algorithms', 'javascript', 'interviews', 'python', 'data-structures', 'react'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <div className="relative w-full sm:w-96">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 w-full sm:w-auto"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="newest">Newest</option>
                    <option value="popular">Most Liked</option>
                    <option value="comments">Most Comments</option>
                  </select>
                </div>
              </div>

              {isLoading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="animate-pulse p-4 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                        <div className="flex-1 space-y-2 py-1">
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-16"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-12"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {sortedPosts.map((post) => (
                    <div
                      key={post.id}
                      className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-xs hover:shadow-sm transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-purple-500 flex items-center justify-center text-white">
                            <FaUserCircle className="text-xl" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{post.author}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{post.date}</div>
                          </div>
                        </div>
                        <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200">
                          <FaEllipsisH />
                        </button>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.content}</p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-xs rounded-full text-gray-600 dark:text-gray-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                        <div className="flex items-center space-x-6">
                          <button
                            onClick={() => handleLike(post.id)}
                            className={`flex items-center space-x-1 text-gray-500 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                              post.liked ? 'text-amber-600 dark:text-amber-400' : ''
                            }`}
                          >
                            <FaThumbsUp />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                            <FaComments />
                            <span>{post.comments}</span>
                          </button>
                          <button
                            onClick={() => handleBookmark(post.id)}
                            className={`text-gray-500 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${
                              post.bookmarked ? 'text-amber-600 dark:text-amber-400' : ''
                            }`}
                          >
                            <FaBookmark />
                          </button>
                        </div>
                        <button className="text-gray-500 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                          <FaShare />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
