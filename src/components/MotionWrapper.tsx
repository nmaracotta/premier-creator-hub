
import React, { useEffect, useRef, useState } from 'react';

interface MotionWrapperProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
  triggerOnScroll?: boolean;
  threshold?: number;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0,
  className = '',
  triggerOnScroll = false,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(!triggerOnScroll);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerOnScroll) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setTimeout(() => {
            setIsVisible(true);
            setHasTriggered(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, triggerOnScroll, threshold, hasTriggered]);

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-700 ${isVisible ? animation : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
};

export default MotionWrapper;
