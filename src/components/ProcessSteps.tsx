
import React from 'react';
import { Wrench, Zap, TrendingUp } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

type Step = {
  icon: React.ElementType;
  title: string;
  description: string;
  stepNumber: string;
  stepTitle: string;
};

const steps: Step[] = [
  {
    icon: Wrench,
    title: "We Build Everything",
    description: "Complete monetization system with funnels, payment processing, and member areas built in 14 days.",
    stepNumber: "STEP 1",
    stepTitle: "We Build Everything"
  },
  {
    icon: Zap,
    title: "You Focus on Creating",
    description: "Keep doing what you love while we handle all the technical infrastructure and optimization.",
    stepNumber: "STEP 2",
    stepTitle: "You Focus on Creating"
  },
  {
    icon: TrendingUp,
    title: "You Start Monetizing",
    description: "Launch sequence that converts 10-30% of your audience into paying customers immediately.",
    stepNumber: "STEP 3",
    stepTitle: "You Start Monetizing"
  }
];

const ProcessSteps: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="h2 mb-6 text-3xl md:text-4xl lg:text-5xl">How It Works</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Our proven system that's generated millions for creators without requiring them to work harder.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {steps.map((step, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={400 + (index * 100)}>
              <Card className={cn(
                "h-full border border-border hover:border-accent/30 transition-all duration-300",
                "bg-white/50 dark:bg-black/20 backdrop-blur-sm",
                "overflow-hidden group relative"
              )}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
                <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 bg-accent/5 rounded-full blur-2xl"></div>
                
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-xs font-medium text-muted-foreground mb-2 tracking-wider">
                      {step.stepNumber}
                    </div>
                    <div className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                      index === 0 ? "bg-blue-500/10" : index === 1 ? "bg-purple-500/10" : "bg-green-500/10"
                    )}>
                      <step.icon className={cn(
                        "h-8 w-8",
                        index === 0 ? "text-blue-500" : index === 1 ? "text-purple-500" : "text-green-500"
                      )} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper animation="fade-in-up" delay={700}>
          <div className="text-center">
            <div className="inline-flex items-center bg-accent/5 px-6 py-3 rounded-full border border-accent/20">
              <p className="text-accent italic font-medium text-sm md:text-base">
                "From zero to $12,480 in monthly recurring revenue in just 28 days with our system."
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default ProcessSteps;
