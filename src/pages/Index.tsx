
import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Lazy load components
const Hero = lazy(() => import('@/components/Hero'));
const ProofBar = lazy(() => import('@/components/ProofBar'));
const ProcessSteps = lazy(() => import('@/components/ProcessSteps'));
const FeatureGrid = lazy(() => import('@/components/FeatureGrid'));
const SystemDemo = lazy(() => import('@/components/SystemDemo'));
const WhyUs = lazy(() => import('@/components/WhyUs'));
const CreatorTestimonials = lazy(() => import('@/components/CreatorTestimonials'));
const FinalCTA = lazy(() => import('@/components/FinalCTA'));
const Contact = lazy(() => import('@/components/Contact'));

// Loading fallback
const LoadingFallback = () => {
  console.log('Loading component...');
  return (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="animate-spin h-8 w-8 border-2 border-blue-600 border-t-transparent rounded-full"></div>
    </div>
  );
};

const Index: React.FC = () => {
  console.log('Index component mounting...');

  useEffect(() => {
    console.log('Index component mounted');
    
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
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
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ProofBar />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ProcessSteps />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <FeatureGrid />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <SystemDemo />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <CreatorTestimonials />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <FinalCTA />
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
