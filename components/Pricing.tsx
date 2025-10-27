import React from 'react';
import type { Plan } from '../types';

const plans: Plan[] = [
  {
    name: 'Free',
    price: 'Free',
    description: 'Perfect for individual teachers and small classrooms getting started.',
    features: ['Up to 3 playlists', '10 students per class', 'AI quiz generation', 'Basic analytics'],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$12',
    description: 'For growing schools that need more power and customization.',
    features: ['Unlimited playlists', '50 students per class', 'Advanced anti-skip controls', 'Class heatmaps', 'Priority support'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    description: 'Tailored solutions for districts and large educational institutions.',
    features: ['Custom student limits', 'SSO & LMS integration', 'Dedicated account manager', 'Parental reports'],
    isPopular: false,
  },
];

const PricingCard: React.FC<{ plan: Plan }> = ({ plan }) => (
  <div className={`relative p-8 rounded-2xl border ${plan.isPopular ? 'border-blue-500' : 'border-slate-700'} bg-slate-800/50 shadow-lg`}>
    {plan.isPopular && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">Most Popular</span>
      </div>
    )}
    <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
    <p className="mt-4 text-slate-400">{plan.description}</p>
    <div className="mt-6">
      <span className="text-4xl font-bold text-white">{plan.price}</span>
      {plan.name === 'Pro' && <span className="text-base font-medium text-slate-400">/teacher/mo</span>}
    </div>
    <ul className="mt-8 space-y-4">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="h-6 w-6 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="ml-3 text-slate-300">{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        if (plan.name === 'Enterprise') {
            window.location.href = 'mailto:sales@ilearn.com?subject=Enterprise Inquiry';
        } else {
            alert('Sign up process coming soon!');
        }
      }}
      className={`mt-8 block w-full text-center rounded-lg px-6 py-3 text-lg font-semibold ${plan.isPopular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-slate-700 text-white hover:bg-slate-600'} transition-colors`}
    >
      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
    </a>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pricing for every classroom
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Start for free during our beta. Premium analytics & reports coming soon.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;