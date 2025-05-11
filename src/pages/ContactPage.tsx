
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight, Mail, ArrowRight, CalendarDays, MapPin, Clock, Sparkles } from 'lucide-react';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Discord webhook URL (hardcoded)
  const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1370497633474318427/xPzOs6QCqSAmvSLnrEJ3gVD4UjIZLowWtQyG5JbvzXkLHj6ta8CR7-dLhWGBW8e4xBOS";

  const handleScheduleCall = () => {
    console.log("Schedule call button clicked");
    
    // Set a session storage flag to indicate scroll to top is needed
    sessionStorage.setItem('needsScrollReset', 'true');
    
    // Set a flag to indicate we should auto-scroll to the calendar
    sessionStorage.setItem('scrollToCalendar', 'true');
    
    // Provide feedback to user
    toast({
      title: "Redirecting to booking calendar",
      description: "Choose a time that works for your strategy call.",
    });
    
    // Navigate to calendar page
    navigate('/booking/calendar');
  };

  // Handle form submission and immediate redirection
  const handleFormSubmit = () => {
    console.log("Form submitted, redirecting to calendar");
    
    // Set a session storage flag to indicate scroll to top is needed
    sessionStorage.setItem('needsScrollReset', 'true');
    
    // Set a flag to indicate we should auto-scroll to the calendar
    sessionStorage.setItem('scrollToCalendar', 'true');
    
    // Navigate to calendar page
    navigate('/booking/calendar');
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-24">
        {/* Hero section with call to action button */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-background">
          {/* Abstract geometric background elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-accent/5 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-accent/10 to-transparent opacity-30 rounded-full blur-2xl"></div>
          
          <div className="container-custom relative z-10">
            <MotionWrapper animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="mb-6 inline-flex items-center justify-center">
                  <p className="tag bg-accent/10 text-accent font-medium px-4 py-1.5 rounded-full shadow-sm">
                    <Sparkles className="mr-1.5 h-4 w-4 stroke-[1.5px]" /> 
                    Contact Us
                  </p>
                </div>
                <h1 className="h1 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-accent">
                  Let's Transform Your <span className="text-accent font-bold">Creator Business</span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                  Ready to build a thriving creator community? Schedule a consultation with our expert team and discover how we can turn your vision into a profitable subscription business.
                </p>
                <Button 
                  className="btn-hover shadow-xl shadow-accent/20 bg-gradient-to-r from-accent to-accent/80 text-white font-medium text-lg px-8 py-6 rounded-xl hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 transform hover:scale-[1.02]" 
                  size="lg"
                  onClick={handleScheduleCall}
                >
                  Schedule a Strategy Consultation
                  <ChevronRight className="w-5 h-5 ml-1 stroke-[1.5px]" />
                </Button>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          {/* Enhanced background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/10 to-background"></div>
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-accent/5 to-transparent opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-gradient-to-tl from-accent/5 to-transparent opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent opacity-20 rounded-full blur-2xl"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-24 h-24 border border-accent/20 rounded-full opacity-20"></div>
          <div className="absolute top-40 right-20 w-40 h-40 border border-accent/10 rounded-full opacity-10"></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 border border-accent/15 rounded-full opacity-15"></div>
          
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
              <div className="lg:col-span-2">
                <MotionWrapper animation="fade-in-up" delay={100}>
                  <div className="mb-8 inline-flex items-center">
                    <div className="h-px w-8 bg-accent/40 mr-3"></div>
                    <p className="text-accent font-medium text-sm uppercase tracking-wider">GET IN TOUCH</p>
                  </div>
                  <h2 className="h2 mb-6 leading-tight">
                    Partner With <span className="text-accent">Experts</span> Who Understand Creators
                  </h2>
                  <p className="text-muted-foreground text-lg md:text-xl mb-10">
                    Fill out the form and our team will get back to you within 24 hours. 
                    We specialize in helping creators like you build profitable subscription communities.
                  </p>
                  
                  <div className="space-y-8 mt-12 px-6 py-8 bg-white/30 backdrop-blur-sm rounded-xl border border-accent/5 shadow-sm">
                    <div className="flex items-center group hover:text-accent transition-colors">
                      <Mail className="w-6 h-6 mr-4 text-accent stroke-[1.5px]" />
                      <span className="font-medium text-lg">support@premiercreator.com</span>
                    </div>
                    
                    <div className="flex items-center group hover:text-accent transition-colors">
                      <MapPin className="w-6 h-6 mr-4 text-accent stroke-[1.5px]" />
                      <span className="font-medium text-lg">Minneapolis, Minnesota</span>
                    </div>
                    
                    <div className="flex items-center group hover:text-accent transition-colors">
                      <Clock className="w-6 h-6 mr-4 text-accent stroke-[1.5px]" />
                      <span className="font-medium text-lg">Mon-Fri: 9AM-5PM CST</span>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <Button 
                      variant="outline"
                      className="group border-accent/30 hover:bg-accent hover:text-white transition-all duration-300 px-6 py-6 text-base rounded-xl"
                      onClick={handleScheduleCall}
                    >
                      <CalendarDays className="w-5 h-5 mr-2 stroke-[1.5px]" />
                      <span>Schedule a 30-minute strategy call</span>
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 stroke-[1.5px]" />
                    </Button>
                  </div>
                </MotionWrapper>
              </div>
              
              <div className="lg:col-span-3">
                <MotionWrapper animation="fade-in-up" delay={300}>
                  <ContactForm discordWebhookUrl={DISCORD_WEBHOOK} onFormSubmit={handleFormSubmit} />
                </MotionWrapper>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
