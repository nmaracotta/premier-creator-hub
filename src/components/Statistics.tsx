
import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

const stats = [
  {
    icon: TrendingUp,
    value: '$2.3M+',
    label: 'REVENUE GENERATED',
  },
  {
    icon: Users,
    value: '500+',
    label: 'CREATORS SERVED',
  },
  {
    icon: Clock,
    value: '14 Days',
    label: 'AVERAGE LAUNCH TIME',
  },
  {
    icon: CheckCircle,
    value: '100%',
    label: 'SUCCESS RATE',
  }
];

const Statistics: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={200 + (index * 100)}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
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
