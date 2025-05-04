import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const heroImages = [
  "https://res.cloudinary.com/dpwglhp5u/image/upload/v1746366253/bct1_vkdfdj.jpg",
  "https://res.cloudinary.com/dpwglhp5u/image/upload/v1746366256/IMG_5063_bash6j.jpg",
  "https://res.cloudinary.com/dpwglhp5u/image/upload/v1746366257/IMG_5065_igs5lw.jpg",
  "https://res.cloudinary.com/dpwglhp5u/image/upload/v1746366248/IMG_5051_hzbyyb.jpg",
  "https://res.cloudinary.com/dpwglhp5u/image/upload/v1746366251/IMG_5045_ulkiah.jpg",
  "https://res.cloudinary.com/dpwglhp5u/image/upload/v1746366248/IMG_5046_bck8nh.jpg",
  "https://res.cloudinary.com/dpwglhp5u/image/upload/v1746366249/beci1_k5rtxb.jpg",
  "https://res.cloudinary.com/dpwglhp5u/image/upload/v1746366253/senior1_fy0dv1.jpg"
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 to-sky-50/80 dark:from-indigo-950/30 dark:to-gray-900 z-0"></div>
      
      <div className="absolute top-20 right-0 w-72 h-72 bg-pink-300/10 dark:bg-pink-700/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-300/10 dark:bg-indigo-700/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 rounded-full"
            >
              <span className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-2" />
                <span>Coming Soon</span>
              </span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
            >
              <span className="block">Your Frist Step</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500 dark:from-indigo-400 dark:to-sky-300">
              Prarambha 
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:pr-10"
            >
            Organized by your Seniors of Department of Electronics and Computer Engineering at Thapathali Campus, IOE.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/schedule" 
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center group"
              >
                View Schedule
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/about" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-200 dark:border-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent z-10"></div>
              <img 
                src={heroImages[currentImageIndex]} 
                alt="DOECE Welcome Program"
                className="w-full h-auto max-h-[500px] object-cover object-center rounded-2xl"
              />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-lg flex items-center space-x-2"
            >
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Join Us</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute top-5 right-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg"
            >
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">2024 Edition</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;