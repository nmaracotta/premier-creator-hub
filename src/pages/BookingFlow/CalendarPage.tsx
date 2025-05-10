
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MotionWrapper from '@/components/MotionWrapper';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

// Declare the Calendly types for TypeScript
declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendarPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Create and load the Calendly script
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    head?.appendChild(script);
    
    // Set up Calendly event listener when the script loads
    script.onload = () => {
      // Make sure window.Calendly is available
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/premiercreator/30min',
          parentElement: document.querySelector('.calendly-inline-widget'),
          prefill: {},
          utm: {}
        });

        // Listen for event when scheduling is completed
        window.addEventListener('message', function(e) {
          if (e.data.event && e.data.event.indexOf('calendly') === 0) {
            // When scheduling is completed
            if (e.data.event === 'calendly.event_scheduled') {
              console.log('Calendly booking completed!');
              
              // Show success toast
              toast({
                title: "Booking confirmed!",
                description: "Your strategy call has been scheduled.",
              });
              
              // Redirect to confirmation page
              setTimeout(() => {
                navigate('/booking/confirmation');
              }, 1500);
            }
          }
        });
      }
    };
    
    // Clean up when component unmounts
    return () => {
      if (script && head?.contains(script)) {
        head.removeChild(script);
      }
      
      // Remove event listener
      window.removeEventListener('message', () => {});
    };
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container-custom">
          <Link to="/contact" className="inline-flex items-center text-muted-foreground hover:text-accent mb-8 md:mb-10 text-base md:text-lg">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to contact
          </Link>
          
          <MotionWrapper animation="fade-in-up">
            <div className="text-center max-w-4xl mx-auto mb-8 md:mb-10">
              <h1 className="h1 mb-4 md:mb-6 text-4xl md:text-5xl lg:text-5xl">Lock In Your Strategy Call</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
                Pick a time that works best for you. We'll come prepared with a personalized monetization plan based on your answers.
              </p>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={200} className="max-w-5xl mx-auto">
            <div className="bg-card border rounded-xl shadow-lg p-4 md:p-0 overflow-hidden">
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/premiercreator/30min"
                style={{ 
                  minWidth: '320px',
                  height: isMobile ? '650px' : '750px'
                }}
              ></div>
            </div>
          </MotionWrapper>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalendarPage;
