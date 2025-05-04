import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import SponsorSection from '../components/sponsors/SponsorSection';

const SponsorPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our Sponsors
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            We extend our gratitude to the organizations that make Prarambha possible. 
            Their support enables us to create meaningful experiences for our students and enhance 
            the quality of our events.
          </motion.p>
        </div>
        
        <SponsorSection showAll={true} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-20 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Interested in Sponsoring?
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            If your organization is interested in supporting Prarambha and connecting 
            with talented students in the field of electronics and computer engineering, we'd love to 
            hear from you.
          </p>
          
          <a 
            href="mailto:doece@tcioe.edu.np" 
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Contact Us About Sponsorship
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default SponsorPage;