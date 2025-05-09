
import React from 'react';
import { CheckCircle } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

type Deliverable = {
  title: string;
  description: string;
};

const deliverables: Deliverable[] = [
  {
    title: "Tiered Membership Setup",
    description: "Affordable entry-level offers and premium high-ticket options designed for your specific audience."
  },
  {
    title: "Automated Funnels & Onboarding",
    description: "Simple systems to turn followers into paying subscribers with minimal effort from you."
  },
  {
    title: "Content Plan + Sales Scripts",
    description: "Easy-to-follow content calendar and persuasive messaging that feels natural to your style."
  },
  {
    title: "Community Design",
    description: "Professional setup of discussion channels to keep members engaged and coming back for more."
  },
  {
    title: "Growth Playbook",
    description: "Step-by-step strategies to continuously grow your membership and increase monthly income."
  },
  {
    title: "Revenue Sharing",
    description: "Our success is tied to yours—we only win when you're earning recurring income."
  }
];

const Deliverables: React.FC = () => {
  return (
    <section id="deliverables" className="py-20 bg-background">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <h2 className="h2 text-center mb-6">What You Get</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our complete package includes everything you need to start earning monthly income from your audience.
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
