import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Heart, Star, Shield, Lightbulb, Users, Target } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

interface ValueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueItem: React.FC<ValueItemProps> = ({ icon, title, description, delay }) => (
  <MotionWrapper animation="fade-in-up" delay={delay}>
    <div className="flex gap-4">
      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </MotionWrapper>
);

const About: React.FC = () => {
  const values = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Excellence",
      description: "We deliver outstanding results that exceed expectations and set new standards in the industry."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Our genuine passion for creativity drives us to push boundaries and create truly remarkable work."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Innovation",
      description: "We embrace innovation and continuously explore new technologies and creative approaches."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings with creators and brands."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that truly matter to our clients' success."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership to achieve extraordinary results together."
    }
  ];

  return (
    <section id="about" className="py-0 md:py-8 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <MotionWrapper animation="fade-in-up">
            <h3 className="h3 text-center mb-8">Our Core Values</h3>
          </MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ValueItem 
                key={index} 
                icon={value.icon} 
                title={value.title} 
                description={value.description}
                delay={index * 100 + 200}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-32 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
    </section>
  );
};

export default About;
