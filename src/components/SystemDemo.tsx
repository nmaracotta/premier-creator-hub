
import React from 'react';
import { Play, BarChart3, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MotionWrapper from './MotionWrapper';

const SystemDemo: React.FC = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <MotionWrapper animation="fade-in-up" delay={200}>
            <div>
              <h2 className="display-md mb-6">
                See Your Monetization Engine
                <br />
                <span className="gradient-text">In Action</span>
              </h2>
              <p className="body-lg mb-8">
                Watch how our system transforms your content into consistent revenue streams. 
                From signup to sale, everything works seamlessly behind the scenes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium">Automated payment processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-medium">Member onboarding sequences</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-medium">Real-time analytics dashboard</span>
                </div>
              </div>
              
              <Button className="btn-primary">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </MotionWrapper>

          {/* Mock Dashboard */}
          <MotionWrapper animation="fade-in-up" delay={400}>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Creator Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Live</span>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-900">$12,480</div>
                    <div className="text-sm text-blue-700">This Month</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-900">247</div>
                    <div className="text-sm text-green-700">Active Members</div>
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="bg-muted/20 h-32 rounded-xl mb-6 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-muted-foreground" />
                </div>
                
                {/* Recent Activity */}
                <div className="space-y-3">
                  <div className="text-sm font-medium">Recent Activity</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>New member joined: Sarah K.</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Payment received: $97.00</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Course completion: Module 3</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default SystemDemo;
