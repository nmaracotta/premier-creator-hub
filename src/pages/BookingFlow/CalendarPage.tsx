
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Check } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';

const CalendarPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Function to handle completion of calendar booking
  const handleCalendarBooked = () => {
    navigate('/booking/thank-you');
  };
  
  // Function to detect Cal.com booking completion
  React.useEffect(() => {
    // Listen for messages from the Cal.com iframe
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from Cal.com and indicates a completed booking
      if (
        event.data &&
        typeof event.data === 'object' &&
        event.data.type === 'CAL:BOOKING_SUCCESSFUL'
      ) {
        console.log('Calendar booking detected:', event.data);
        handleCalendarBooked();
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-background to-secondary/5">
      <div className="container-custom max-w-3xl">
        <MotionWrapper animation="fade-in-up">
          <div className="text-center mb-8">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <div className="rounded-full bg-gradient-to-r from-accent to-accent/80 p-2 shadow-lg shadow-accent/20">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight mb-3">Choose a Time That Works for You</h1>
            <p className="text-lg text-muted-foreground mb-6">
              You're officially on our radar. Book your call and let's build something big.
            </p>
          </div>
          
          <div className="glass-card border-0 shadow-lg p-4 md:p-6">
            <div className="aspect-[4/3] w-full bg-secondary/10 rounded-lg overflow-hidden">
              {/* Cal.com Calendar Embed */}
              <iframe
                src="https://cal.com/premiercreator/30min"
                className="w-full h-full"
                frameBorder="0"
                title="Book a call"
                data-testid="cal-embed"
              ></iframe>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Not seeing times that work for you? 
                <Button 
                  variant="link" 
                  className="text-accent"
                  onClick={() => window.open('mailto:hello@premiercreator.com')}
                >
                  Contact us directly
                </Button>
              </p>
              
              {/* Manual completion button as a fallback if the iframe message isn't detected */}
              <Button
                onClick={handleCalendarBooked}
                variant="outline"
                className="mt-2"
              >
                I've completed my booking
              </Button>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default CalendarPage;
