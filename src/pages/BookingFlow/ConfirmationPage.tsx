
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/booking/application');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/5">
      <div className="container-custom max-w-2xl">
        <MotionWrapper animation="fade-in-up" className="text-center">
          <div className="glass-card p-12 border-0 shadow-lg">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
              <div className="rounded-full bg-gradient-to-r from-accent to-accent/80 p-3 shadow-lg shadow-accent/20">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              You're One Step Away From Scaling Your Creator Business
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Tell us a bit more so we can prep for your strategy call and provide you with maximum value.
            </p>
            
            <Button 
              onClick={handleContinue}
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/90 shadow-lg shadow-accent/20 w-full sm:w-auto font-medium text-lg"
            >
              Continue to Quick Questionnaire <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default ConfirmationPage;
