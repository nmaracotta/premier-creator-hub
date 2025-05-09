
import React from 'react';
import { CheckCircle } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

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
    <section id="deliverables" className="py-20 bg-background">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <h2 className="h2 text-center mb-6">Everything You Need For Reliable Income</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Stop trading time for money and start building real wealth with these proven membership assets.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={400 + (index * 50)}>
              <div className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                <CheckCircle className="h-6 w-6 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
