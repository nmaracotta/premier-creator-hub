import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Check, Star } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

// Testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    handle: "@sarahjcreates",
    quote: "In just 60 days after our strategy call, we launched a course that generated $43,000 in our first week. Their guidance was exactly what I needed.",
    niche: "Fitness"
  },
  {
    name: "Mark Peterson",
    handle: "@markteachestech",
    quote: "I went from sporadic brand deals to a consistent $18K monthly revenue with the strategy they helped me develop. Worth every minute of that call!",
    niche: "Education"
  },
  {
    name: "Alex Rivera",
    handle: "@alexcooks",
    quote: "After struggling to monetize my 500K following, their team helped me launch a membership that now brings in $12K monthly. Total game changer.",
    niche: "Cooking"
  }
];

const ConfirmationPage: React.FC = () => {
  const isMobile = useIsMobile();
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to top when confirmation page loads
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    console.log('ConfirmationPage: Scrolled to top');
    
    // Check for the confirmation scroll flag
    if (sessionStorage.getItem('confirmationScrollTop') === 'true') {
      // Give a small delay to ensure the content is rendered
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          console.log('ConfirmationPage: Scrolled to content section');
        }
        // Clear the flag
        sessionStorage.removeItem('confirmationScrollTop');
      }, 300);
    }
    
    return () => {
      // Clean up by removing any potential flags when leaving
      sessionStorage.removeItem('confirmationScrollTop');
    };
  }, []);
  
  const addToGoogleCalendar = () => {
    window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Strategy Call with Premier Creator&details=Get ready for your personalized creator strategy call. We'll review your brand and prepare a customized monetization plan.&dates=20240510T160000Z/20240510T170000Z", "_blank");
  };
  
  const addToAppleCalendar = () => {
    window.open("https://calendly.com/premiercreator/30min", "_blank");
  };
  
  const addToOutlookCalendar = () => {
    window.open("https://outlook.office.com/calendar/action/compose?subject=Strategy Call with Premier Creator&body=Get ready for your personalized creator strategy call. We'll review your brand and prepare a customized monetization plan.&startdt=2024-05-10T16:00:00Z&enddt=2024-05-10T17:00:00Z", "_blank");
  };
  
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="container-custom">
          <MotionWrapper animation="fade-in-up">
            <div ref={contentRef} className="text-center max-w-4xl mx-auto mb-8 md:mb-12 scroll-mt-24">
              <div className="mx-auto mb-4 md:mb-6 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-accent/10">
                <div className="rounded-full bg-gradient-to-r from-accent to-accent/80 p-2 shadow-lg shadow-accent/20">
                  <Check className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
              </div>
              
              <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">You're Booked 🎉</h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                We'll see you at your chosen time! Check your email for a confirmation + calendar invite. 
                In the meantime, check out how we've helped other creators go from content to cashflow.
              </p>
              
              {isMobile ? (
                <div className="flex flex-col gap-3 mb-6">
                  <Button onClick={addToGoogleCalendar} variant="outline" className="flex items-center justify-center gap-2 py-4 px-4">
                    <Calendar className="h-4 w-4" />
                    Add to Google Calendar
                  </Button>
                  <Button onClick={addToAppleCalendar} variant="outline" className="flex items-center justify-center gap-2 py-4 px-4">
                    <Calendar className="h-4 w-4" />
                    Add to Apple Calendar
                  </Button>
                  <Button onClick={addToOutlookCalendar} variant="outline" className="flex items-center justify-center gap-2 py-4 px-4">
                    <Calendar className="h-4 w-4" />
                    Add to Outlook
                  </Button>
                </div>
              ) : (
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                  <Button onClick={addToGoogleCalendar} variant="outline" className="flex items-center gap-2 py-4 px-4 md:py-5 md:px-5">
                    <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                    Add to Google Calendar
                  </Button>
                  <Button onClick={addToAppleCalendar} variant="outline" className="flex items-center gap-2 py-4 px-4 md:py-5 md:px-5">
                    <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                    Add to Apple Calendar
                  </Button>
                  <Button onClick={addToOutlookCalendar} variant="outline" className="flex items-center gap-2 py-4 px-4 md:py-5 md:px-5">
                    <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                    Add to Outlook
                  </Button>
                </div>
              )}
            </div>
          </MotionWrapper>
          
          {/* Video section */}
          <MotionWrapper animation="fade-in-up" delay={200} className="max-w-4xl mx-auto mb-12 md:mb-16">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-accent/10 flex items-center justify-center p-6 md:p-8 text-center">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Welcome Message from Our Team</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    A personalized welcome video would appear here, explaining what to expect in your upcoming strategy call.
                  </p>
                </div>
              </div>
            </Card>
          </MotionWrapper>
          
          {/* Testimonials */}
          <section className="py-10 md:py-16 bg-gradient-to-b from-background to-secondary/5 rounded-2xl mb-8 md:mb-12">
            <div className="container-custom">
              <MotionWrapper animation="fade-in-up">
                <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
                  <p className="tag bg-accent/10 text-accent mb-3 px-3 py-1 md:px-4 md:py-1.5 text-sm">Creator Success Stories</p>
                  <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">Results You Can Expect</h2>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Join the creators who transformed their content into consistent income with our strategies
                  </p>
                </div>
              </MotionWrapper>
              
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
                {testimonials.map((testimonial, index) => (
                  <MotionWrapper key={index} animation="fade-in-up" delay={100 * (index + 1)}>
                    <Card className="h-full border-0 shadow-lg">
                      <CardContent className="p-5 md:p-6 flex flex-col h-full">
                        <div className="mb-3 md:mb-4 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-accent fill-accent" />
                          ))}
                        </div>
                        <p className="text-sm md:text-base mb-4 md:mb-6 flex-grow">{testimonial.quote}</p>
                        <div>
                          <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{testimonial.handle} • {testimonial.niche}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConfirmationPage;
