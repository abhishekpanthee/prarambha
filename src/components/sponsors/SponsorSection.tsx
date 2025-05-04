import React from 'react';
import { motion } from 'framer-motion';
import { Sponsor } from '../../types';

const sponsorData: Sponsor[] = [
  {
    id: '1',
    name: 'Place Available',
    tier: 'platinum',
    logo: '/sponsor/logo-placeholder-image.png',
    website: 'https://example.com'
  },
  {
    id: '2',
    name: 'Place Available',
    tier: 'gold',
    logo: '/sponsor/logo-placeholder-image.png',
    website: 'https://example.com'
  },
  {
    id: '3',
    name: 'Place Available',
    tier: 'gold',
    logo: '/sponsor/logo-placeholder-image.png'
  },
  {
    id: '4',
    name: 'Place Available',
    tier: 'silver',
    logo: '/sponsor/logo-placeholder-image.png'
  },
  {
    id: '5',
    name: 'Place Available',
    tier: 'silver',
    logo: '/sponsor/logo-placeholder-image.png'
  },
  {
    id: '6',
    name: 'Place Available',
    tier: 'bronze',
    logo: '/sponsor/logo-placeholder-image.png'
  },
];

const tierColors = {
  platinum: 'from-indigo-500 to-blue-400 dark:from-indigo-600 dark:to-blue-500',
  gold: 'from-amber-500 to-yellow-400 dark:from-amber-600 dark:to-yellow-500',
  silver: 'from-gray-400 to-gray-300 dark:from-gray-500 dark:to-gray-400',
  bronze: 'from-amber-700 to-amber-600 dark:from-amber-800 dark:to-amber-700',
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const SponsorCard: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => {
  return (
    <motion.div
      variants={item}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className={`h-2 bg-gradient-to-r ${tierColors[sponsor.tier]}`}></div>
      <div className="p-6">
        <div className="h-40 flex items-center justify-center mb-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg overflow-hidden">
          <img 
            src={sponsor.logo} 
            alt={sponsor.name} 
            className="max-h-32 max-w-full object-contain"
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {sponsor.name}
          </h3>
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full capitalize text-white bg-gradient-to-r mb-3 ${tierColors[sponsor.tier]}">
            {sponsor.tier} Sponsor
          </span>
          {sponsor.website && (
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline block"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface SponsorSectionProps {
  showAll?: boolean;
}

const SponsorSection: React.FC<SponsorSectionProps> = ({ showAll = false }) => {
  const sponsors = showAll 
    ? sponsorData 
    : sponsorData.filter(s => s.tier === 'platinum' || s.tier === 'gold');

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Sponsors
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're grateful to these organizations for supporting the Prarambha and our students' academic journey.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorSection;