
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface LogoProps {
  textSize?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ textSize = "text-2xl md:text-3xl", className }) => {
  return (
    <Link 
      to="/" 
      className={cn(
        "font-bold tracking-tight flex items-center", 
        textSize, 
        className
      )}
    >
      <span>Premier</span>
      <span className="text-accent font-extrabold">Creator</span>
    </Link>
  );
};

export default Logo;
