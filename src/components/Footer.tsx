
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold block mb-3">
              Premier<span className="text-accent">Creator</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-md mb-3">
              We create exceptional digital experiences that define brands and inspire audiences worldwide.
            </p>
            <div className="flex">
              <a 
                href="https://instagram.com/premiercreator" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {year} Premier Creator. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
            nick@premiercreator.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
