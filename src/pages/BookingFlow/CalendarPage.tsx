
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MotionWrapper from '@/components/MotionWrapper';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const CalendarPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <Link to="/contact" className="inline-flex items-center text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to contact
          </Link>
          
          <MotionWrapper animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="h1 mb-4">Lock In Your Strategy Call</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Pick a time that works best for you. We'll come prepared with a personalized monetization plan based on your answers.
              </p>
            </div>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-in-up" delay={200} className="max-w-4xl mx-auto">
            <div className="bg-card border rounded-xl shadow-lg p-4 md:p-0 overflow-hidden">
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/premiercreator/30min"
                style={{ 
                  minWidth: '320px',
                  height: '700px'
                }}
              ></div>
            </div>
          </MotionWrapper>
        </div>
      </main>
      
      <Footer />
      
      {/* Calendly Loading Script */}
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </div>
  );
};

export default CalendarPage;
