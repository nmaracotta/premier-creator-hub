
import React from 'react';
import { Award, CheckCircle, TrendingUp, Shield, Users, Zap } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Revenue Guarantee",
      description: "We're so confident in our system that we guarantee results or you don't pay."
    },
    {
      icon: Zap,
      title: "Done-For-You Setup",
      description: "Complete platform build, content strategy, and launch - no work required from you."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Personal success manager, developer, and growth specialist assigned to your account."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Premium dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-6 px-4 py-2 text-sm">
              Why Premier Creator
            </Badge>
            <h2 className="h2 mb-8 text-white">
              We're Not Just Another Course.<br />
              <span className="gradient-text">We're Your Revenue Partners.</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Unlike agencies that charge upfront and disappear, we only succeed when you succeed. 
              Our revenue-sharing model means we're invested in your long-term growth.
            </p>
          </div>
        </MotionWrapper>
        
        {/* Main value proposition card */}
        <MotionWrapper animation="fade-in-up" delay={400}>
          <Card className={cn(
            "max-w-5xl mx-auto overflow-hidden mb-16",
            "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl",
            "border border-white/20 shadow-2xl shadow-black/20"
          )}>
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Proven Track Record
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                From Zero to $10K+/Month in 30 Days
              </h3>
              
              <p className="text-slate-300 text-lg mb-8 max-w-3xl mx-auto">
                Our clients don't just hit their first $10K month—they build sustainable, 
                growing businesses that scale to six figures and beyond.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">$2.3M+</div>
                  <div className="text-slate-300 text-sm">Total revenue generated</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-slate-300 text-sm">Successful creators</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">28 Days</div>
                  <div className="text-slate-300 text-sm">Average time to $10K</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">96% of clients hit their revenue goals</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
        
        {/* Benefits grid */}
        <MotionWrapper animation="fade-in-up" delay={500}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">{benefit.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </MotionWrapper>
        
        <MotionWrapper animation="fade-in-up" delay={600}>
          <div className="text-center">
            <div className="inline-flex items-center">
              <TrendingUp className="h-5 w-5 text-accent mr-2" />
              <p className="text-slate-300 text-lg">
                <span className="font-semibold text-white">Join 500+ creators</span> building real businesses with recurring revenue
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default WhyUs;
