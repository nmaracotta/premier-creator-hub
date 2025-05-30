
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, Shield } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
}

const ProofBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats: StatItem[] = [
    {
      icon: TrendingUp,
      value: "$2.3M+",
      label: "Revenue Generated",
      color: "text-green-600"
    },
    {
      icon: Users,
      value: "500+",
      label: "Creators Served",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      value: "14 Days",
      label: "Average Launch Time",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Success Rate",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="section-padding-sm bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center ${isVisible ? 'stat-counter' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-4 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="display-md mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofBar;
