
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  RadioGroup, 
  RadioGroupItem 
} from '@/components/ui/radio-group';
import { ArrowRight, Check, User, AtSign, DollarSign, Video } from 'lucide-react';
import MotionWrapper from '@/components/MotionWrapper';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name' }),
  socialHandle: z.string().min(1, { message: 'Please enter your social media handle' }),
  niche: z.string().min(1, { message: 'Please select your niche' }),
  monthlyIncome: z.string().min(1, { message: 'Please enter your current monthly income' }),
  mainPlatform: z.string().min(1, { message: 'Please enter your main platform' }),
  sellsProducts: z.string().min(1, { message: 'Please select an option' }),
  readyToLaunch: z.string().min(1, { message: 'Please select an option' }),
  biggestGoal: z.string().min(5, { message: 'Please tell us about your goals' }),
});

type ApplicationFormValues = z.infer<typeof formSchema>;

const ApplicationPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      socialHandle: '',
      niche: '',
      monthlyIncome: '',
      mainPlatform: '',
      sellsProducts: '',
      readyToLaunch: '',
      biggestGoal: '',
    },
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    console.log('Application submitted:', data);
    
    // Store the form data in session storage to use it later if needed
    sessionStorage.setItem('applicationData', JSON.stringify(data));
    
    // Send data to Discord webhook (reusing the existing webhook)
    try {
      const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1370497633474318427/xPzOs6QCqSAmvSLnrEJ3gVD4UjIZLowWtQyG5JbvzXkLHj6ta8CR7-dLhWGBW8e4xBOS";
      
      const discordMessage = {
        embeds: [
          {
            title: "New Strategy Call Application",
            color: 0x3291F8,
            fields: [
              { name: "Name", value: data.name, inline: true },
              { name: "Social Handle", value: data.socialHandle, inline: true },
              { name: "Niche", value: data.niche, inline: true },
              { name: "Monthly Income", value: data.monthlyIncome, inline: true },
              { name: "Main Platform", value: data.mainPlatform, inline: true },
              { name: "Sells Products", value: data.sellsProducts, inline: true },
              { name: "Ready to Launch", value: data.readyToLaunch, inline: true },
              { name: "Biggest Goal", value: data.biggestGoal }
            ],
            footer: {
              text: `Submitted at ${new Date().toLocaleString()}`
            }
          }
        ]
      };
      
      await fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordMessage),
      });
    } catch (error) {
      console.error('Failed to send data to Discord:', error);
    }
    
    toast({
      title: "Application submitted!",
      description: "Now let's get you scheduled for your strategy call.",
    });
    
    navigate('/booking/calendar');
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-background to-secondary/5">
      <div className="container-custom max-w-2xl">
        <MotionWrapper animation="fade-in-up">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-3">Quick Questionnaire</h1>
            <p className="text-lg text-muted-foreground">
              Help us understand your business better so we can provide maximum value on our call
            </p>
          </div>
          
          <div className="glass-card border-0 shadow-lg p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <Input placeholder="John Smith" className="bg-secondary/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="socialHandle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <AtSign className="h-4 w-4 text-accent" />
                        Instagram/TikTok Handle
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="@yourusername" className="bg-secondary/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="niche"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Content Niche</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-secondary/10">
                            <SelectValue placeholder="Select your niche" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Fitness">Fitness</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                          <SelectItem value="Gaming">Gaming</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="monthlyIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-accent" />
                        Current Monthly Income From Your Brand
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. $1,000" className="bg-secondary/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="mainPlatform"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-accent" />
                        Main Platform(s)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Instagram, YouTube, TikTok" className="bg-secondary/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="sellsProducts"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Do you sell anything already?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Yes" />
                            </FormControl>
                            <FormLabel className="font-normal">Yes</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="No" />
                            </FormControl>
                            <FormLabel className="font-normal">No</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="readyToLaunch"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Are you ready to launch something in the next 30 days?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Yes" />
                            </FormControl>
                            <FormLabel className="font-normal">Yes</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="No" />
                            </FormControl>
                            <FormLabel className="font-normal">No</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="biggestGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your biggest goal for the next 90 days?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="I want to..."
                          className="min-h-[120px] bg-secondary/10" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-accent to-accent/90 shadow-lg shadow-accent/20 mt-4 font-medium text-lg"
                >
                  Submit & Lock In Your Spot <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Form>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default ApplicationPage;
