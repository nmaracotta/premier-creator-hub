
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Calendar, Clock, ArrowUpRight, Video } from 'lucide-react';
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
              <div className="rounded-full bg-gradient-to-r from-accent to-accent/80 p-2 shadow-lg shadow-accent/20">
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

          <MotionWrapper animation="fade-in-up" delay={300}>
            <div className="bg-accent/5 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 rounded-full p-2">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">30 Minutes</p>
                  <p className="text-sm text-muted-foreground">Strategy Session</p>
                </div>
              </div>
              <div className="bg-accent/10 rounded-full p-2">
                <Video className="h-5 w-5 text-accent" />
              </div>
            </div>
          </MotionWrapper>
        </div>

        <div className="flex flex-col space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row sm:justify-center mt-3">
          <Button
            onClick={onClose}
            className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent/80 shadow-lg shadow-accent/20"
          >
            Close
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open("https://cal.com/premiercreator/30min", "_blank")}
            className="w-full sm:w-auto flex items-center justify-center gap-1"
          >
            View Calendar <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
