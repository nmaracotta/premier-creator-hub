
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight } from 'lucide-react';

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
        <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-background">
          {/* Abstract geometric background elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-accent/5 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent opacity-20 rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <MotionWrapper animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="mb-6 inline-flex items-center justify-center">
                  <p className="tag bg-accent/10 text-accent font-medium px-4 py-1.5">Contact Us</p>
                </div>
                <h1 className="h1 mb-6 leading-tight">Let's Start Creating <span className="text-accent">Together</span></h1>
                <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                  Ready to transform your vision into reality? Schedule a consultation with our expert team to discuss your creator business goals and strategy.
                </p>
                <Button 
                  className="btn-hover shadow-lg shadow-accent/20" 
                  size="lg"
                  onClick={handleScheduleCall}
                >
                  Schedule a Strategy Consultation
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </MotionWrapper>
          </div>
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
