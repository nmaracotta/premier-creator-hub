
import React from 'react';
import { 
  TrendingUp, 
  CreditCard, 
  Users, 
  BarChart3, 
  Zap, 
  Shield,
  Mail,
  Cog
} from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { Badge } from '@/components/ui/badge';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  badge: string;
  depth: 'elevated' | 'floating' | 'base';
}

const FeatureGrid: React.FC = () => {
  const features: Feature[] = [
    {
      icon: TrendingUp,
      title: "High-Converting Funnels",
      description: "Proven sales sequences that turn your audience into $2K-$10K course buyers",
      badge: "Proven",
      depth: "elevated"
    },
    {
      icon: CreditCard,
      title: "Smart Payment Processing",
      description: "Automated Stripe billing for high-ticket coaching offers and community subs",
      badge: "Automated",
      depth: "elevated"
    },
    {
      icon: Users,
      title: "Premium Member Portal",
      description: "Branded membership experience with content drip and progress tracking",
      badge: "Custom",
      depth: "elevated"
    },
    {
      icon: BarChart3,
      title: "Revenue Intelligence",
      description: "MRR, churn, LTV — see your numbers in real-time so you can optimize every launch",
      badge: "Advanced",
      depth: "base"
    },
    {
      icon: Mail,
      title: "Retention Automation",
      description: "Behavior-based email sequences that reduce churn by 40% and boost LTV on autopilot",
      badge: "Automated",
      depth: "floating"
    },
    {
      icon: Zap,
      title: "Partner Revenue Engine",
      description: "Built-in affiliate system that turns customers into revenue-generating partners",
      badge: "Proven",
      depth: "floating"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with GDPR compliance for creator businesses at scale",
      badge: "Secure",
      depth: "base"
    },
    {
      icon: Cog,
      title: "Seamless Integrations",
      description: "Connect with Calendly, Zoom, Slack, and your existing creator workflow",
      badge: "Custom",
      depth: "floating"
    }
  ];

  const getCardClasses = (depth: string) => {
    switch (depth) {
      case 'elevated':
        return 'transform hover:scale-105 hover:shadow-2xl shadow-lg bg-gradient-to-br from-white via-white to-blue-50/30 border-blue-100/50 hover:-translate-y-1 z-10';
      case 'floating':
        return 'transform hover:scale-105 hover:shadow-xl shadow-md bg-gradient-to-br from-white via-white to-purple-50/30 border-purple-100/50 hover:-translate-y-2';
      default:
        return 'transform hover:scale-105 hover:shadow-lg bg-gradient-to-br from-white to-gray-50/30 border-gray-100/50 hover:-translate-y-1';
    }
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Automated':
        return 'bg-emerald-500/20 text-emerald-700 border-emerald-300/60';
      case 'Proven':
        return 'bg-blue-500/20 text-blue-700 border-blue-300/60';
      case 'Custom':
        return 'bg-purple-500/20 text-purple-700 border-purple-300/60';
      case 'Advanced':
        return 'bg-orange-500/20 text-orange-700 border-orange-300/60';
      case 'Secure':
        return 'bg-slate-500/20 text-slate-700 border-slate-300/60';
      default:
        return 'bg-accent/20 text-accent border-accent/40';
    }
  };

  return (
    <section id="features" className="section-padding bg-gradient-to-br from-slate-50/50 via-background to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 mb-6 px-4 py-2 text-sm font-medium">
              Complete System
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Everything You Need to Monetize —
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Done For You, In One System
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From funnels to payments to analytics — we build the full backend so you can just show up and scale.
            </p>
          </div>
        </MotionWrapper>

        {/* Product Mockup */}
        <MotionWrapper animation="fade-in-up" delay={300}>
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-8 hover:shadow-3xl transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Dashboard Preview */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Revenue Dashboard</h4>
                  <p className="text-sm text-gray-600 mt-2">Real-time MRR tracking</p>
                </div>
                
                {/* Funnel Preview */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Sales Funnels</h4>
                  <p className="text-sm text-gray-600 mt-2">High-converting sequences</p>
                </div>
                
                {/* Payment Preview */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <CreditCard className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Payment Processing</h4>
                  <p className="text-sm text-gray-600 mt-2">Automated billing</p>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <MotionWrapper key={index} animation="fade-in-up" delay={400 + (index * 100)} triggerOnScroll={true}>
              <div className={`relative h-full rounded-2xl p-8 border transition-all duration-500 group ${getCardClasses(feature.depth)}`}>
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeVariant(feature.badge)}`}>
                    {feature.badge}
                  </span>
                </div>
                
                {/* Icon with animation */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 text-accent rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Enhanced hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <MotionWrapper animation="fade-in-up" delay={800} triggerOnScroll={true}>
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to see how it all works together?
            </p>
            <div className="flex flex-col items-center gap-3">
              <button className="btn-primary group pulse-glow">
                Book Your Strategy Call
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
              <p className="text-sm text-muted-foreground">
                Free call. No tech required. See how it all works.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default FeatureGrid;
