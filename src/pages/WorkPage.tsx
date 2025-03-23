
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const WorkPage: React.FC = () => {
  const caseStudies = [
    {
      title: "Global Tech Rebrand",
      client: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6",
      description: "A complete rebranding initiative that transformed a legacy tech company into a modern innovation leader.",
      results: ["150% increase in brand recognition", "37% growth in customer acquisition", "Award-winning design"]
    },
    {
      title: "Luxury Product Launch",
      client: "Elegance Group",
      image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890",
      description: "Crafted an immersive digital experience for the launch of a new luxury product line that captivated the target audience.",
      results: ["Sold out within 48 hours", "Featured in top 5 fashion publications", "2.3M social media impressions"]
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container-custom">
            <MotionWrapper animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="tag bg-secondary text-secondary-foreground mb-3">Our Work</p>
                <h1 className="h1 mb-5">Award-Winning Projects</h1>
                <p className="text-muted-foreground text-lg">
                  Explore our portfolio of creative work that drives results and sets new industry standards.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>
        
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container-custom">
            <MotionWrapper animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="tag bg-secondary text-secondary-foreground mb-3">Case Studies</p>
                <h2 className="h2 mb-5">Success Stories</h2>
                <p className="text-muted-foreground text-lg">
                  Dive deeper into our most impactful projects and the results we delivered.
                </p>
              </div>
            </MotionWrapper>

            <div className="space-y-20">
              {caseStudies.map((study, index) => (
                <MotionWrapper key={index} animation="fade-in-up" delay={200}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className={index % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                      <div className="glass-card overflow-hidden">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={study.image}
                            alt={study.title}
                            className="object-cover w-full h-full"
                            loading="lazy"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                    <div className={index % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                      <span className="text-sm text-accent font-medium mb-2 block">
                        {study.client}
                      </span>
                      <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
                      <p className="text-muted-foreground mb-6">
                        {study.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkPage;
