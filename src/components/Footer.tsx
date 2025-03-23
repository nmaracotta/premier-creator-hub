
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const serviceItems = [
    'Photography', 'Videography', 'Content Production', 
    'Visual Design', 'Digital Strategy', 'Audio Production'
  ];
  
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-6 block">
              Premier<span className="text-accent">Creator</span>
            </Link>
            <p className="mb-6 max-w-md text-primary-foreground/80">
              We create exceptional digital experiences that define brands and inspire audiences worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline-animation"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceItems.map((item) => (
                <li key={item}>
                  <Link 
                    to="/contact" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline-animation"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
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
