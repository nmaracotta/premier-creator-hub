
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Check, Star } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';

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
      
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container-custom">
          <MotionWrapper animation="fade-in-up">
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
              <div className="mx-auto mb-6 md:mb-8 flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-accent/10">
                <div className="rounded-full bg-gradient-to-r from-accent to-accent/80 p-2 md:p-3 shadow-lg shadow-accent/20">
                  <Check className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
              </div>
              
              <h1 className="h1 mb-4 md:mb-6 text-4xl md:text-5xl">You're Booked 🎉</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
                We'll see you at your chosen time! Check your email for a confirmation + calendar invite. 
                In the meantime, check out how we've helped other creators go from content to cashflow.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10">
                <Button onClick={addToGoogleCalendar} variant="outline" className="flex items-center gap-2 py-5 px-4 md:py-6 md:px-5 text-sm md:text-base">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                  Add to Google Calendar
                </Button>
                <Button onClick={addToAppleCalendar} variant="outline" className="flex items-center gap-2 py-5 px-4 md:py-6 md:px-5 text-sm md:text-base">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                  Add to Apple Calendar
                </Button>
                <Button onClick={addToOutlookCalendar} variant="outline" className="flex items-center gap-2 py-5 px-4 md:py-6 md:px-5 text-sm md:text-base">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                  Add to Outlook
                </Button>
              </div>
            </div>
          </MotionWrapper>
          
          {/* Video section */}
          <MotionWrapper animation="fade-in-up" delay={200} className="max-w-4xl mx-auto mb-16 md:mb-20">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-accent/10 flex items-center justify-center p-8 md:p-10 text-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Welcome Message from Our Team</h3>
                  <p className="text-muted-foreground text-base md:text-lg">
                    A personalized welcome video would appear here, explaining what to expect in your upcoming strategy call.
                  </p>
                </div>
              </div>
            </Card>
          </MotionWrapper>
          
          {/* Testimonials */}
          <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/5 rounded-2xl md:rounded-3xl mb-12 md:mb-16">
            <div className="container-custom">
              <MotionWrapper animation="fade-in-up">
                <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
                  <p className="tag bg-accent/10 text-accent mb-4 px-4 py-1.5 md:px-5 md:py-2 text-sm md:text-base">Creator Success Stories</p>
                  <h2 className="h2 mb-5 md:mb-6 text-3xl md:text-4xl lg:text-5xl">Results You Can Expect</h2>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Join the creators who transformed their content into consistent income with our strategies
                  </p>
                </div>
              </MotionWrapper>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {testimonials.map((testimonial, index) => (
                  <MotionWrapper key={index} animation="fade-in-up" delay={100 * (index + 1)}>
                    <Card className="h-full border-0 shadow-lg">
                      <CardContent className="p-6 md:p-8 flex flex-col h-full">
                        <div className="mb-4 md:mb-5 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-accent fill-accent" />
                          ))}
                        </div>
                        <p className="text-lg md:text-xl mb-6 md:mb-8 flex-grow">{testimonial.quote}</p>
                        <div>
                          <p className="font-semibold text-base md:text-lg">{testimonial.name}</p>
                          <p className="text-sm md:text-base text-muted-foreground">{testimonial.handle} • {testimonial.niche}</p>
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
