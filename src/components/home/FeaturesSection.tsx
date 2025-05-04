import React from 'react';
import { motion } from 'framer-motion';
import { Users, PartyPopper, Award, MessageSquareText } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Know your Seniors",
    description: "Get to know your seniors students personally"
  },
  {
    icon: <PartyPopper className="w-6 h-6" />,
    title: "Have Fun",
    description: "Enjoy a day full of exciting games, Food, and performances that will leave you smiling."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Be Mr.Fresher and Ms.Fresher",
    description: "Show your charm, confidence, and energy as you compete for the prestigious fresher titles of the year!"
  },
  {
    icon: <MessageSquareText className="w-6 h-6" />,
    title: "Have more fun ",
    description: "Stick around for surprises."
  }
];


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
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What to Expect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Prarambha 1.0 offers a variety of activities and opportunities.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;