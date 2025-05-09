
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import { Button } from '@/components/ui/button';
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

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-24">
        {/* Hero section with call to action button */}
        <section className="py-16 md:py-24 relative overflow-hidden">
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
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
