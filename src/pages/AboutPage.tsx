
import React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "With over 15 years of experience in creative direction, Alexandra leads our team with vision and precision."
    },
    {
      name: "Marcus Johnson",
      role: "Head of Photography",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Award-winning photographer with a keen eye for composition and storytelling through visual imagery."
    },
    {
      name: "Sophia Rodriguez",
      role: "Digital Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Data-driven strategist who specializes in crafting effective digital campaigns that deliver measurable results."
    },
    {
      name: "David Kim",
      role: "Video Production Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      bio: "Experienced filmmaker with a background in documentary and commercial video production for global brands."
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
                <p className="tag bg-secondary text-secondary-foreground mb-3">About Us</p>
                <h1 className="h1 mb-5">Our Story & Mission</h1>
                <p className="text-muted-foreground text-lg">
                  Learn about our journey, our values, and the passionate team behind Premier Creator.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>
        
        <About />

        <section className="py-20 md:py-32 bg-secondary/50">
          <div className="container-custom">
            <MotionWrapper animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="tag bg-white text-primary mb-3">Our Team</p>
                <h2 className="h2 mb-5">The Creative Minds</h2>
                <p className="text-muted-foreground text-lg">
                  Meet the talented individuals who bring your vision to life with passion and expertise.
                </p>
              </div>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <MotionWrapper key={index} animation="fade-in-up" delay={200 + index * 100}>
                  <div className="glass-card overflow-hidden group">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-accent text-sm mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </div>
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

export default AboutPage;
