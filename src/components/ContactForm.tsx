
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
import { Calendar, Mail, User, Users, MessageSquare } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(2, { message: 'Please enter a subject' }),
  message: z.string().min(5, { message: 'Please enter your message' }),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  discordWebhookUrl: string;
  onFormSubmit?: (data: ContactFormValues) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  discordWebhookUrl,
  onFormSubmit
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const handleSubmit = async (data: ContactFormValues) => {
    if (!discordWebhookUrl) {
      console.error('No Discord webhook URL provided');
      toast({
        title: "Configuration error",
        description: "Please contact the administrator.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Form submitted', data);
      
      // Format message for Discord
      const discordMessage = {
        embeds: [
          {
            title: `New Contact Form Submission: ${data.subject}`,
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
                name: "Subject",
                value: data.subject
              },
              {
                name: "Message",
                value: data.message
              }
            ],
            footer: {
              text: `Submitted at ${new Date().toLocaleString()}`
            }
          }
        ]
      };
      
      // Make the Discord webhook call async without waiting for it
      fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage),
      }).catch(error => {
        console.error('Failed to send to Discord webhook:', error);
      });
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });

      // Reset form
      form.reset();
      
      // Set flag for navigation
      if (onFormSubmit) {
        // Set a session storage flag to indicate scroll to top is needed
        sessionStorage.setItem('needsScrollReset', 'true');
        
        // Set a flag to indicate we should auto-scroll to the calendar
        sessionStorage.setItem('scrollToCalendar', 'true');
        
        // Call the onFormSubmit callback
        onFormSubmit(data);
      }
      
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

  return (
    <div className="bg-gradient-to-br from-white via-blue-50/30 to-accent/5 backdrop-blur-sm rounded-2xl border border-white/60 p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
      <div className="mb-8 pb-6 border-b border-accent/10">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground/90 mb-2">Step 1: Tell us about you</h3>
        <p className="text-muted-foreground text-base">We're excited to learn more about your project</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
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
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 text-foreground/80 font-medium mb-2.5 text-[15px]">
                  <Users className="h-[18px] w-[18px] text-accent stroke-[1.5px]" />
                  Subject
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="How can we help you?" 
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2.5 text-foreground/80 font-medium mb-2.5 text-[15px]">
                  <MessageSquare className="h-[18px] w-[18px] text-accent stroke-[1.5px]" />
                  Your Message
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us more details about your project or question..." 
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
              className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent/90 shadow-lg shadow-accent/20 text-white font-medium text-lg h-14 px-8 rounded-xl hover:translate-y-[-2px] hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 transform hover:scale-[1.02]"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
