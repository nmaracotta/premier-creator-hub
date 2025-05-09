
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be connected to a form submission handler
    console.log('Form submitted');
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <h2 className="h2 text-center mb-6">Get Your Free Revenue Strategy</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            In this 30-minute call, we'll analyze your audience and create a custom plan to generate $10K+ monthly recurring revenue from your content.
          </p>
        </MotionWrapper>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="website">Instagram/TikTok/YouTube</Label>
                <Input id="website" name="website" placeholder="@yourusername" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="followers">Audience Size</Label>
                <Input id="followers" name="followers" placeholder="e.g. 5K, 10K, 50K+" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">What's your biggest challenge with monetization right now?</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="I'm struggling with..."
                className="min-h-[100px]" 
                required 
              />
            </div>
            
            <div className="flex justify-center">
              <Button type="submit" size="lg" className="btn-hover">
                <Calendar className="mr-2 h-4 w-4" />
                Book My Free Strategy Call
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
