
import React from 'react';
import { CheckCircle } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

type Deliverable = {
  title: string;
  description: string;
};

const deliverables: Deliverable[] = [
  {
    title: "Custom Whop Setup",
    description: "Strategic low-ticket and high-ticket tiers designed for your specific audience and content."
  },
  {
    title: "Automated Funnels & Onboarding",
    description: "Seamless systems to convert followers into paying subscribers with minimal friction."
  },
  {
    title: "Content Plan + Sales Scripts",
    description: "Strategic content calendar and converting sales messaging tailored to your niche."
  },
  {
    title: "Community Design",
    description: "Professional setup of Discord, Telegram, or other community platforms to foster engagement."
  },
  {
    title: "Growth Playbook",
    description: "Custom strategies to continuously grow your membership and increase monthly revenue."
  },
  {
    title: "Rev-Share Model",
    description: "Our success is tied to yours with a performance-aligned revenue share structure."
  }
];

const Deliverables: React.FC = () => {
  return (
    <section id="deliverables" className="py-20 bg-background">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <h2 className="h2 text-center mb-6">What You Get</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our comprehensive solution includes everything you need to build and grow your membership community.
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
