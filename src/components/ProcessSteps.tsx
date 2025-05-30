
import React from 'react';
import { MessageSquare, Rocket, TrendingUp, ArrowRight } from 'lucide-react';
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
  details: string[];
};

const steps: Step[] = [
  {
    icon: MessageSquare,
    title: "Strategy & Blueprint",
    description: "We analyze your audience and create a custom monetization blueprint tailored to your niche and goals.",
    timeline: "Week 1",
    details: ["Audience analysis & market research", "Revenue model design", "Content strategy framework", "Pricing optimization"]
  },
  {
    icon: Rocket,
    title: "System Build & Launch",
    description: "Our team builds your complete monetization system—from payment processing to member onboarding.",
    timeline: "Week 2-3",
    details: ["Full platform development", "Payment system integration", "Automated email sequences", "Member portal setup"]
  },
  {
    icon: TrendingUp,
    title: "Scale & Optimize",
    description: "We continuously optimize your funnel, add new revenue streams, and scale your business to $10K+/month.",
    timeline: "Ongoing",
    details: ["Performance monitoring", "Conversion optimization", "New product launches", "Growth strategy execution"]
  }
];

const ProcessSteps: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <Badge variant="outline" className="bg-white text-slate-600 border-slate-300 mb-6 px-4 py-2 text-sm font-medium">
              How We Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              From Zero to $10K+ in 30 Days
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our proven 3-step process has generated over $2.3M for creators. 
              We handle everything so you can focus on what you do best.
            </p>
          </div>
        </MotionWrapper>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {steps.map((step, index) => (
              <MotionWrapper key={index} animation="fade-in-up" delay={300 + (index * 150)}>
                <Card className={cn(
                  "h-full relative overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-white border-slate-200"
                )}>
                  {/* Step connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-slate-300 z-10"></div>
                  )}
                  
                  {/* Step number */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200 text-xs font-medium">
                        {step.timeline}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>

          {/* Results showcase */}
          <MotionWrapper animation="fade-in-up" delay={700}>
            <Card className="bg-slate-900 text-white p-8 md:p-12 text-center rounded-2xl">
              <div className="mb-8">
                <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-6 px-4 py-2">
                  Proven Results
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Join 500+ Creators Earning $10K+/Month
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">$2.3M+</div>
                  <div className="text-slate-400">Total revenue generated</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                  <div className="text-slate-400">Successful creators</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">87%</div>
                  <div className="text-slate-400">Hit $10K+ in 30 days</div>
                </div>
              </div>
              
              <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-4 h-14 rounded-xl" asChild>
                <a href="#contact">
                  Start Your Revenue Engine
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
