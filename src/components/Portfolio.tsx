
import React, { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import MotionWrapper from './MotionWrapper';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  client: string;
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "ACME Brand Campaign",
      category: "photography",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      client: "ACME Inc."
    },
    {
      id: 2,
      title: "Horizon Digital Experience",
      category: "video",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      client: "Horizon Tech"
    },
    {
      id: 3,
      title: "Pulse Fashion Lookbook",
      category: "photography",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      client: "Pulse Fashion"
    },
    {
      id: 4,
      title: "Nova Product Launch",
      category: "branding",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      client: "Nova Innovations"
    }
  ];

  const categories = ['all', 'photography', 'video', 'branding'];
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="work" className="py-20 md:py-32 bg-secondary/50">
      <div className="container-custom">
        <MotionWrapper animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="tag bg-white text-primary mb-3">Our Work</p>
            <h2 className="h2 mb-5">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              Explore our portfolio of award-winning work created for clients across diverse industries.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <MotionWrapper 
              key={item.id} 
              animation="fade-in-up" 
              delay={300 + index * 100}
            >
              <div className="glass-card group overflow-hidden cursor-pointer">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="p-6">
                  <span className="text-sm text-accent font-medium mb-2 block">
                    {item.client}
                  </span>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm capitalize">
                    {item.category}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

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
