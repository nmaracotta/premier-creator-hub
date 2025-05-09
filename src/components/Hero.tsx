
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, DollarSign, Rocket } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 md:pt-24">
      {/* Enhanced layered background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-accent/5 to-transparent"></div>
      <div className="absolute inset-x-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container-custom relative z-10 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          
          <MotionWrapper animation="fade-in-up" delay={400}>
            <h1 className="h1 mb-4 md:mb-6 px-2 text-gradient-primary">
              From Creator to CEO: Your Content, Your Profits
            </h1>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={500}>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Turn what you already know into a thriving membership business. We build everything you need to transform your followers into loyal, paying subscribers.
            </p>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={600}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-xl mx-auto mb-6 md:mb-8 px-4">
              <div className="flex items-center justify-center gap-2 bg-accent/10 backdrop-blur-sm rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-medium">Community Building</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-accent/10 backdrop-blur-sm rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                <DollarSign className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-medium">Recurring Revenue</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-accent/10 backdrop-blur-sm rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                <Rocket className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-medium">Growth Strategy</span>
              </div>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={700}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <Button 
                className="w-full sm:w-auto btn-hover relative overflow-hidden bg-gradient-to-r from-accent to-accent/90 shadow-lg shadow-accent/20" 
                size="lg" 
                asChild
              >
                <a href="#contact" className="group">
                  Get Your Free Revenue Plan
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </div>
      
      {/* Enhanced background decorative elements */}
      <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-accent/15 to-accent/5 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-accent/20 to-accent/5 blur-3xl animate-float"></div>
      <div className="absolute top-2/3 left-1/4 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float opacity-30"></div>
    </section>
  );
};

export default Hero;
