
import React from 'react';
import { Zap, Shield, Users, BarChart3, CreditCard, Headphones, Rocket, TrendingUp } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsGrid: React.FC = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Full Funnel Build",
      description: "Complete sales funnel with landing pages, checkout, and member portals."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Integrated Stripe setup with subscription management and tax handling."
    },
    {
      icon: Users,
      title: "Community Platform",
      description: "Private Discord or Circle community with automated member onboarding."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time revenue tracking, conversion metrics, and growth insights."
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Dedicated support team handling all customer inquiries and issues."
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Ongoing optimization and new revenue stream development."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200 mb-6 px-4 py-2 text-sm">
              What's Included
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We build your complete monetization system so you can focus 
              on creating content while we handle the business side.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={300 + (index * 100)}>
              <Card className="h-full group hover:shadow-xl transition-all duration-300 bg-white border-slate-200">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>

        {/* Bottom guarantee */}
        <MotionWrapper animation="fade-in-up" delay={800}>
          <div className="text-center mt-16 p-8 bg-slate-50 rounded-2xl">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
              <Shield className="w-5 h-5 mr-2" />
              Revenue Guarantee: We don't succeed unless you do
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default BenefitsGrid;
