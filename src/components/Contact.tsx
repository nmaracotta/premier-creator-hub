import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Mail, User, Users } from 'lucide-react';
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
      console.log('Form submitted', data);
      
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
      
      // Immediately redirect to calendar page without waiting for Discord
      // First scroll to top to avoid being stuck at bottom
      window.scrollTo(0, 0);
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
    // Ensure we're at the top before navigation
    window.scrollTo(0, 0);
    navigate('/booking/calendar');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-accent/5 to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center mb-14">
            <p className="tag bg-accent/10 text-accent mb-4 inline-flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              Unlock Your Revenue Potential
            </p>
            <h2 className="h2 mb-4">Get Your Custom Monetization Blueprint</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Join our expert strategists for a complimentary 30-minute consultation where we'll analyze your unique audience and create a 
              tailored plan to generate <span className="text-accent font-medium">$10K+ monthly recurring revenue</span> from your existing content and following.
            </p>
          </div>
        </MotionWrapper>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="h-4 w-4 text-accent" />
                            Your Name
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Smith" 
                              className="bg-secondary/20" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-accent" />
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="you@example.com" 
                              className="bg-secondary/20" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="socialMedia"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-accent" />
                            Your Social Platform
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="@yourusername" 
                              className="bg-secondary/20" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="audienceSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-accent" />
                            Current Audience Size
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g. 5K, 10K, 50K+" 
                              className="bg-secondary/20" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-accent" />
                          What's your biggest monetization challenge right now?
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your goals and challenges..."
                            className="min-h-[120px] bg-secondary/20" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className={cn(
                        "w-full btn-hover font-medium tracking-wide",
                        "bg-gradient-to-r from-accent to-accent/90",
                        "shadow-lg shadow-accent/20"
                      )}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing your request...</>
                      ) : (
                        <>
                          <Calendar className="mr-2 h-4 w-4" />
                          Secure Your Free Strategy Session
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="text-center pt-4">
                    <button 
                      type="button" 
                      onClick={handleDirectBooking}
                      className="text-accent underline-animation text-sm"
                    >
                      Skip form and schedule directly
                    </button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        
        <MotionWrapper animation="fade-in-up" delay={600} className="mt-16 text-center">
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Your information is protected by our <a href="#" className="text-accent underline-animation">Privacy Policy</a>. 
            We respect your data and never share it with third parties.
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Contact;
