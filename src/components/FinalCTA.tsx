
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Clock, Users, Shield } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Premium dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <MotionWrapper animation="fade-in-up" delay={300}>
          <Card className={cn(
            "max-w-4xl mx-auto overflow-hidden bg-white text-slate-900 rounded-3xl shadow-2xl"
          )}>
            <CardContent className="p-12 md:p-16 text-center">
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Build Your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Revenue Engine?
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                We only work with 5 creators per month to ensure exceptional results. 
                Book your free strategy call before all spots are filled.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <Button 
                  size="lg" 
                  className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-6 h-16 text-lg font-bold rounded-xl shadow-lg w-full sm:w-auto" 
                  asChild
                >
                  <a href="#contact" className="group">
                    Book Strategy Call
                    <Calendar className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
                
                <div className="text-slate-500 text-sm">
                  Free consultation • No commitment
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { icon: Clock, text: "30-Minute Strategy Session" },
                  { icon: Users, text: "Only 5 Spots Available" },
                  { icon: Shield, text: "Revenue Guarantee Included" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center gap-3 bg-slate-50 rounded-xl py-4 px-6">
                    <item.icon className="h-5 w-5 text-slate-600" />
                    <span className="text-sm font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default FinalCTA;
