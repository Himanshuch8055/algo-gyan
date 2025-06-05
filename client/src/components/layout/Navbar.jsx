import { Link, useLocation } from 'react-router-dom';
import { FaCode, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Problems', path: '/problems' },
  { name: 'Leaderboard', path: '/leaderboard' },
  { name: 'Multiplayer', path: '/multiplayer' },
  { name: 'Community', path: '/discuss' },
];

export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Base classes for navbar
  const navBaseClasses = 'w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b backdrop-blur-sm';
  const scrolledClasses = scrolled ? 'py-2' : 'py-4';

  // Theme-specific classes
  const lightNavClasses = 'bg-white/90 border-gray-200 text-gray-800';
  const darkNavClasses = 'bg-gray-900/90 border-gray-800 text-white';

  // Combine classes based on theme
  const navClasses = `${navBaseClasses} ${scrolledClasses} ${
    theme === 'dark' ? darkNavClasses : lightNavClasses
  }`; 
  
  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = (path) => {
    const baseClasses = 'px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200';
    const isActive = location.pathname.startsWith(path);
    
    if (isActive) {
      return theme === 'dark'
        ? `${baseClasses} text-amber-400 bg-gray-800/50`
        : `${baseClasses} text-amber-600 bg-amber-50`;
    }
    
    return theme === 'dark'
      ? `${baseClasses} text-gray-300 hover:text-white hover:bg-gray-800/50`
      : `${baseClasses} text-gray-700 hover:text-gray-900 hover:bg-gray-100`;
  };

  return (
    <header className={navClasses}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group" 
              aria-label="Home"
            >
              <div className="w-9 h-9 bg-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-700 transition-colors duration-200">
                <FaCode className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                AlgoGyan
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={linkClasses(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <FaSun className="w-5 h-5 text-amber-400" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* Auth Buttons */}
            <Link
              to="/login"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors duration-200"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
          }`}
        >
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.path}`}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? theme === 'dark'
                      ? 'text-amber-400 bg-gray-800/50'
                      : 'text-amber-600 bg-amber-50'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm font-medium">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? (
                    <FaSun className="w-5 h-5 text-amber-400" />
                  ) : (
                    <FaMoon className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              </div>
              <div className="mt-2 space-y-2">
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-center border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors duration-200"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium text-center text-white bg-amber-600 hover:bg-amber-700 transition-colors duration-200"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
