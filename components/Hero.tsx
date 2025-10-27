
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Turn YouTube Playlists into <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Measurable Learning
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
          Auto-pause, AI quizzes, real-time progress — built for Grades 1–8.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Start free
          </a>
          <a
            href="#"
            className="w-full sm:w-auto bg-slate-700/50 text-white font-semibold py-3 px-8 rounded-lg border border-slate-600 hover:bg-slate-700 transition-colors"
          >
            Watch 60-sec demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
