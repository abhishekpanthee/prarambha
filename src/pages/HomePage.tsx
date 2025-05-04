import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CountdownSection from '../components/home/CountdownSection';
import SponsorSection from '../components/sponsors/SponsorSection';

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <HeroSection />
      <FeaturesSection />
      <CountdownSection />
      <SponsorSection />
    </PageTransition>
  );
};

export default HomePage;