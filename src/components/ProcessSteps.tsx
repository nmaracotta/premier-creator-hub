
import React from 'react';
import { Wrench, Rocket, TrendingUp } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';

type Step = {
  icon: React.ElementType;
  title: string;
  description: string;
  stepNumber: string;
  stepTitle: string;
  color: string;
  bgColor: string;
};

const steps: Step[] = [
  {
    icon: Wrench,
    title: "We Build Everything",
    description: "Complete monetization system with funnels, payment processing, and member areas built in 14 days.",
    stepNumber: "STEP 1",
    stepTitle: "We Build Everything",
    color: "text-blue-500",
    bgColor: "bg-blue-500"
  },
  {
    icon: Rocket,
    title: "You Focus on Creating",
    description: "Keep doing what you love while we handle all the technical infrastructure and optimization.",
    stepNumber: "STEP 2",
    stepTitle: "You Focus on Creating",
    color: "text-purple-500",
    bgColor: "bg-purple-500"
  },
  {
    icon: TrendingUp,
    title: "You Start Monetizing",
    description: "Launch sequence that converts 10-30% of your audience into paying customers immediately.",
    stepNumber: "STEP 3",
    stepTitle: "You Start Monetizing",
    color: "text-green-500",
    bgColor: "bg-green-500"
  }
];

const ProcessSteps: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">How It Works</h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Our proven system that's generated millions for creators without requiring them to work harder.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={400 + (index * 100)}>
              <div className="text-center">
                <div className="text-xs font-medium text-gray-500 mb-4 tracking-wider uppercase">
                  {step.stepNumber}
                </div>
                <div className={cn(
                  "w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto",
                  step.bgColor
                )}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{step.description}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
