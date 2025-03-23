
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Globe } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string | React.ReactNode;
  delay: number;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, details, delay }) => (
  <MotionWrapper animation="fade-in-up" delay={delay}>
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <div className="text-muted-foreground">{details}</div>
      </div>
    </div>
  </MotionWrapper>
);

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: (
        <a href="mailto:hello@premiercreator.com" className="underline-animation hover:text-accent">
          hello@premiercreator.com
        </a>
      )
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Call Us",
      details: (
        <a href="tel:+1234567890" className="underline-animation hover:text-accent">
          +1 (234) 567-890
        </a>
      )
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Our Location",
      details: "123 Creative Ave, San Francisco, CA 94103"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="tag bg-white text-primary mb-3">Get In Touch</p>
            <h2 className="h2 mb-5">Start Your Project</h2>
            <p className="text-muted-foreground text-lg">
              Ready to transform your vision into reality? Reach out to discuss your project and discover how we can help elevate your brand.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((item, index) => (
              <ContactInfoItem 
                key={index}
                icon={item.icon}
                title={item.title}
                details={item.details}
                delay={index * 100 + 200}
              />
            ))}
          </div>
          
          <MotionWrapper animation="fade-in-left" delay={400} className="lg:col-span-3">
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
                    placeholder="Project inquiry"
                    className="bg-white/50 dark:bg-black/30 border-white/30 dark:border-white/10"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project"
                    rows={5}
                    className="bg-white/50 dark:bg-black/30 border-white/30 dark:border-white/10"
                  />
                </div>
                
                <Button type="submit" className="w-full btn-hover" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
