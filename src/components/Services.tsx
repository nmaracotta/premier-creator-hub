
import React from 'react';
import { Camera, Film, MonitorPlay, Image, Globe, Mic } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

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
      <p className="text-muted-foreground">{description}</p>
    </div>
  </MotionWrapper>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Premium photography services capturing your brand's essence with stunning visuals that tell your unique story."
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Videography",
      description: "Cinematic video production creating compelling narratives that engage and inspire your audience."
    },
    {
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "Content Production",
      description: "End-to-end content creation from ideation to distribution, designed to maximize impact across platforms."
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Visual Design",
      description: "Exceptional graphic and visual design that elevates your brand identity and creates lasting impressions."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Data-driven digital strategies that optimize your online presence and drive meaningful audience engagement."
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Audio Production",
      description: "Professional audio services including podcasting, sound design, and music production for all your projects."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="tag bg-secondary text-secondary-foreground mb-3">Our Services</p>
            <h2 className="h2 mb-5">Elevating Your Digital Presence</h2>
            <p className="text-muted-foreground text-lg">
              We offer comprehensive creative services tailored to transform your vision into impactful digital experiences.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
      
      {/* Background element */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
    </section>
  );
};

export default Services;
