
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <MotionWrapper animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <div className="rounded-full bg-gradient-to-r from-accent to-accent/80 p-2 shadow-lg shadow-accent/20">
                  <Check className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h1 className="h1 mb-4">You're Booked 🎉</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We'll see you at your chosen time! Check your email for a confirmation + calendar invite. 
                In the meantime, check out how we've helped other creators go from content to cashflow.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Button onClick={addToGoogleCalendar} variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Add to Google Calendar
                </Button>
                <Button onClick={addToAppleCalendar} variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Add to Apple Calendar
                </Button>
                <Button onClick={addToOutlookCalendar} variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Add to Outlook
                </Button>
              </div>
            </div>
          </MotionWrapper>
          
          {/* Video section */}
          <MotionWrapper animation="fade-in-up" delay={200} className="max-w-3xl mx-auto mb-16">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-accent/10 flex items-center justify-center p-8 text-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Welcome Message from Our Team</h3>
                  <p className="text-muted-foreground">
                    A personalized welcome video would appear here, explaining what to expect in your upcoming strategy call.
                  </p>
                </div>
              </div>
            </Card>
          </MotionWrapper>
          
          {/* Testimonials */}
          <section className="py-16 bg-gradient-to-b from-background to-secondary/5 rounded-3xl mb-16">
            <div className="container-custom">
              <MotionWrapper animation="fade-in-up">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <p className="tag bg-accent/10 text-accent mb-3">Creator Success Stories</p>
                  <h2 className="h2 mb-4">Results You Can Expect</h2>
                  <p className="text-muted-foreground">
                    Join the creators who transformed their content into consistent income with our strategies
                  </p>
                </div>
              </MotionWrapper>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <MotionWrapper key={index} animation="fade-in-up" delay={100 * (index + 1)}>
                    <Card className="h-full border-0 shadow-lg">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                          ))}
                        </div>
                        <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.handle} • {testimonial.niche}</p>
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
