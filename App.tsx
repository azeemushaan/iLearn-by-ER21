
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import AdminDashboard from './components/AdminDashboard';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <HowItWorks />
        <Features />
        <AdminDashboard />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
