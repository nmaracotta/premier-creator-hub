
import React, { useEffect, useRef, ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'blur-in' | 'scale-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = '',
  once = true
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = '0';
            element.style.animation = `${animation} ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`;
            element.style.animationDelay = `${delay}ms`;
            
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            // If not using "once", reset the animation when out of view
            const element = entry.target as HTMLElement;
            element.style.opacity = '0';
            element.style.animation = 'none';
          }
        });
      },
      { threshold, rootMargin: '10px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, delay, duration, threshold, once]);

  return (
    <div ref={ref} style={{ opacity: 0 }} className={className}>
      {children}
    </div>
  );
};

export default MotionWrapper;
