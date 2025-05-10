
import React from 'react';
import { CheckCircle, Award } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';

type Deliverable = {
  title: string;
  description: string;
};

const deliverables: Deliverable[] = [
  {
    title: "Irresistible Membership Tiers",
    description: "$9-$997 pricing structure with proven value stacking that makes joining a no-brainer for your followers."
  },
  {
    title: "Set-and-Forget Sales Funnels",
    description: "Automated systems that sell while you sleep, converting your audience with minimal time investment from you."
  },
  {
    title: "High-Converting Content Strategy",
    description: "Ready-to-use content templates and sales scripts that feel authentic while driving consistent conversions."
  },
  {
    title: "Engagement-Focused Community",
    description: "Custom-built spaces that keep members actively participating, reducing cancellations by up to 80%."
  },
  {
    title: "Predictable Growth System",
    description: "Monthly acquisition strategies guaranteed to bring in 10-30% of your current following as paying members."
  },
  {
    title: "Risk-Free Partnership",
    description: "We only make money when you do—our performance-based model means we're invested in your success from day one."
  }
];

const Deliverables: React.FC = () => {
  return (
    <section id="deliverables" className="py-32 md:py-40 bg-background">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block px-6 py-2 mb-6 rounded-full bg-accent/10 text-accent text-lg font-medium">What You Get</span>
            <h2 className="h2 mb-8 text-4xl md:text-5xl lg:text-6xl">Everything You Need For Reliable Income</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Stop trading time for money and start building real wealth with these proven membership assets.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={400 + (index * 50)}>
              <div className={cn(
                "p-10 rounded-xl border border-border",
                "bg-card hover:border-accent/50 transition-all duration-300",
                "flex flex-col h-full shadow-sm hover:shadow-md"
              )}>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-accent/10 mr-4">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-2xl">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg">{item.description}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper animation="fade-in-up" delay={700}>
          <div className="text-center mt-20">
            <p className="inline-flex items-center text-accent font-medium text-lg">
              <Award className="h-6 w-6 mr-3" />
              Each element is customized to your unique brand and audience
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Deliverables;
