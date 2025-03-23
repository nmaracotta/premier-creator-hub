
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold block mb-3">
              Premier<span className="text-accent">Creator</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-md mb-4">
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
        
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {year} Premier Creator. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-primary-foreground/60">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-primary-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
