import { Link } from "react-router";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-blue-900 to-blue-800 text-white pt-12 pb-8 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <img src="/src/assets/habit-tracker.png" alt="habit_tracker-img" className="w-10 h-10 rounded-full" />
              <h2 className="text-xl font-bold text-white">Habit_Tracker</h2>
            </div>
            <p className="text-gray-300">
              Build better habits, achieve your goals, and transform your daily
              routines with our powerful habit tracking platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/My_Habits"
                  className="text-gray-300 hover:text-white transition"
                >
                  My Habits
                </Link>
              </li>
              <li>
                <Link
                  to="/Public_Habits"
                  className="text-gray-300 hover:text-white transition"
                >
                  Public Habits
                </Link>
              </li>
              <li>
                <Link
                  to="/Add_Habit"
                  className="text-gray-300 hover:text-white transition"
                >
                  Create New Habit
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-medium text-white">Email:</span>{" "}
                habit@tracker.com
              </li>
              <li className="text-gray-300">
                <span className="font-medium text-white">Support:</span>{" "}
                support@habit-tracker.com
              </li>
              <li className="text-gray-300">
                <span className="font-medium text-white">Address:</span>
                <br />
                123 Productivity Lane
                <br />
                Success City, Bangladesh
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Stay Connected</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full  flex items-center justify-center text-white bg-blue-500  transition duration-300"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full  flex items-center justify-center text-white bg-blue-700  transition duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full  flex items-center justify-center text-white bg-gray-900transition duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-pink-600  transition duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                Join our newsletter for habit-building tips
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent grow text-black placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-white text-blue-900 rounded-lg hover:bg-opacity-90 transition font-medium cursor-pointer hover:bg-blue-600 hover:text-white">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © {new Date().getFullYear()} Habit_Tracker. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://en.wikipedia.org/wiki/Privacy_policy"
                target="_blank"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Privacy Policy
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Terms_of_service"
                target="_blank"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Terms & Conditions
              </a>
              <a
                href="https://en.wikipedia.org/wiki/HTTP_cookie"
                target="_blank"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
