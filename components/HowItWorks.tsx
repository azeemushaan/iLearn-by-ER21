
import React from 'react';

const Step: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-1 flex items-center justify-center h-8 w-8 rounded-full bg-slate-700 border border-slate-600 text-blue-400 font-bold">
      {number}
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-slate-400">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Transforming education is as easy as 1, 2, 3.
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto grid md:grid-cols-1 gap-12">
          <Step
            number={1}
            title="Paste a Playlist"
            description="Simply provide a link to any YouTube playlist you want to assign to your students."
          />
          <Step
            number={2}
            title="iLearn Auto-Adds Checkpoints & Questions"
            description="Our AI analyzes the video, finds key concepts, and generates relevant quizzes to test understanding."
          />
          <Step
            number={3}
            title="Students Watch, Answer, and Master"
            description="Track progress in real-time as students engage with the content and demonstrate their knowledge."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
