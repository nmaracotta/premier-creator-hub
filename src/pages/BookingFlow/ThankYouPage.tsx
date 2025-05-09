
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Calendar } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/5">
      <div className="container-custom max-w-2xl">
        <MotionWrapper animation="fade-in-up" className="text-center">
          <div className="glass-card p-12 border-0 shadow-lg">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
              <div className="rounded-full bg-gradient-to-r from-accent to-accent/80 p-3 shadow-lg shadow-accent/20">
                <Check className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              You're Booked. Let's Make This Big.
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              Check your email for a calendar invite. We'll review your info and come prepared 
              with ideas to help you grow fast.
            </p>
            
            <div className="bg-accent/5 rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Client" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Fitness Creator, 500K+ followers</p>
                </div>
              </div>
              <p className="text-left italic">
                "Working with Premier Creator transformed my business. Within 60 days, I launched my 
                first digital product and generated $23,000 in sales to my Instagram audience."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="w-full sm:w-auto"
              >
                Return to Homepage
              </Button>
              
              <Button 
                onClick={() => window.open('https://cal.com/premiercreator/30min', '_blank')}
                className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent/90 shadow-lg shadow-accent/20"
              >
                <Calendar className="mr-2 h-4 w-4" />
                View Your Booking
              </Button>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default ThankYouPage;
