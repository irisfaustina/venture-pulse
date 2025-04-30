import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, Bell } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md' 
        : 'bg-white dark:bg-gray-800 shadow-sm'
    }`}>
      <div className="max-w-[1400px] w-full mx-auto px-2 sm:px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center ml-2 sm:ml-4">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg sm:text-xl">Venture<span className="text-purple-600 dark:text-purple-400">Pulse</span></span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative">
              <button className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
              </button>
            </div>
            <button
              onClick={toggleTheme}
              className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium">
                VP
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;