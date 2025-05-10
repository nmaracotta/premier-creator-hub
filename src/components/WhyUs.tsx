
import React from 'react';
import { Award, CheckCircle, TrendingUp } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-32 md:py-40 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-accent/5 pointer-events-none"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 mb-6 px-4 py-1.5 text-base">
              Why Choose Us
            </Badge>
            <h2 className="h2 mb-8 text-4xl md:text-5xl lg:text-6xl">The $10K/Month Difference</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              We've helped creators reach consistent 5-figure monthly revenue — even with small audiences
            </p>
          </div>
        </MotionWrapper>
        
        <MotionWrapper animation="fade-in-up" delay={400}>
          <Card className={cn(
            "max-w-5xl mx-auto overflow-hidden",
            "bg-gradient-to-br from-white/80 to-white/50 dark:from-black/20 dark:to-black/10",
            "backdrop-blur-lg border border-white/20 dark:border-white/5",
            "shadow-lg shadow-accent/5",
            "relative"
          )}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
            
            <CardContent className="p-10 md:p-16 relative z-10">
              <div className="flex justify-center mb-10">
                <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="h-10 w-10 text-accent" />
                </div>
              </div>
              
              <div className="space-y-10">
                <div>
                  <p className="text-2xl md:text-3xl font-medium text-center mb-8">
                    We've helped creators reach <span className="font-bold text-accent">$10,000+ in monthly recurring revenue</span> in as little as 30 days — even with small audiences.
                  </p>
                  
                  <p className="text-muted-foreground text-center text-xl mb-10">
                    Unlike "gurus" selling courses, we build and run your entire membership business with you. Our unique revenue-sharing model means we're financially invested in making you money every single month.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { label: "Monthly revenue", value: "$10K+" },
                    { label: "Average time to launch", value: "28 Days" },
                    { label: "Member retention rate", value: "80%" }
                  ].map((stat, index) => (
                    <div key={index} className="relative group overflow-hidden">
                      <div className="absolute inset-0 bg-accent/5 rounded-lg transform scale-0 transition-transform duration-300 group-hover:scale-100"></div>
                      <div className="bg-accent/10 hover:bg-accent/15 transition-colors duration-300 rounded-lg p-8 relative">
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex items-center mb-2">
                            <h4 className="font-bold text-3xl md:text-4xl">{stat.value}</h4>
                          </div>
                          <p className="text-base text-muted-foreground">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <div className="inline-flex items-center bg-accent/5 px-6 py-3 rounded-full">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />
                    <span className="text-lg font-medium text-accent">No upfront fees — we only get paid when you do</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
        
        <MotionWrapper animation="fade-in-up" delay={500}>
          <div className="text-center mt-14">
            <div className="inline-flex items-center">
              <TrendingUp className="h-6 w-6 text-accent mr-3" />
              <p className="text-lg text-muted-foreground">
                <span className="font-medium">96% of our clients</span> hit their first $10K month within 90 days
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default WhyUs;
