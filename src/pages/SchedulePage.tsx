import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import ScheduleItem from '../components/schedule/ScheduleItem';
import { ScheduleItem as ScheduleItemType } from '../types';


const scheduleData: ScheduleItemType[] = [
  {
    id: '1',
    time: '8:30 AM - 9:00 AM',
    title: 'Welcome Speech',
    description: 'Kickoff address to warmly welcome freshers and set the tone for the event.',
    speaker: 'Event Host',
    location: 'Venue: To Be Announced'
  },
  {
    id: '2',
    time: '9:00 AM - 9:30 AM',
    title: 'Officials’ Speeches',
    description: 'Inspiring words from DOECE faculty and special guests about academic life and future opportunities.',
    speaker: 'Er. Umesh Kanta Ghimire and Guests',
    location: 'Venue: To Be Announced'
  },
  {
    id: '3',
    time: '9:30 AM - 10:00 AM',
    title: 'Breakfast Break',
    description: 'Enjoy a light breakfast while mingling with seniors and faculty members.',
    location: 'Venue: To Be Announced'
  },
  {
    id: '4',
    time: '10:00 AM - 11:00 AM',
    title: 'Department Introduction',
    description: 'Overview of DOECE, academic programs, student opportunities, and facilities.',
    speaker: 'Faculty Panel',
    location: 'Venue: To Be Announced'
  },
  {
    id: '5',
    time: '11:00 AM - 11:30 AM',
    title: 'Performance Segment I',
    description: 'First round of cultural performances by students — music, dance, and more.',
    location: 'Venue: To Be Announced'
  },
  {
    id: '6',
    time: '11:30 AM - 12:00 PM',
    title: 'Games & Interaction',
    description: 'Fun games and group activities designed to break the ice and build new friendships.',
    location: 'Venue: To Be Announced'
  },
  {
    id: '7',
    time: '12:00 PM - 12:45 PM',
    title: 'Lunch Break & Networking',
    description: 'Enjoy lunch and casual conversations with fellow batchmates and seniors.',
    location: 'Venue: To Be Announced'
  },
  {
    id: '8',
    time: '12:45 PM - 1:15 PM',
    title: 'Surprise Segment',
    description: 'A surprise activity to make the day unforgettable — stay curious!',
    location: 'Venue: To Be Announced'
  },
  {
    id: '9',
    time: '1:15 PM - 2:00 PM',
    title: 'Performance Segment II',
    description: 'Second round of energetic student performances — from bands to drama.',
    location: 'Venue: To Be Announced'
  },
  {
    id: '10',
    time: '2:00 PM - 3:00 PM',
    title: 'Mr. & Ms. Fresher Competition',
    description: 'Freshers showcase their talent, confidence, and charm to win the title.',
    location: 'Venue: To Be Announced'
  },
  {
    id: '11',
    time: '3:00 PM - 3:30 PM',
    title: 'Group Photo Session',
    description: 'Capture the memories with a large group photo of all participants and organizers.',
    location: 'Venue: To Be Announced'
  },
  {
    id: '12',
    time: '3:30 PM - 4:00 PM',
    title: 'Closing Remarks',
    description: 'Thank you note and final thoughts to conclude a fun-filled day.',
    speaker: 'Event Coordinator',
    location: 'Venue: To Be Announced'
  }
];


const SchedulePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Event Schedule
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Here's what to expect during the Prarambha. The exact date will be announced soon.
            </p>
          </motion.div>
          
          <div className="pl-2 sm:pl-4">
            {scheduleData.map((item, index) => (
              <ScheduleItem 
                key={item.id} 
                item={item} 
                index={index}
                isLast={index === scheduleData.length - 1}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 mt-12 border border-indigo-100 dark:border-indigo-800"
          >
            <p className="text-center text-gray-700 dark:text-gray-300">
              <span className="font-medium">Note:</span> This schedule is tentative and subject to minor changes. 
              Please check the notices page regularly for any updates or adjustments to the program.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SchedulePage;