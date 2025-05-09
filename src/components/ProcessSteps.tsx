
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
    description: "In just 14 days, we create your complete membership platform with perfectly tiered pricing that converts followers into paying customers."
  },
  {
    icon: Rocket,
    title: "We Launch It",
    description: "Using our proven conversion systems, we'll get your first paying members within 30 days — often with 10-30% of your audience joining."
  },
  {
    icon: TrendingUp,
    title: "We Scale It",
    description: "Our retention experts ensure members stay and pay, while our growth strategies continuously bring in new subscribers month after month."
  }
];

const ProcessSteps: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-accent/5">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <h2 className="h2 text-center mb-6">Our Proven 30-Day Launch System</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We've refined this process with dozens of creators, generating predictable monthly revenue without requiring you to work harder.
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
              "From zero to $12,480 in monthly recurring revenue in just 28 days with our system."
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default ProcessSteps;
