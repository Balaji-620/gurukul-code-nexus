
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PlatformOverview from '@/components/PlatformOverview';
import PersonasSection from '@/components/PersonasSection';
import TechStackSection from '@/components/TechStackSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PlatformOverview />
      <PersonasSection />
      <TechStackSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
