
import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Clock, Shield } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
  emoji: string;
}

const ProofBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats: StatItem[] = [
    {
      icon: TrendingUp,
      value: "$2.3M+",
      label: "Revenue Generated",
      color: "text-emerald-600",
      emoji: "💰"
    },
    {
      icon: Users,
      value: "500+",
      label: "Creators Served", 
      color: "text-blue-600",
      emoji: "👥"
    },
    {
      icon: Clock,
      value: "14 Days",
      label: "Average Launch Time",
      color: "text-purple-600",
      emoji: "⚡"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Success Rate",
      color: "text-orange-600",
      emoji: "🎯"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding-sm bg-gradient-to-r from-gray-50/80 to-blue-50/40">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg border-2 border-gray-100 group-hover:border-gray-200 transition-all duration-300 group-hover:scale-110 ${stat.color}`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.emoji}
                </div>
              </div>
              
              <div className={`text-4xl lg:text-5xl font-black mb-2 ${stat.color} ${
                isVisible ? 'animate-fade-in-up' : ''
              }`} style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                {stat.value}
              </div>
              
              <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofBar;
