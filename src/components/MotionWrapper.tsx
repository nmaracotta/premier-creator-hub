
import React from 'react';

interface MotionWrapperProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0,
  className = ''
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`${isVisible ? animation : 'opacity-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default MotionWrapper;
