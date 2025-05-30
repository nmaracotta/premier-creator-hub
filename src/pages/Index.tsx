
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
const FinalCTA = lazy(() => import('@/components/FinalCTA'));
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
          history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      revealElements.forEach((el) => observer.unobserve(el));
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
