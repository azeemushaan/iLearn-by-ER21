
import React from 'react';

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
