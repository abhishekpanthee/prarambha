import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import NoticeCard from '../components/notices/NoticeCard';
import { Notice } from '../types';

const noticesData: Notice[] = [
  {
    id: '1',
    title: 'Welcome Program Date Announcement Coming Soon',
    content: 'The official date for the Prarambha  will be announced within the next two weeks. Stay tuned for updates!',
    date: 'May 15, 2025',
    priority: 'medium'
  },
  {
    id: '2',
    title: 'Call for Student Volunteers',
    content: 'We are looking for enthusiastic students to help organize and run Prarambha. If interested, please submit your application by May 8, 2025.',
    date: 'May 4, 2025',
    priority: 'high'
  },
  {
    id: '3',
    title: 'Sponsorship Opportunities Available',
    content: 'Organizations interested in sponsoring Prarambha can find details about various sponsorship packages on our website. Limited slots available.',
    date: 'May 6, 2025',
    priority: 'medium'
  },
  {
    id: '4',
    title: 'Event Committee Formation',
    content: 'The organizing committee for Prarambha has been formed. Committee members will meet next week to finalize the event details.',
    date: 'May 9, 2025',
    priority: 'low'
  },
];

const NoticesPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  
  const filteredNotices = filter === 'all' 
    ? noticesData
    : noticesData.filter(notice => notice.priority === filter);
  
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Notices & Updates
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Stay informed with the latest announcements regarding the  Program.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              All Notices
            </button>
            <button 
              onClick={() => setFilter('high')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'high' 
                  ? 'bg-red-600 text-white dark:bg-red-500 dark:text-white' 
                  : 'bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30'
              }`}
            >
              High Priority
            </button>
            <button 
              onClick={() => setFilter('medium')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'medium' 
                  ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-white' 
                  : 'bg-amber-50 text-amber-600 hover:bg-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:hover:bg-amber-900/30'
              }`}
            >
              Medium Priority
            </button>
            <button 
              onClick={() => setFilter('low')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'low' 
                  ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white' 
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30'
              }`}
            >
              Low Priority
            </button>
          </motion.div>
          
          <div className="space-y-6">
            {filteredNotices.map(notice => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
            
            {filteredNotices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-gray-500 dark:text-gray-400"
              >
                No notices match the selected filter.
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NoticesPage;