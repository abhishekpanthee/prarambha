import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Info, Home, Bell, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import clsx from 'clsx';

const navItems = [
  { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { path: '/about', label: 'About', icon: <Info className="w-5 h-5" /> },
  { path: '/sponsor', label: 'Sponsors', icon: <Users className="w-5 h-5" /> },
  { path: '/schedule', label: 'Schedule', icon: <Calendar className="w-5 h-5" /> },
  { path: '/notices', label: 'Notices', icon: <Bell className="w-5 h-5" /> },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400"
          >
            <span className="inline-flex items-center gap-2">
              <span className="font-semibold">Prarambha</span>
  
            </span>
          </NavLink>

          
          <div className="flex items-center lg:hidden gap-3">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => clsx(
                  'px-4 py-2 mx-1 rounded-full font-medium transition-all duration-200 flex items-center gap-2',
                  isActive 
                    ? 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 hover:bg-indigo-50/50 dark:hover:text-indigo-300 dark:hover:bg-indigo-900/20'
                )}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => clsx(
                    'py-3 px-4 my-1 rounded-lg flex items-center gap-3 font-medium transition-colors',
                    isActive 
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300' 
                      : 'text-gray-600 dark:text-gray-300'
                  )}
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;