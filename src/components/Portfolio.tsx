
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import MotionWrapper from './MotionWrapper';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', 'photography', 'video', 'branding'];

  return (
    <section id="work" className="py-20 md:py-32 bg-secondary/50">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="tag bg-white text-primary mb-3">Our Portfolio</p>
            <h2 className="h2 mb-5">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              Explore our latest work across different creative categories.
            </p>
          </div>
        </MotionWrapper>
        
        <MotionWrapper animation="fade-in-up" delay={200}>
          <div className="flex justify-center mb-12 overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className="capitalize btn-hover"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </MotionWrapper>

        <div className="text-center mt-12">
          <MotionWrapper animation="fade-in-up" delay={600}>
            <Button variant="outline" size="lg" className="btn-hover">
              View All Projects
            </Button>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
