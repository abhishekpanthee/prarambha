import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';

const aboutImage = "/depart.webp";

const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
          >
            About DOECE Thapathali
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl mb-8">
              <img 
                src={aboutImage} 
                alt="Department of Electronics and Computer Engineering"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-4 py-2 bg-indigo-600/90 rounded-lg text-sm font-medium">
                  Thapathali Campus, IOE
                </span>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Department
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              The Department of Electronics and Computer Engineering (DOECE) at Thapathali Campus, 
              Institute of Engineering is one of the premier departments dedicated to providing 
              excellence in education in the fields of electronics, computing, and information technology.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Established with a vision to produce competent engineers capable of addressing technological
              challenges, DOECE has consistently maintained high standards of academic excellence and 
              research innovation. Our faculty comprises experienced professionals and academics who 
              bring their expertise to the classroom, providing students with both theoretical knowledge 
              and practical insights.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-10">
            Prarambha 
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              The Prarambha  is a flagship event organized by the seniors at DOECE to welcome new students 
              into our academic community. This event serves as a platform for incoming students to:
            </p>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Familiarize themselves with the department's faculty and Seniors</li>
              <li>Learn about Having Fun</li>
              <li>Network with senior students and faculty members</li>
              <li>Dance, Eat  till you can't</li>
              <li>Participate in Fun activities and social events</li>
            </ul>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Prarambha  builds on the tradition of excellence while incorporating new elements 
              to address the evolving needs of students in the dynamic fields of electronics and computer 
              engineering. Through this event, we aim to instill a sense of belonging and community among 
              our students, setting the foundation for a successful academic journey at DOECE , Thapatali Campus.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 border border-indigo-100 dark:border-indigo-800"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Vision & Mission
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-indigo-700 dark:text-indigo-400 mb-2">
                Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be a center of excellence in electronics and computer engineering education, 
                producing graduates who contribute meaningfully to technological advancement and innovation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-indigo-700 dark:text-indigo-400 mb-2">
                Mission
              </h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Provide quality education in electronics and computer engineering</li>
                <li>Foster a culture of research and innovation</li>
                <li>Develop industry partnerships to enhance practical learning</li>
                <li>Empower students with technical and soft skills for career success</li>
                <li>Contribute to technological solutions for societal challenges</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;