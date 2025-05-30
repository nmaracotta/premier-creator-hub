
import React, { useState, useEffect, useRef } from 'react';
import { Wrench, Rocket, TrendingUp } from 'lucide-react';

interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
  emoji: string;
  gradient: string;
}

const ProcessSteps: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const steps: ProcessStep[] = [
    {
      icon: Wrench,
      title: "We Build Everything",
      description: "Complete monetization system with funnels, payment processing, and member areas built in 14 days.",
      emoji: "🔧",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "You Focus on Creating",
      description: "Keep doing what you love while we handle all the technical infrastructure and optimization.",
      emoji: "🎨",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "You Start Monetizing",
      description: "Launch sequence that converts 10-30% of your audience into paying customers immediately.",
      emoji: "💰",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section ref={sectionRef} id="process" className="section-padding bg-white">
      <div className="container-custom">
        <div className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Our proven system that's generated millions for creators without requiring them to work harder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 0.2 + 0.3}s` }}
            >
              {/* Card Background with Gradient Border */}
              <div className="relative p-8 bg-white rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="flex items-center justify-center w-full h-full">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Floating Emoji */}
                <div className="absolute top-4 right-4 text-3xl animate-bounce group-hover:animate-ping" style={{ animationDelay: `${index * 0.2}s` }}>
                  {step.emoji}
                </div>
                
                <div className="text-center pt-8">
                  <div className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-widest">
                    Step {index + 1}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-6 text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Subtle hover effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
