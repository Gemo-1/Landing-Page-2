import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import Comparison from './components/Comparison';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const AppContent = () => {
  const { language } = useLanguage();

  return (
    <div className={`min-h-screen w-full bg-white dark:bg-black text-gray-900 dark:text-gray-100 overflow-x-hidden ${language === 'ar' ? 'font-[Cairo]' : 'font-sans'}`}>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <SocialProof />
      <Comparison />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
