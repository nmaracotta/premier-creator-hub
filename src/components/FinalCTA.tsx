
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Shield, Users } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-accent/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <Card className={cn(
            "max-w-4xl mx-auto overflow-hidden",
            "bg-gradient-to-br from-accent to-accent/90 text-white",
            "shadow-xl shadow-accent/20",
            "border border-accent/20",
            "rounded-2xl"
          )}>
            <CardContent className="p-8 md:p-12 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-6 uppercase tracking-wider text-sm px-3 py-1">
                  Limited Availability
                </Badge>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  Ready to Transform Your Content<br className="hidden md:block" /> into Consistent Income?
                </h2>
                
                <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                  We only work with 5 new creators each month to ensure personal attention and exceptional results. Schedule your free revenue strategy call now before all spots fill up.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <Button 
                    size="lg" 
                    className="bg-white text-accent hover:bg-white/90 border-2 border-transparent transition-all duration-300 group shadow-lg shadow-accent/20 w-full sm:w-auto text-base py-5 px-8" 
                    asChild
                  >
                    <a href="#contact">
                      Claim Your Free Strategy Call
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {[
                    { icon: Calendar, text: "30-Minute Action Plan" },
                    { icon: Users, text: "Only 5 Spots Monthly" },
                    { icon: Shield, text: "No Obligation Consultation" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 bg-white/10 rounded-lg py-3 px-4">
                      <item.icon className="h-5 w-5 text-white/80" />
                      <span className="text-sm md:text-base font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default FinalCTA;
