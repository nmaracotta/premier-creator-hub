import React from 'react';
import { CheckCircle, Award, Sparkles, TrendingUp, Shield } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { AspectRatio } from './ui/aspect-ratio';

type Deliverable = {
  title: string;
  description: string;
};

const deliverables: Deliverable[] = [
  {
    title: "Irresistible Membership Tiers",
    description: "$9-$997 pricing structure with proven value stacking that makes joining a no-brainer for your followers."
  },
  {
    title: "Set-and-Forget Sales Funnels",
    description: "Automated systems that sell while you sleep, converting your audience with minimal time investment from you."
  },
  {
    title: "High-Converting Content Strategy",
    description: "Ready-to-use content templates and sales scripts that feel authentic while driving consistent conversions."
  },
  {
    title: "Engagement-Focused Community",
    description: "Custom-built spaces that keep members actively participating, reducing cancellations by up to 80%."
  },
  {
    title: "Predictable Growth System",
    description: "Monthly acquisition strategies guaranteed to bring in 10-30% of your current following as paying members."
  },
  {
    title: "Risk-Free Partnership",
    description: "We only make money when you do—our performance-based model means we're invested in your success from day one."
  }
];

const Deliverables: React.FC = () => {
  return (
    <section id="deliverables" className="py-24 md:py-32 bg-background">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent text-base font-medium">What You Get</span>
            <h2 className="h2 mb-6 text-3xl md:text-4xl lg:text-5xl">Everything You Need For Reliable Income</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Stop trading time for money and start building real wealth with these proven membership assets.
            </p>
          </div>
        </MotionWrapper>

        {/* Featured Deliverable - Membership Tiers */}
        <MotionWrapper animation="fade-in-up" delay={350} className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 to-accent/20 border border-accent/10 shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {/* Left Column - Title and Description */}
                <div className="md:w-2/5">
                  <div className="inline-flex items-center justify-center p-3 bg-white/90 shadow-md rounded-2xl mb-6">
                    <Sparkles className="w-7 h-7 text-accent" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Revenue-Generating<br />Membership Ecosystem</h3>
                  
                  <p className="text-lg mb-8 text-muted-foreground">
                    Our comprehensive membership framework provides multiple income streams that work together to maximize lifetime value.
                  </p>
                  
                  <Button size="lg" className="group relative overflow-hidden transition-all">
                    <span className="relative z-10">View Success Stories</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-100 group-hover:opacity-90 transition-opacity"></span>
                  </Button>
                </div>
                
                {/* Right Column - Tiered Cards */}
                <div className="md:w-3/5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Starter Tier */}
                    <Card className="bg-white/90 shadow-md border-0 transition-all hover:shadow-lg overflow-hidden">
                      <div className="h-2 bg-accent/30"></div>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">STARTER</p>
                            <h4 className="text-2xl font-bold mt-1">$9-49</h4>
                          </div>
                          <span className="bg-accent/10 p-1.5 rounded-full">
                            <TrendingUp className="h-4 w-4 text-accent" />
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Entry-level access with basic tools and resources
                        </p>
                        <div className="mt-4 pt-4 border-t border-border/40">
                          <div className="flex items-start gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            <span className="text-sm">90% retention rate</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Pro Tier */}
                    <Card className="bg-white/95 shadow-lg border-0 relative -mt-2 md:-mt-4 z-10 transition-all hover:shadow-xl overflow-hidden">
                      <div className="h-2 bg-accent"></div>
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-0.5 bg-accent text-white text-xs rounded-full">POPULAR</span>
                      </div>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">PROFESSIONAL</p>
                            <h4 className="text-2xl font-bold mt-1">$99-199</h4>
                          </div>
                          <span className="bg-accent/20 p-1.5 rounded-full">
                            <Shield className="h-4 w-4 text-accent" />
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Complete toolkit with premium features and support
                        </p>
                        <div className="mt-4 pt-4 border-t border-border/40">
                          <div className="flex items-start gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            <span className="text-sm">96% conversion from free tier</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Elite Tier */}
                    <Card className="bg-white/90 shadow-md border-0 transition-all hover:shadow-lg overflow-hidden">
                      <div className="h-2 bg-accent/30"></div>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">ELITE</p>
                            <h4 className="text-2xl font-bold mt-1">$499-997</h4>
                          </div>
                          <span className="bg-accent/10 p-1.5 rounded-full">
                            <Sparkles className="h-4 w-4 text-accent" />
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          VIP experience with personalized strategy sessions
                        </p>
                        <div className="mt-4 pt-4 border-t border-border/40">
                          <div className="flex items-start gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            <span className="text-sm">4.8× higher LTV</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>

        {/* Other Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.slice(1).map((item, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={400 + (index * 50)}>
              <div className={cn(
                "p-6 md:p-8 rounded-xl border border-border",
                "bg-card hover:border-accent/50 transition-all duration-300",
                "flex flex-col h-full shadow-sm hover:shadow-md"
              )}>
                <div className="flex items-center mb-5">
                  <div className="p-2 rounded-lg bg-accent/10 mr-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-base">{item.description}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper animation="fade-in-up" delay={700}>
          <div className="text-center mt-16">
            <p className="inline-flex items-center text-accent font-medium text-base">
              <Award className="h-5 w-5 mr-2" />
              Each element is customized to your unique brand and audience
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Deliverables;
