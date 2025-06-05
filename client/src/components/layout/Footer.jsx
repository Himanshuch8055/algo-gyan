import { Link } from 'react-router-dom';
import {
  FaCode, FaGithub, FaTwitter, FaLinkedin, FaYoutube, FaDiscord,
  FaEnvelope, FaPhoneAlt, FaRocket, FaLightbulb, FaTrophy,
  FaUsers, FaBook, FaQuestionCircle, FaShieldAlt, FaNewspaper
} from 'react-icons/fa';
import {
  SiLeetcode, SiCodechef, SiCodeforces, SiHackerrank,
  SiGeeksforgeeks, SiStackoverflow
} from 'react-icons/si';

const FooterLink = ({ to, children, icon: Icon }) => (
  <li>
    <Link
      to={to}
      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      <span>{children}</span>
    </Link>
  </li>
);

const SocialIcon = ({ href, icon: Icon, label, colorClass = '' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-9 h-9 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors ${colorClass}`}
    aria-label={label}
  >
    <Icon className="w-4 h-4" />
  </a>
);

const NewsletterForm = () => {
  return (
    <div className="mb-8">
      <h3 className="text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center">
        <FaNewspaper className="mr-2 text-amber-500 dark:text-amber-400" />
        Newsletter
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        Subscribe for updates and coding challenges.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-grow px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
        <button
          className="px-6 py-2 bg-amber-600 dark:bg-amber-700 hover:bg-amber-700 dark:hover:bg-amber-600 rounded-lg text-white font-medium transition-colors"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/problems", text: "Problems", icon: FaCode },
    { to: "/leaderboard", text: "Leaderboard", icon: FaTrophy },
    { to: "/multiplayer", text: "Multiplayer", icon: FaUsers },
    { to: "/discuss", text: "Community", icon: FaDiscord },
    { to: "/learning-paths", text: "Learning Paths", icon: FaBook }
  ];

  const resources = [
    { to: "/blog", text: "Blog", icon: FaNewspaper },
    { to: "/tutorials", text: "Tutorials", icon: FaYoutube },
    { to: "/cheatsheets", text: "Cheatsheets", icon: FaCode },
    { to: "/interview-prep", text: "Interview Prep", icon: FaShieldAlt },
    { to: "/faq", text: "FAQ", icon: FaQuestionCircle }
  ];

  const codingPlatforms = [
    { href: "https://leetcode.com", icon: SiLeetcode, label: "LeetCode", colorClass: "hover:text-amber-500" },
    { href: "https://codechef.com", icon: SiCodechef, label: "CodeChef", colorClass: "hover:text-gray-600" },
    { href: "https://codeforces.com", icon: SiCodeforces, label: "Codeforces", colorClass: "hover:text-amber-500" },
    { href: "https://hackerrank.com", icon: SiHackerrank, label: "HackerRank", colorClass: "hover:text-amber-500" },
    { href: "https://geeksforgeeks.org", icon: SiGeeksforgeeks, label: "GeeksforGeeks", colorClass: "hover:text-amber-600" },
    { href: "https://stackoverflow.com", icon: SiStackoverflow, label: "StackOverflow", colorClass: "hover:text-amber-500" }
  ];

  const legalLinks = [
    { to: "/privacy", text: "Privacy Policy" },
    { to: "/terms", text: "Terms of Service" },
    { to: "/cookies", text: "Cookie Policy" },
    { to: "/security", text: "Security" }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <FaCode className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-cyan-600">
                AlgoGyan
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm leading-relaxed">
              Master data structures and algorithms through interactive challenges and real-world projects.
            </p>

            <NewsletterForm />

            <div className="flex flex-wrap gap-3 mt-4">
              {[
                { href: "https://github.com", icon: FaGithub, label: "GitHub" },
                { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
                { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
                { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
                { href: "https://discord.gg", icon: FaDiscord, label: "Discord" }
              ].map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center">
              <FaRocket className="mr-2 text-amber-500 dark:text-amber-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <FooterLink key={index} to={link.to} icon={link.icon}>
                  {link.text}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3">
            <h3 className="text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center">
              <FaLightbulb className="mr-2 text-amber-500 dark:text-amber-400" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <FooterLink key={index} to={resource.to} icon={resource.icon}>
                  {resource.text}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Coding Platforms */}
          <div className="md:col-span-3">
            <h3 className="text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center">
              <FaCode className="mr-2 text-amber-500 dark:text-amber-400" />
              Coding Platforms
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Integration with major competitive programming platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              {codingPlatforms.map((platform, index) => (
                <SocialIcon key={index} {...platform} />
              ))}
            </div>
          </div>
        </div>

        {/* Contact and Legal */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <FaEnvelope className="mr-2" />
                <span>contact@algogyan.com</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <FaPhoneAlt className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 text-sm transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>© {currentYear} AlgoGyan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
