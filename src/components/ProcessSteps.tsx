
import React from 'react';
import { Zap, Rocket, TrendingUp, ArrowRight } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Step = {
  icon: React.ElementType;
  title: string;
  description: string;
  timeline: string;
  detail: string;
};

const steps: Step[] = [
  {
    icon: Zap,
    title: "Strategy & Setup",
    description: "We audit your audience, design your membership tiers, and build your complete platform in 14 days.",
    timeline: "Week 1-2",
    detail: "Complete platform architecture + content strategy"
  },
  {
    icon: Rocket,
    title: "Launch & Convert",
    description: "Using our proven launch sequence, we convert 10-30% of your audience into paying members within 30 days.",
    timeline: "Week 3-4",
    detail: "Live launch support + conversion optimization"
  },
  {
    icon: TrendingUp,
    title: "Scale & Optimize",
    description: "We continuously optimize for retention and growth, scaling your revenue to $10K+/month and beyond.",
    timeline: "Ongoing",
    detail: "Monthly growth reviews + feature updates"
  }
];

const ProcessSteps: React.FC = () => {
  return (
    <section id="process" className="section-padding bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <Badge variant="outline" className="bg-accent/5 text-accent border-accent/20 mb-6 px-4 py-2 text-sm font-medium">
              How It Works
            </Badge>
            <h2 className="h2 mb-8 gradient-text">From Setup to $10K+ in 30 Days</h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Our battle-tested system has generated over $2.3M for creators. Here's exactly how we'll transform your audience into recurring revenue.
            </p>
          </div>
        </MotionWrapper>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <MotionWrapper key={index} animation="fade-in-up" delay={400 + (index * 150)}>
                <Card className={cn(
                  "h-full relative overflow-hidden group hover:shadow-xl transition-all duration-500",
                  "premium-card border-2 hover:border-accent/20"
                )}>
                  {/* Step number */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">{index + 1}</span>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                        <step.icon className="h-8 w-8 text-accent" />
                      </div>
                      <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200 text-xs">
                        {step.timeline}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                    <p className="text-sm text-accent font-medium">{step.detail}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>

          {/* Results showcase */}
          <MotionWrapper animation="fade-in-up" delay={700}>
            <Card className="premium-card p-8 md:p-12 text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Live Results
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                  Average Creator Results in First 90 Days
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">$12,480</div>
                  <div className="text-slate-600">Average monthly revenue</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">847</div>
                  <div className="text-slate-600">Average paying members</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">89%</div>
                  <div className="text-slate-600">Member retention rate</div>
                </div>
              </div>
              
              <Button className="premium-button text-lg h-14 px-8" asChild>
                <a href="#contact">
                  Get Your Custom Revenue Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </Card>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
