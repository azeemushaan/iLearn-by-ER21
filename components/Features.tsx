
import React from 'react';
import type { Feature as FeatureType } from '../types';
import { AiIcon, AnalyticsIcon, ProgressTrackerIcon, LockIcon, NotesIcon, AdminPanelIcon } from './IconComponents';

const features: FeatureType[] = [
  {
    icon: AiIcon,
    title: 'AI-Generated Questions',
    description: 'Gemini-powered quizzes are automatically created from video content, saving you hours of prep time.',
  },
  {
    icon: AnalyticsIcon,
    title: 'Viewer Analytics',
    description: 'Get deep insights into student engagement, performance, and problem areas with our detailed heatmaps.',
  },
  {
    icon: ProgressTrackerIcon,
    title: 'Mastery Tracking',
    description: 'Monitor class and individual student progress towards learning objectives in a clear, visual dashboard.',
  },
  {
    icon: LockIcon,
    title: 'Anti-Skip Lock',
    description: 'Ensure students watch the content before attempting quizzes with intelligent playback controls.',
  },
  {
    icon: NotesIcon,
    title: 'Viewer Notes',
    description: 'Allow students to take timestamped notes directly within the video player for better retention.',
  },
  {
    icon: AdminPanelIcon,
    title: 'Powerful Admin Panel',
    description: 'Manage classes, students, and assignments with ease through an intuitive and powerful interface.',
  },
];

const Feature: React.FC<{ feature: FeatureType }> = ({ feature }) => (
  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-lg">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
      <feature.icon className="h-6 w-6" />
    </div>
    <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
    <p className="mt-2 text-base text-slate-400">{feature.description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why teachers love iLearn
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Everything you need for effective video-based learning.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Feature key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
