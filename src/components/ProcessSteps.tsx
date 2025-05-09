
import React from 'react';
import { Code, Rocket, TrendingUp } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';

type Step = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: Code,
    title: "We Build It",
    description: "We create your membership platform with the right pricing tiers, content structure, and community framework to match your brand."
  },
  {
    icon: Rocket,
    title: "We Launch It",
    description: "We use personalized outreach, content marketing, sales funnels, and community spaces to attract your first members."
  },
  {
    icon: TrendingUp,
    title: "We Scale It",
    description: "We implement retention strategies, premium upsells, and ongoing community management to grow your recurring revenue."
  }
];

const ProcessSteps: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-accent/5">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <h2 className="h2 text-center mb-6">How It Works</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our proven 3-step process to transform your audience into a thriving subscription community.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={400 + (index * 100)}>
              <div className={cn(
                "flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-black/20 shadow-sm",
                "hover:shadow-md transition-all duration-300"
              )}>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper animation="fade-in-up" delay={700}>
          <div className="text-center mt-10">
            <p className="text-muted-foreground italic">
              "We handle the technical so you can focus on the creative."
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default ProcessSteps;
