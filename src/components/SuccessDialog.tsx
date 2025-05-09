
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Calendar } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
  callType?: string;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ 
  open, 
  onClose,
  callType = "strategy call" 
}) => {
  // Force dialog to be open based on the open prop
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-0 shadow-lg bg-gradient-to-b from-background to-secondary/5">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
            <MotionWrapper animation="scale-in">
              <div className="rounded-full bg-accent p-2">
                <Check className="h-8 w-8 text-white" />
              </div>
            </MotionWrapper>
          </div>
          
          <MotionWrapper animation="fade-in-up">
            <DialogTitle className="text-2xl font-bold tracking-tight">Booking Successful!</DialogTitle>
            <DialogDescription className="text-lg mt-2">
              We're excited to connect with you soon
            </DialogDescription>
          </MotionWrapper>
        </DialogHeader>

        <div className="p-6 space-y-5">
          <MotionWrapper animation="fade-in-up" delay={100}>
            <div className="glass-card p-4 flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <h4 className="font-medium">Next Steps</h4>
                <p className="text-muted-foreground mt-1">
                  Check your email for confirmation details about your {callType}. We've sent all the information you'll need.
                </p>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fade-in-up" delay={200}>
            <div className="glass-card p-4">
              <h4 className="font-medium mb-2">Prepare for your call</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span className="text-muted-foreground">Think about your key goals and challenges</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span className="text-muted-foreground">List any questions you have for our team</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span className="text-muted-foreground">Find a quiet space with good internet connection</span>
                </li>
              </ul>
            </div>
          </MotionWrapper>
        </div>

        <div className="flex flex-col space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row sm:justify-center mt-3">
          <Button onClick={onClose} className="btn-hover w-full sm:w-auto">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
