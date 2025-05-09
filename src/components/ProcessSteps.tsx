
import React from 'react';
import { Code, Rocket, TrendingUp } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

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
    <section id="process" className="py-24 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 mb-4">
              Our Process
            </Badge>
            <h2 className="h2 mb-6">Our Proven 30-Day Launch System</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've refined this process with dozens of creators, generating predictable monthly revenue without requiring you to work harder.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={400 + (index * 100)}>
              <Card className={cn(
                "h-full border border-border hover:border-accent/30 transition-all duration-300",
                "bg-white/50 dark:bg-black/20 backdrop-blur-sm",
                "overflow-hidden group relative"
              )}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
                <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 bg-accent/5 rounded-full blur-2xl"></div>
                
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <step.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper animation="fade-in-up" delay={700}>
          <div className="text-center">
            <div className="inline-flex items-center bg-accent/5 px-6 py-3 rounded-full border border-accent/20">
              <p className="text-accent italic font-medium">
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
