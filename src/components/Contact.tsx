
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Mail, User, Users, MessageSquare, Sparkles } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage 
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  socialMedia: z.string().optional(),
  audienceSize: z.string().optional(),
  message: z.string().min(5, { message: 'Please tell us about your challenges' }),
});

type ContactFormValues = z.infer<typeof formSchema>;

// Discord webhook URL (hardcoded)
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1370497633474318427/xPzOs6QCqSAmvSLnrEJ3gVD4UjIZLowWtQyG5JbvzXkLHj6ta8CR7-dLhWGBW8e4xBOS";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      socialMedia: '',
      audienceSize: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log('Form submitted from home page Contact component', data);
      
      // Format message for Discord
      const discordMessage = {
        embeds: [
          {
            title: "New Strategy Call Request",
            color: 0x3291F8, // Blue color (accent color)
            fields: [
              {
                name: "Name",
                value: data.name,
                inline: true
              },
              {
                name: "Email",
                value: data.email,
                inline: true
              },
              {
                name: "Social Media",
                value: data.socialMedia || "Not provided",
                inline: true
              },
              {
                name: "Audience Size",
                value: data.audienceSize || "Not provided",
                inline: true
              },
              {
                name: "Challenge",
                value: data.message
              }
            ],
            footer: {
              text: `Submitted at ${new Date().toLocaleString()}`
            }
          }
        ]
      };
      
      // Send to Discord webhook asynchronously but don't wait for it
      fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage),
      }).catch(err => {
        console.error('Discord webhook error:', err);
        // Continue with redirect even if webhook fails
      });
      
      toast({
        title: "Success!",
        description: "Thanks for reaching out! Redirecting to booking calendar...",
      });
      
      form.reset();
      
      // Set a session storage flag to indicate scroll to top is needed
      sessionStorage.setItem('needsScrollReset', 'true');
      
      // Set a flag to indicate we should auto-scroll to the calendar
      sessionStorage.setItem('scrollToCalendar', 'true');
      
      // Navigate to calendar page
      navigate('/booking/calendar');
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Direct call booking without form submission
  const handleDirectBooking = () => {
    // Set a session storage flag to indicate scroll to top is needed
    sessionStorage.setItem('needsScrollReset', 'true');
    
    // Set a flag to indicate we should auto-scroll to the calendar
    sessionStorage.setItem('scrollToCalendar', 'true');
    
    // Navigate to calendar page
    navigate('/booking/calendar');
  };

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-background via-blue-50/10 to-accent/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-accent/5 to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center mb-16">
            <p className="tag bg-accent/10 text-accent mb-5 inline-flex items-center px-4 py-2 rounded-full">
              <Sparkles className="mr-2 h-4 w-4 stroke-[1.5px]" />
              Unlock Your Revenue Potential
            </p>
            <h2 className="h2 mb-6 leading-tight">Get Your Custom Monetization Blueprint</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
              Join our expert strategists for a complimentary 30-minute consultation where we'll analyze your unique audience and create a 
              tailored plan to generate <span className="text-accent font-medium">$10K+ monthly recurring revenue</span> from your existing content and following.
            </p>
          </div>
        </MotionWrapper>

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/30 to-accent/5 backdrop-blur-sm dark:bg-black/20 overflow-hidden rounded-2xl">
            <CardContent className="p-0">
              {/* Progress indicator header */}
              <div className="bg-accent/10 backdrop-blur-sm p-6 border-b border-accent/10">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground/90 flex items-center">
                  <Calendar className="mr-3 h-5 w-5 text-accent stroke-[1.5px]" />
                  Step 1: Tell Us About Your Business
                </h3>
              </div>
            
              <div className="p-8 md:p-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2.5 text-foreground/80 font-medium mb-2.5 text-[15px]">
                              <User className="h-[18px] w-[18px] text-accent stroke-[1.5px]" />
                              Your Name
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Smith" 
                                className="bg-white/90 backdrop-blur-sm border-secondary-foreground/10 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:border-accent h-14 text-base md:text-lg shadow-sm rounded-xl transition-all px-5" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="mt-2.5 ml-1" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2.5 text-foreground/80 font-medium mb-2.5 text-[15px]">
                              <Mail className="h-[18px] w-[18px] text-accent stroke-[1.5px]" />
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="you@example.com" 
                                className="bg-white/90 backdrop-blur-sm border-secondary-foreground/10 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:border-accent h-14 text-base md:text-lg shadow-sm rounded-xl transition-all px-5" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="mt-2.5 ml-1" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <FormField
                        control={form.control}
                        name="socialMedia"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2.5 text-foreground/80 font-medium mb-2.5 text-[15px]">
                              <Users className="h-[18px] w-[18px] text-accent stroke-[1.5px]" />
                              Your Social Platform
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="@yourusername" 
                                className="bg-white/90 backdrop-blur-sm border-secondary-foreground/10 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:border-accent h-14 text-base md:text-lg shadow-sm rounded-xl transition-all px-5" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="mt-2.5 ml-1" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="audienceSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2.5 text-foreground/80 font-medium mb-2.5 text-[15px]">
                              <Users className="h-[18px] w-[18px] text-accent stroke-[1.5px]" />
                              Current Audience Size
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g. 5K, 10K, 50K+" 
                                className="bg-white/90 backdrop-blur-sm border-secondary-foreground/10 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:border-accent h-14 text-base md:text-lg shadow-sm rounded-xl transition-all px-5" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="mt-2.5 ml-1" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2.5 text-foreground/80 font-medium mb-2.5 text-[15px]">
                            <MessageSquare className="h-[18px] w-[18px] text-accent stroke-[1.5px]" />
                            What's your biggest monetization challenge right now?
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your goals and challenges..."
                              className="min-h-[180px] bg-white/90 backdrop-blur-sm border-secondary-foreground/10 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:border-accent text-base md:text-lg resize-none shadow-sm rounded-xl transition-all p-5" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="mt-2.5 ml-1" />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className={cn(
                          "w-full btn-hover font-medium tracking-wide text-lg h-14 px-8",
                          "bg-gradient-to-r from-accent to-accent/90",
                          "shadow-lg shadow-accent/20 rounded-xl hover:translate-y-[-2px] hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 transform hover:scale-[1.02]"
                        )}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Processing your request...</>
                        ) : (
                          <>
                            <Calendar className="mr-2 h-5 w-5 stroke-[1.5px]" />
                            {isMobile ? "Book Strategy Session" : "Secure Your Free Strategy Session"}
                          </>
                        )}
                      </Button>
                    </div>
                    
                    <div className="text-center pt-2">
                      <button 
                        type="button" 
                        onClick={handleDirectBooking}
                        className="text-accent/70 hover:text-accent transition-colors text-sm mt-4 underline-animation"
                      >
                        Skip form and schedule directly
                      </button>
                    </div>
                  </form>
                </Form>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <MotionWrapper animation="fade-in-up" delay={600} className="mt-16 text-center">
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Your information is protected by our <a href="/privacy-policy" className="text-accent underline-animation">Privacy Policy</a>. 
            We respect your data and never share it with third parties.
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Contact;
