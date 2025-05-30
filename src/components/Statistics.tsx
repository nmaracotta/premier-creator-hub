
import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';

const stats = [
  {
    icon: TrendingUp,
    value: '$2.3M+',
    label: 'REVENUE GENERATED',
    color: 'text-green-500'
  },
  {
    icon: Users,
    value: '500+',
    label: 'CREATORS SERVED',
    color: 'text-blue-500'
  },
  {
    icon: Clock,
    value: '14 Days',
    label: 'AVERAGE LAUNCH TIME',
    color: 'text-purple-500'
  },
  {
    icon: CheckCircle,
    value: '100%',
    label: 'SUCCESS RATE',
    color: 'text-orange-500'
  }
];

const Statistics: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={200 + (index * 100)}>
              <div className="text-center">
                <div className={cn(
                  "w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center",
                  "bg-accent/10"
                )}>
                  <stat.icon className={cn("h-6 w-6", stat.color)} />
                </div>
                <div className={cn("text-2xl md:text-3xl font-bold mb-2", stat.color)}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium tracking-wider">
                  {stat.label}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
