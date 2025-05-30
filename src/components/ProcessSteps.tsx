
import React from 'react';
import { Settings, Rocket, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      icon: Settings,
      title: "We Build",
      subtitle: "Your Complete System",
      description: "Custom sales funnels, payment processing, member portals, and automated email sequences.",
      features: ["Sales page design", "Payment integration", "Member onboarding", "Email automation"],
      timeline: "Week 1-2"
    },
    {
      icon: Rocket,
      title: "We Automate", 
      subtitle: "Everything Behind-the-Scenes",
      description: "Automated customer support, affiliate management, analytics tracking, and community setup.",
      features: ["Customer support", "Affiliate tracking", "Analytics setup", "Community management"],
      timeline: "Week 2-3"
    },
    {
      icon: TrendingUp,
      title: "You Scale",
      subtitle: "To $10K+/Month",
      description: "Ongoing optimization, new revenue streams, and growth strategy execution while you create content.",
      features: ["Revenue optimization", "New product launches", "Growth strategy", "Performance monitoring"],
      timeline: "Ongoing"
    }
  ];

  return (
    <section id="process" className="section-spacing bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 mb-6 px-4 py-2 text-sm font-semibold">
              How We Work
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight">
              From Zero to <span className="gradient-text">$10K+</span>
              <br />in 30 Days
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Our battle-tested process has generated <span className="font-bold text-slate-900">$2.3M+</span> for creators. 
              We handle everything, you focus on what you do best.
            </p>
          </div>
        </MotionWrapper>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {steps.map((step, index) => (
              <MotionWrapper key={index} animation="fade-in-up" delay={300 + (index * 150)}>
                <div className="relative">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 z-10"></div>
                  )}
                  
                  <Card className="premium-card h-full relative overflow-hidden">
                    {/* Step number */}
                    <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200 text-xs font-semibold mb-3">
                          {step.timeline}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-black mb-2 text-slate-900">{step.title}</h3>
                      <h4 className="text-lg font-semibold mb-4 text-slate-700">{step.subtitle}</h4>
                      <p className="text-slate-600 mb-6 leading-relaxed">{step.description}</p>
                      
                      <ul className="space-y-3">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* Results showcase */}
          <MotionWrapper animation="fade-in-up" delay={700}>
            <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-12 rounded-3xl relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
              
              <div className="relative z-10 text-center">
                <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-6 px-4 py-2">
                  Proven Results
                </Badge>
                <h3 className="text-3xl md:text-4xl font-black mb-8">
                  Join the Elite: <span className="gradient-text">500+ Creators</span> Earning $10K+/Month
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black mb-2 gradient-text">$2.3M+</div>
                    <div className="text-slate-400 font-semibold">Revenue Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black mb-2 gradient-text">500+</div>
                    <div className="text-slate-400 font-semibold">Creators Scaled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black mb-2 gradient-text">87%</div>
                    <div className="text-slate-400 font-semibold">Hit $10K in 30 Days</div>
                  </div>
                </div>
                
                <Button className="btn-premium bg-white text-slate-900 hover:bg-slate-100 font-black px-10 py-6 h-16 rounded-2xl" asChild>
                  <a href="#contact">
                    Start Your Revenue Engine
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
