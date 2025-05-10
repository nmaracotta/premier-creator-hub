import React, { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple direct scroll approach - no animations that could cause zoom
    window.scrollTo(0, 0);
    
    console.log('CalendarPage: Scrolled to top');
    
    // Check for the flag
    if (sessionStorage.getItem('needsScrollReset') === 'true') {
      // Clear the flag
      sessionStorage.removeItem('needsScrollReset');
      console.log('CalendarPage: Cleared needsScrollReset flag');
    }
    
    // Create and load the Calendly script
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    head?.appendChild(script);
    
    // Set up Calendly event listener when the script loads
    script.onload = () => {
      setIsLoading(false);
      
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
              
              // Set flag for next page navigation
              sessionStorage.setItem('needsScrollReset', 'true');
              
              // Redirect to confirmation page after a brief delay
              setTimeout(() => {
                navigate('/booking/confirmation');
              }, 10);
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
      
      <main className="flex-grow pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="container-custom">
          <Link to="/contact" className="inline-flex items-center text-muted-foreground hover:text-accent mb-6 md:mb-8 text-base">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to contact
          </Link>
          
          <MotionWrapper animation="fade-in-up">
            <div className="text-center max-w-4xl mx-auto mb-6 md:mb-8">
              <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Lock In Your Strategy Call</h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Pick a time that works best for you. We'll come prepared with a personalized monetization plan based on your answers.
              </p>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={200} className="max-w-5xl mx-auto">
            <div className="bg-card border rounded-xl shadow-lg overflow-hidden">
              {isLoading && (
                <div className="flex items-center justify-center p-8" style={{ height: isMobile ? '500px' : '650px' }}>
                  <div className="animate-pulse h-8 w-8 rounded-full bg-accent"></div>
                </div>
              )}
              
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/premiercreator/30min"
                style={{ 
                  minWidth: '320px',
                  height: isMobile ? '600px' : '700px',
                  opacity: isLoading ? 0 : 1,
                  transition: 'opacity 0.3s ease'
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
