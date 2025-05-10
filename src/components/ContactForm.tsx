
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
import { Calendar, Mail, User, Send } from 'lucide-react';

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
        // Set a session storage flag to indicate scroll reset is needed
        sessionStorage.setItem('needsScrollReset', 'true');
        
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
    <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/40 p-4 md:p-8 shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 md:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-base md:text-sm">
                    <User className="h-4 w-4 text-accent" />
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Smith" 
                      className="h-12 md:h-10 text-base md:text-sm rounded-lg" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-base md:text-sm">
                    <Mail className="h-4 w-4 text-accent" />
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="you@example.com" 
                      className="h-12 md:h-10 text-base md:text-sm rounded-lg" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-base md:text-sm">
                  <Calendar className="h-4 w-4 text-accent" />
                  Subject
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="How can we help you?" 
                    className="h-12 md:h-10 text-base md:text-sm rounded-lg" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-base md:text-sm">
                  <Calendar className="h-4 w-4 text-accent" />
                  Your Message
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us more details about your project or question..." 
                    className="min-h-[120px] md:min-h-[150px] text-base md:text-sm p-4 rounded-lg resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent/90 shadow-sm h-12 md:h-10 text-base md:text-sm px-6 md:px-8 rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
