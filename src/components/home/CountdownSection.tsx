import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Placeholder date - to be updated once exact date is known
const eventDate = new Date('2025-04-15T09:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Event has passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-400/5 dark:bg-indigo-400/10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400/5 dark:bg-pink-400/10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            The Countdown Is On
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Mark your calendars for the biggest  event of the year. Stay tuned for the official announcement.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {countdownItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-indigo-50 dark:to-indigo-950/30"></div>
              <div className="relative z-10">
                <span className="block text-4xl sm:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Stay connected for the official announcement of the event date. Check the{' '}
              <a href="/notices" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                notices
              </a>{' '}
              page regularly for updates.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;