
import React from 'react';
import { Button } from '@/components/ui/button';
import MotionWrapper from './MotionWrapper';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto">
            <p className="tag bg-white text-primary mb-3">Get In Touch</p>
            <h2 className="h2 mb-5">Ready to Maximize Your Creator Income?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let us handle your brand deals and negotiations so you can focus on creating amazing content.
            </p>
            <Button className="btn-hover" size="lg" asChild>
              <a href="https://cal.com/premiercreator/30min" target="_blank" rel="noopener noreferrer">
                Get Started Now
              </a>
            </Button>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Contact;
