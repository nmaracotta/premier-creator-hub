
import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Lazy load components
const Hero = lazy(() => import('@/components/Hero'));
const Services = lazy(() => import('@/components/Services'));
const About = lazy(() => import('@/components/About'));
const Contact = lazy(() => import('@/components/Contact'));

// Loading fallback
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-pulse h-8 w-8 rounded-full bg-accent"></div>
  </div>
);

const Index: React.FC = () => {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Update URL without page jump
          history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
