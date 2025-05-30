
import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';

const stats = [
  {
    icon: TrendingUp,
    value: '$2.3M+',
    label: 'REVENUE GENERATED',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: Users,
    value: '500+',
    label: 'CREATORS SERVED',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: Clock,
    value: '14 Days',
    label: 'AVERAGE LAUNCH TIME',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: CheckCircle,
    value: '100%',
    label: 'SUCCESS RATE',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  }
];

const Statistics: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={200 + (index * 100)}>
              <div className="text-center">
                <div className={cn(
                  "w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center",
                  stat.bgColor
                )}>
                  <stat.icon className={cn("h-8 w-8", stat.color)} />
                </div>
                <div className={cn("text-3xl md:text-4xl font-bold mb-3", stat.color)}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium tracking-wider uppercase">
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
