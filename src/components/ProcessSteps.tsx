
import React from 'react';
import { Code, Rocket, TrendingUp } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
  timeline: string;
}

const ProcessSteps: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      icon: Code,
      title: "We Build It",
      description: "Complete monetization system with funnels, payment processing, and member areas built in 14 days.",
      timeline: "Days 1-14"
    },
    {
      icon: Rocket,
      title: "We Launch It",
      description: "Strategic launch sequence that converts 10-30% of your audience into paying customers immediately.",
      timeline: "Days 15-30"
    },
    {
      icon: TrendingUp,
      title: "We Scale It",
      description: "Ongoing optimization and automation that grows your monthly recurring revenue predictably.",
      timeline: "Month 2+"
    }
  ];

  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="display-md mb-6">How It Works</h2>
            <p className="body-lg">
              Our proven 30-day system that's generated millions for creators without requiring them to work harder.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={300 + (index * 100)}>
              <div className="card-feature text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-2xl mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                  {step.timeline}
                </div>
                
                <h3 className="heading-lg mb-4">{step.title}</h3>
                <p className="body-md">{step.description}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
