
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import MotionWrapper from './MotionWrapper';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-white/50 dark:bg-black/30 border-white/30 dark:border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-white/50 dark:bg-black/30 border-white/30 dark:border-white/10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Brand deal help, negotiation support, etc."
                  className="bg-white/50 dark:bg-black/30 border-white/30 dark:border-white/10"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Tell us about your creator business
                </label>
                <Textarea
                  id="message"
                  placeholder="Your platforms, audience size, current brand deals, and how we can help you..."
                  rows={5}
                  className="bg-white/50 dark:bg-black/30 border-white/30 dark:border-white/10"
                />
              </div>
              
              <Button type="submit" className="w-full btn-hover" size="lg">
                Get Started With Premier Creator
              </Button>
            </form>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Contact;
