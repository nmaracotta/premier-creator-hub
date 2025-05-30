
import React from 'react';
import { TrendingUp, Users, DollarSign, Clock, Star, ArrowUpRight } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { Card, CardContent } from '@/components/ui/card';

const Results: React.FC = () => {
  const caseStudies = [
    {
      name: "Alex Chen",
      niche: "Tech Education",
      beforeRevenue: "$500/mo",
      afterRevenue: "$24K/mo",
      timeframe: "6 weeks",
      growth: "4700%",
      avatar: "AC"
    },
    {
      name: "Sarah Martinez",
      niche: "Fitness Coaching",
      beforeRevenue: "$1.2K/mo", 
      afterRevenue: "$18K/mo",
      timeframe: "8 weeks",
      growth: "1400%",
      avatar: "SM"
    },
    {
      name: "David Kim",
      niche: "Business Strategy",
      beforeRevenue: "$2K/mo",
      afterRevenue: "$31K/mo", 
      timeframe: "5 weeks",
      growth: "1450%",
      avatar: "DK"
    }
  ];

  const metrics = [
    {
      icon: DollarSign,
      value: "$2.4M+",
      label: "Revenue Generated",
      description: "Total revenue generated for our creators"
    },
    {
      icon: Users,
      value: "347+",
      label: "Creators Launched",
      description: "Successful monetization engines built"
    },
    {
      icon: TrendingUp,
      value: "87%",
      label: "Hit $10K+/Month",
      description: "Within first 30 days of launch"
    },
    {
      icon: Clock,
      value: "21 Days",
      label: "Average Launch Time",
      description: "From start to revenue generation"
    }
  ];

  return (
    <section id="results" className="section-padding-large bg-white">
      <div className="container-section">
        
        {/* Section Header */}
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-slate-900 mb-6">
              Real Results from Real Creators
            </h2>
            <p className="body-large text-slate-600">
              We don't just build systems—we build businesses. Here's what our creators achieve 
              when they work with Premier Creator.
            </p>
          </div>
        </MotionWrapper>

        {/* Metrics Grid */}
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {metrics.map((metric, index) => (
              <Card key={index} className="agency-card p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="metric-display gradient-text mb-2">{metric.value}</div>
                  <div className="font-semibold text-slate-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-slate-500">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </MotionWrapper>

        {/* Case Studies */}
        <MotionWrapper animation="fade-in-up" delay={400}>
          <div className="text-center mb-12">
            <h3 className="heading-3 text-slate-900 mb-4">Creator Success Stories</h3>
            <p className="body-medium text-slate-600">
              From struggling to scale to consistent 5-figure months
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={500 + (index * 100)}>
              <Card className="agency-card p-8 relative overflow-hidden">
                <CardContent className="p-0">
                  {/* Growth Badge */}
                  <div className="absolute top-6 right-6 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                    +{study.growth}
                  </div>
                  
                  {/* Creator Info */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-lg mr-4">
                      {study.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">{study.name}</div>
                      <div className="text-slate-600">{study.niche}</div>
                    </div>
                  </div>
                  
                  {/* Revenue Transformation */}
                  <div className="bg-slate-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <div className="text-sm text-slate-500 font-medium mb-1">Before</div>
                        <div className="text-2xl font-bold text-slate-700">{study.beforeRevenue}</div>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-green-600" />
                      <div className="text-center">
                        <div className="text-sm text-slate-500 font-medium mb-1">After</div>
                        <div className="text-2xl font-bold text-green-600">{study.afterRevenue}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-slate-500">in {study.timeframe}</div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </div>

        {/* Bottom CTA */}
        <MotionWrapper animation="fade-in-up" delay={800}>
          <div className="text-center">
            <p className="body-medium text-slate-600 mb-6">
              Ready to join our next success story?
            </p>
            <button className="btn-cta">
              <a href="#contact" className="flex items-center gap-3">
                Get Your Results
                <TrendingUp className="w-5 h-5" />
              </a>
            </button>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Results;
