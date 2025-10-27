import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              iLearn
            </span>
            <span className="text-sm font-semibold text-slate-400 ml-2 mt-1">by ER21</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center">
            <a href="#pricing" className="bg-white text-slate-900 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors shadow-md">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;