
import React from 'react';
import { 
  CreditCard, 
  Globe, 
  Users, 
  BarChart3, 
  Zap, 
  Shield,
  Mail,
  Settings
} from 'lucide-react';
import MotionWrapper from './MotionWrapper';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureGrid: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Globe,
      title: "Sales Funnels",
      description: "High-converting landing pages and sales sequences designed to turn visitors into customers."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Seamless Stripe integration with subscription management and automated billing."
    },
    {
      icon: Users,
      title: "Member Portal",
      description: "Branded membership area with content delivery and progress tracking."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time revenue tracking, conversion metrics, and customer insights."
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Nurture sequences and retention campaigns that keep customers engaged."
    },
    {
      icon: Zap,
      title: "Affiliate System",
      description: "Built-in referral program that turns customers into revenue-generating partners."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with GDPR compliance and data protection."
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Connect with your existing tools and workflows seamlessly."
    }
  ];

  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="display-md mb-6">What You Get</h2>
            <p className="body-lg">
              Everything you need to monetize your audience, built by experts who understand creator businesses.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={300 + (index * 50)}>
              <div className="card-feature h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-xl mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-lg mb-3">{feature.title}</h3>
                <p className="body-md text-sm">{feature.description}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
