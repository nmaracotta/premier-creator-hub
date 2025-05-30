
import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Lazy load components
const Hero = lazy(() => import('@/components/Hero'));
const SocialProof = lazy(() => import('@/components/SocialProof'));
const ProcessSteps = lazy(() => import('@/components/ProcessSteps'));
const BenefitsGrid = lazy(() => import('@/components/BenefitsGrid'));
const WhyUs = lazy(() => import('@/components/WhyUs'));
const FinalCTA = lazy(() => import('@/components/FinalCTA'));
const Contact = lazy(() => import('@/components/Contact'));

// Loading fallback
const LoadingFallback = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="animate-spin h-8 w-8 border-2 border-slate-300 border-t-slate-900 rounded-full"></div>
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
    
    // Check if we need to scroll to top after navigation
    if (sessionStorage.getItem('needsScrollReset') === 'true') {
      window.scrollTo(0, 0);
      sessionStorage.removeItem('needsScrollReset');
    }
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden flex flex-col w-full">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <SocialProof />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ProcessSteps />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <BenefitsGrid />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <WhyUs />
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
