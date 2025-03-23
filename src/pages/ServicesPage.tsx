
import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import { Camera, Film, MonitorPlay, Image, Globe, Mic, Lightbulb, Users, Trophy } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const additionalServices = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Developing comprehensive brand strategies that align with your business goals and resonate with your target audience."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Management",
      description: "End-to-end social media management including content creation, scheduling, and community engagement."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Campaign Management",
      description: "Strategic planning and execution of marketing campaigns that drive engagement and conversion."
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
                <h1 className="h1 mb-5">Comprehensive Creative Solutions</h1>
                <p className="text-muted-foreground text-lg">
                  From strategy to execution, we provide end-to-end creative services to help your brand stand out in a crowded digital landscape.
                </p>
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
                <h2 className="h2 mb-5">Beyond the Basics</h2>
                <p className="text-muted-foreground text-lg">
                  We offer specialized services to address your unique creative and strategic needs.
                </p>
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
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
