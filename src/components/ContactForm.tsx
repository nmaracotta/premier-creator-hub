
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Mail, User, MessageCircle } from 'lucide-react';
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
  subject: z.string().min(2, { message: 'Please enter a subject' }),
  message: z.string().min(5, { message: 'Please enter your message' }),
});

type ContactFormValues = z.infer<typeof formSchema>;

type ContactFormProps = {
  discordWebhookUrl: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ discordWebhookUrl }) => {
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

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log('Form submitted', data);
      
      // Format message for Discord
      const discordMessage = {
        embeds: [
          {
            title: "New Contact Form Submission",
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
                value: data.subject,
                inline: false
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
      
      // Send to Discord webhook using the provided URL
      const webhookResponse = await fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage),
      });
      
      if (!webhookResponse.ok) {
        throw new Error('Failed to send to Discord webhook');
      }
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out! We'll contact you shortly.",
      });
      
      form.reset();
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
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-accent" />
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="What's this about?" 
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
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-accent" />
                    Your Message
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project or inquiry..."
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
                  <>Processing...</>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
