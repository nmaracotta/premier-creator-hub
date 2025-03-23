
import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import { DollarSign, Shield, TrendingUp, Users, MessageSquare, Award, Sparkles, Lightbulb, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const additionalServices = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Content Strategy",
      description: "Developing comprehensive content strategies that align with your brand partnerships and audience growth goals."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Management",
      description: "Strategies for growing and engaging your community across platforms to strengthen your position with brands."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Contract Review",
      description: "Thorough review of all brand contracts to ensure favorable terms, proper rights protection, and maximum compensation."
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container-custom">
            <MotionWrapper animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="tag bg-secondary text-secondary-foreground mb-3">Our Services</p>
                <h1 className="h1 mb-5">Creator Management Solutions</h1>
                <p className="text-muted-foreground text-lg mb-8">
                  We negotiate top dollar for creators, ensure timely payments, and work 1-on-1 to maximize your ROI across all brand partnerships.
                </p>
                <Button className="btn-hover" size="lg">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </div>
            </MotionWrapper>
          </div>
        </section>
        
        <Services />

        <section className="py-20 md:py-32 bg-secondary/50">
          <div className="container-custom">
            <MotionWrapper animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="tag bg-white text-primary mb-3">Additional Services</p>
                <h2 className="h2 mb-5">Comprehensive Creator Support</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Beyond brand deals, we offer specialized services to enhance your creator business and career growth.
                </p>
                <Button className="btn-hover mb-8" size="lg">
                  <Link to="/contact">Explore Additional Support</Link>
                </Button>
              </div>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <MotionWrapper key={index} animation="fade-in-up" delay={200 + index * 100}>
                  <div className="glass-card group p-8 h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                    <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button className="w-full btn-hover" size="sm">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </MotionWrapper>
              ))}
            </div>

            <MotionWrapper animation="fade-in-up" delay={600}>
              <div className="text-center mt-16 max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Ready to take your creator career to the next level?</h3>
                <p className="text-muted-foreground mb-8">Join the hundreds of creators who have increased their brand deal revenue by an average of 40% within the first 3 months of working with us.</p>
                <Button className="btn-hover" size="lg">
                  <Link to="/contact">Schedule Your Strategy Call</Link>
                </Button>
              </div>
            </MotionWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
