
import React from 'react';
import MotionWrapper from './MotionWrapper';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      quote: "Premier Creator built my entire monetization system in 2 weeks. I went from $500/month to $24K in 6 weeks.",
      author: "Alex Chen",
      role: "Tech Creator",
      revenue: "$24K/mo",
      avatar: "AC"
    },
    {
      quote: "They handle everything - payments, onboarding, support. I just create content and the money flows in.",
      author: "Sarah Martinez", 
      role: "Fitness Coach",
      revenue: "$18K/mo",
      avatar: "SM"
    },
    {
      quote: "Finally, a team that understands creators. My business scaled faster than I ever imagined possible.",
      author: "David Kim",
      role: "Business Mentor", 
      revenue: "$31K/mo",
      avatar: "DK"
    }
  ];

  const creators = [
    "TechWithAlex", "FitnessByS", "BizMentorD", "DesignCourse", "MarketingMax"
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container-custom">
        
        {/* Creator logos strip */}
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200 mb-6 px-4 py-2 text-sm">
              Trusted by Top Creators
            </Badge>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {creators.map((creator, index) => (
                <div key={index} className="text-lg font-semibold text-slate-400">
                  {creator}
                </div>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* Testimonials */}
        <MotionWrapper animation="fade-in-up" delay={400}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:bg-slate-100 transition-colors duration-300 relative">
                <Quote className="w-8 h-8 text-slate-300 mb-4" />
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{testimonial.revenue}</div>
                    <div className="text-xs text-slate-500">Monthly</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default SocialProof;
