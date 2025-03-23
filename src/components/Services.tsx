
import React from 'react';
import { Camera, Film, MonitorPlay, Image, Globe, Mic, DollarSign, TrendingUp, Shield, Users, MessageSquare, Award } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => (
  <MotionWrapper animation="fade-in-up" delay={delay}>
    <div className="glass-card group p-8 h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
    </div>
  </MotionWrapper>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Brand Deal Negotiation",
      description: "We negotiate top-dollar contracts on your behalf, leveraging our industry relationships to secure the best possible terms."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Payment Protection",
      description: "We ensure you get paid on time, every time, with contract structures and payment tracking systems that protect your interests."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "ROI Maximization",
      description: "Strategic planning and optimization to maximize your return on investment across all brand partnerships and content creation."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "1-on-1 Management",
      description: "Personalized support from experienced managers who understand your niche and can help guide your career growth."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Brand Communication",
      description: "Professional communication and relationship management with brands, handling all the back-and-forth so you can focus on creating."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Content Strategy",
      description: "Strategic content planning aligned with brand partnerships to optimize engagement, growth, and monetization opportunities."
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 relative overflow-hidden">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="tag bg-secondary text-secondary-foreground mb-3">Our Services</p>
            <h2 className="h2 mb-5">Creator Management & Monetization</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We help creators like you focus on what you do best - creating amazing content - while we handle the business side with brands.
            </p>
            <Button className="btn-hover mb-8" size="lg" asChild>
              <a href="https://cal.com/premiercreator/30min" target="_blank" rel="noopener noreferrer">
                Get Started with Creator Management
              </a>
            </Button>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={200 + index * 100}
            />
          ))}
        </div>

        <MotionWrapper animation="fade-in-up" delay={900}>
          <div className="text-center">
            <Button className="btn-hover" size="lg" asChild>
              <a href="https://cal.com/premiercreator/30min" target="_blank" rel="noopener noreferrer">
                Start Maximizing Your Creator Income
              </a>
            </Button>
          </div>
        </MotionWrapper>
      </div>
      
      {/* Background element */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
    </section>
  );
};

export default Services;
