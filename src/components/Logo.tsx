
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  textSize?: string;
  linkTo?: string;
  asLink?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  textSize = "text-2xl",
  linkTo = "/",
  asLink = true
}) => {
  const logoContent = (
    <div className={cn("font-bold tracking-tight", textSize, className)}>
      PC<span className="text-accent">Hub</span>
    </div>
  );

  if (asLink) {
    return (
      <Link to={linkTo} className={cn("inline-block", className)}>
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;
