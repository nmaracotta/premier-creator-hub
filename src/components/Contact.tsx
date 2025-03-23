
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Globe, DollarSign, Users, Shield } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { Link } from 'react-router-dom';

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
        <a href="mailto:creators@premiercreator.com" className="underline-animation hover:text-accent">
          creators@premiercreator.com
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
      details: "123 Creator Ave, San Francisco, CA 94103"
    }
  ];

  const creatorBenefits = [
    { icon: <DollarSign className="w-5 h-5" />, text: "40% Average Revenue Increase" },
    { icon: <Shield className="w-5 h-5" />, text: "100% Payment Protection" },
    { icon: <Users className="w-5 h-5" />, text: "1-on-1 Management Support" }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="tag bg-white text-primary mb-3">Get In Touch</p>
            <h2 className="h2 mb-5">Ready to Maximize Your Creator Income?</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Let us handle your brand deals and negotiations so you can focus on creating amazing content.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {creatorBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  {benefit.icon}
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
            <Button className="btn-hover" size="lg">
              <Link to="/contact">Get Started Now</Link>
            </Button>
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

            <MotionWrapper animation="fade-in-up" delay={500}>
              <div className="bg-white/10 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-semibold mb-3">Ready for better brand deals?</h3>
                <p className="text-muted-foreground mb-4">Schedule a free 30-minute strategy call to see how we can help maximize your creator income.</p>
                <Button className="w-full btn-hover" size="sm">
                  <Link to="/contact">Book Strategy Call</Link>
                </Button>
              </div>
            </MotionWrapper>
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
      </div>
    </section>
  );
};

export default Contact;
