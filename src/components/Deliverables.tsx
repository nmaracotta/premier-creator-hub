
import React from 'react';
import { CheckCircle, Award, Rocket, Fuel, FilePen, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type Deliverable = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const deliverables: Deliverable[] = [
  {
    icon: Rocket,
    title: "Launch-Worthy Offers, Built for You",
    description: "We help craft irresistible, high-ticket and low-ticket offers your audience actually wants — no guesswork, just proven frameworks that sell."
  },
  {
    icon: Fuel,
    title: "Fully Automated Sales Funnel",
    description: "Set it up once and let it run. Your audience gets guided through a proven path to purchase, even while you sleep."
  },
  {
    icon: FilePen,
    title: "Plug-and-Play Content Templates",
    description: "Never stress about what to post. You'll get ready-made scripts, prompts, and swipe files built to convert."
  },
  {
    icon: Users,
    title: "High-Retention Community Design",
    description: "We create a custom space that keeps your members active, supported, and coming back — cutting churn by up to 80%."
  },
  {
    icon: TrendingUp,
    title: "Consistent Member Growth Engine",
    description: "Monthly strategies that turn 10–30% of your audience into paying members — backed by real data and testing."
  },
  {
    icon: ShieldCheck,
    title: "Zero-Risk Revenue Share Model",
    description: "We only win when you do. You keep full control, and we only earn when your community grows."
  }
];

const Deliverables: React.FC = () => {
  return (
    <section id="deliverables" className="py-24 md:py-32 bg-background relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-background fill-current rotate-180">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent text-base font-medium">What You Get</span>
            <h2 className="h2 mb-6 text-3xl md:text-4xl lg:text-5xl">Build Scalable Income Without Burnout</h2>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Ditch one-off deals and start earning reliable, recurring revenue with our proven membership growth system.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {deliverables.map((item, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={400 + (index * 70)}>
              <Card className={cn(
                "h-full p-6 lg:p-8 border border-border/50 rounded-xl",
                "bg-card hover:border-accent/30 transition-all duration-300",
                "hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1",
                "flex flex-col"
              )}>
                <div className="flex items-center mb-5">
                  <div className="p-3 rounded-xl bg-accent/10 mr-4">
                    <item.icon className="h-6 w-6 text-accent" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-lg md:text-xl">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-base mt-2">{item.description}</p>
              </Card>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper animation="fade-in-up" delay={800}>
          <div className="mt-16 lg:mt-20 p-6 lg:p-8 rounded-xl bg-accent/5 border border-accent/10">
            <p className="flex items-center justify-center text-base md:text-lg font-medium text-center">
              <Award className="h-6 w-6 text-accent mr-3" />
              Every piece is tailored to your unique brand, voice, and audience — nothing cookie-cutter.
            </p>
          </div>
        </MotionWrapper>
      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-background fill-current">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Deliverables;
