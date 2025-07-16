
import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';

const stats = [
  {
    icon: TrendingUp,
    emoji: '💰',
    value: '$2.3M+',
    label: 'REVENUE GENERATED',
    color: 'text-success',
    bgColor: 'bg-success/10'
  },
  {
    icon: Users,
    emoji: '🚀',
    value: '500+',
    label: 'CREATORS SERVED',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: Clock,
    emoji: '⚡',
    value: '14 Days',
    label: 'AVERAGE LAUNCH TIME',
    color: 'text-purple',
    bgColor: 'bg-purple/10'
  },
  {
    icon: CheckCircle,
    emoji: '✨',
    value: '100%',
    label: 'SUCCESS RATE',
    color: 'text-warning',
    bgColor: 'bg-warning/10'
  }
];

const Statistics: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={200 + (index * 100)}>
              <div className="text-center group cursor-pointer">
                <div className={cn(
                  "w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center relative overflow-hidden",
                  "transform transition-all duration-300 hover:scale-110 hover:rotate-6",
                  "hover:shadow-lg hover:shadow-accent/20",
                  stat.bgColor
                )}>
                  <stat.icon className={cn("h-8 w-8 transition-all duration-300", stat.color)} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full">
                    <span className="text-2xl animate-bounce">{stat.emoji}</span>
                  </div>
                </div>
                <div className={cn(
                  "text-3xl md:text-4xl font-bold mb-3 transition-all duration-300 group-hover:scale-105",
                  stat.color
                )}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium tracking-wider uppercase transition-colors duration-300 group-hover:text-gray-800">
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
