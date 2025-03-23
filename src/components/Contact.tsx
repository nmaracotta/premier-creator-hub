
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import MotionWrapper from './MotionWrapper';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormStatus('idle');
    
    try {
      // You can replace this with an actual email service API call
      console.log('Form submission data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success handling
      setFormStatus('success');
      toast({
        title: 'Form submitted',
        description: 'We have received your message and will get back to you soon.',
      });
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      toast({
        title: 'Submission failed',
        description: 'There was an error submitting your form. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="tag bg-white text-primary mb-3">Get In Touch</p>
            <h2 className="h2 mb-5">Ready to Maximize Your Creator Income?</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Let us handle your brand deals and negotiations so you can focus on creating amazing content.
            </p>
            <Button className="btn-hover" size="lg">
              <Link to="/contact">Get Started Now</Link>
            </Button>
          </div>
        </MotionWrapper>

        <MotionWrapper animation="fade-in-up" delay={300} className="max-w-2xl mx-auto">
          <div className="glass-card p-8">
            {formStatus === 'success' && (
              <Alert className="mb-6 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <AlertTitle>Form Submitted Successfully</AlertTitle>
                <AlertDescription>
                  Thank you for your message! We'll get back to you as soon as possible.
                </AlertDescription>
              </Alert>
            )}
            
            {formStatus === 'error' && (
              <Alert className="mb-6" variant="destructive">
                <AlertCircle className="h-5 w-5" />
                <AlertTitle>Submission Failed</AlertTitle>
                <AlertDescription>
                  There was an error submitting your form. Please try again or contact us directly.
                </AlertDescription>
              </Alert>
            )}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Your name" 
                            className="bg-white/50 dark:bg-black/30 border-white/30 dark:border-white/10" 
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
                      <FormItem className="space-y-2">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Your email" 
                            type="email"
                            className="bg-white/50 dark:bg-black/30 border-white/30 dark:border-white/10" 
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
                    <FormItem className="space-y-2">
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Brand deal help, negotiation support, etc." 
                          className="bg-white/50 dark:bg-black/30 border-white/30 dark:border-white/10" 
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
                    <FormItem className="space-y-2">
                      <FormLabel>Tell us about your creator business</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Your platforms, audience size, current brand deals, and how we can help you..." 
                          rows={5}
                          className="bg-white/50 dark:bg-black/30 border-white/30 dark:border-white/10" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full btn-hover" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : "Get Started With Premier Creator"}
                </Button>
              </form>
            </Form>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Contact;
