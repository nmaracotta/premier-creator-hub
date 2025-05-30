
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How is Premier Creator different from other agencies?",
      answer: "We're the only agency that combines full technical implementation with ongoing revenue optimization. While others just build websites, we create complete monetization ecosystems with payment processing, customer onboarding, affiliate systems, and growth strategies. Plus, we guarantee results."
    },
    {
      question: "What exactly do you build for creators?",
      answer: "We build your entire monetization infrastructure: custom sales funnels, payment processing systems, member portals, automated email sequences, affiliate programs, customer support systems, and analytics dashboards. Everything needed to scale to $10K+/month and beyond."
    },
    {
      question: "How quickly can I start generating revenue?",
      answer: "Most creators start seeing revenue within 2-3 weeks of launch. Our average client hits $10K+/month within 21 days. The fastest was 12 days. Speed depends on your audience size and engagement, but our system is designed for rapid monetization."
    },
    {
      question: "Do you work with creators in any niche?",
      answer: "We work with creators in education, fitness, business, tech, design, and lifestyle niches. If you have an engaged audience of 1,000+ and expertise to share, we can build a profitable system around it. We're selective and only take on creators we're confident we can scale."
    },
    {
      question: "What's your pricing and guarantee?",
      answer: "Investment starts at $15K for complete system build and launch. We guarantee you'll generate at least 2x your investment within 90 days, or we'll work for free until you do. Most clients see 5-10x ROI within the first quarter."
    },
    {
      question: "Do I need to know anything technical?",
      answer: "Absolutely not. We handle 100% of the technical implementation, setup, and ongoing optimization. Your only job is creating content and engaging with your audience. We manage everything behind the scenes so you can focus on what you do best."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-section">
        
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-slate-900 mb-6">
              Questions? We Have Answers.
            </h2>
            <p className="body-large text-slate-600">
              Everything you need to know about working with Premier Creator
            </p>
          </div>
        </MotionWrapper>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={300 + (index * 50)}>
              <div className="agency-card mb-4 overflow-hidden">
                <button
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="heading-3 text-slate-900 pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-slate-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-slate-600" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-8">
                    <div className="pt-4 border-t border-slate-200">
                      <p className="body-medium text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper animation="fade-in-up" delay={700}>
          <div className="text-center mt-12">
            <p className="body-medium text-slate-600 mb-6">
              Still have questions? Let's talk.
            </p>
            <button className="btn-secondary">
              <a href="#contact">Schedule a Call</a>
            </button>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default FAQ;
