
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, DollarSign, Rocket } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-28 pb-16 md:pb-20">
      {/* Enhanced layered background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-accent/5 to-transparent"></div>
      <div className="absolute inset-x-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container-custom relative z-10 py-12 md:py-16 lg:py-20 mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          
          <MotionWrapper animation="fade-in-up" delay={400}>
            <h1 className="h1 mb-6 md:mb-8 px-4 text-gradient-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Turn Your Audience Into Income
            </h1>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={500}>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto px-4 leading-relaxed">
              We work with creators to launch premium digital products and high ticket offers that generate real revenue. Whether you're just getting started or scaling fast, we'll build the system around your brand you just show up.
            </p>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8 md:mb-12 px-4">
              <div className="flex items-center justify-center gap-3 bg-accent/10 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <DollarSign className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="font-medium text-base md:text-lg">High Ticket Monetization</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-accent/10 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <Rocket className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="font-medium text-base md:text-lg">Done For You Setup</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-accent/10 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="font-medium text-base md:text-lg">Built for Creators</span>
              </div>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4">
              <Button 
                className="w-full sm:w-auto btn-hover relative overflow-hidden bg-gradient-to-r from-accent to-accent/90 shadow-lg shadow-accent/20 text-lg py-6 px-8" 
                size="lg" 
                asChild
              >
                <a href="#contact" className="group">
                  Start monetizing my audience
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </div>
      
      {/* Enhanced background decorative elements */}
      <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-accent/15 to-accent/5 blur-3xl animate-float opacity-70 hidden md:block"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-accent/20 to-accent/5 blur-3xl animate-float opacity-70 hidden md:block"></div>
      <div className="absolute top-2/3 left-1/4 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float opacity-30 hidden md:block"></div>
    </section>
  );
};

export default Hero;
