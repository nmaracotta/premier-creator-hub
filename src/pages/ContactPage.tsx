
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useToast } from '@/hooks/use-toast';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Discord webhook URL (hardcoded)
  const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1370497633474318427/xPzOs6QCqSAmvSLnrEJ3gVD4UjIZLowWtQyG5JbvzXkLHj6ta8CR7-dLhWGBW8e4xBOS";

  const handleScheduleCall = () => {
    console.log("Schedule call button clicked");
    
    // Navigate to the calendar booking page
    navigate('/booking/calendar');
    
    // Provide feedback to user
    toast({
      title: "Redirecting to booking calendar",
      description: "Choose a time that works for your strategy call.",
    });
  };

  const offices = [
    {
      city: "San Francisco",
      address: "123 Creative Ave, San Francisco, CA 94103",
      phone: "+1 (234) 567-8901",
      email: "sf@premiercreator.com"
    },
    {
      city: "New York",
      address: "456 Design St, New York, NY 10001",
      phone: "+1 (234) 567-8902",
      email: "nyc@premiercreator.com"
    },
    {
      city: "London",
      address: "78 Innovation Ln, London, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "london@premiercreator.com"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-24">
        {/* Hero section with call to action button */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container-custom">
            <MotionWrapper animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="tag bg-secondary text-secondary-foreground mb-3">Contact Us</p>
                <h1 className="h1 mb-5">Let's Start Creating</h1>
                <p className="text-muted-foreground text-lg mb-8">
                  Ready to bring your vision to life? Schedule a call with our team to discuss your creator business.
                </p>
                <Button 
                  className="btn-hover" 
                  size="lg" 
                  onClick={handleScheduleCall}
                >
                  Schedule a 30-Minute Call
                </Button>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
          <div className="container-custom">
            <MotionWrapper animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="tag bg-accent/10 text-accent mb-3">Get In Touch</p>
                <h2 className="h2 mb-5">Tell Us About Your Project</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
            </MotionWrapper>
            
            <div className="max-w-2xl mx-auto">
              <ContactForm discordWebhookUrl={DISCORD_WEBHOOK} />
            </div>
          </div>
        </section>

        {/* Locations section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container-custom">
            <MotionWrapper animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="tag bg-secondary text-secondary-foreground mb-3">Our Locations</p>
                <h2 className="h2 mb-5">Global Presence</h2>
                <p className="text-muted-foreground text-lg">
                  Visit one of our offices around the world to meet our team in person.
                </p>
              </div>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <MotionWrapper key={index} animation="fade-in-up" delay={200 + index * 100}>
                  <div className="glass-card p-8 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-accent" />
                      <h3 className="text-xl font-semibold">{office.city}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{office.address}</p>
                    <p className="mb-1">
                      <a href={`tel:${office.phone}`} className="underline-animation hover:text-accent">
                        {office.phone}
                      </a>
                    </p>
                    <p>
                      <a href={`mailto:${office.email}`} className="underline-animation hover:text-accent">
                        {office.email}
                      </a>
                    </p>
                    <div className="mt-6">
                      <Button className="w-full btn-hover" onClick={handleScheduleCall}>
                        Schedule a Call
                      </Button>
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

export default ContactPage;
