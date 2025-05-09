
import React from 'react';
import { Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background text-foreground py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-4">
          <Logo className="mb-3" />
          <p className="text-muted-foreground max-w-md mb-3">
            Helping creators build and scale profitable subscription communities on Whop.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/premiercreator" 
              className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 text-accent" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {year} Premier Creator. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-accent">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
