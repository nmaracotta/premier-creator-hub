
import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Copyright } from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-background via-secondary/10 to-background text-foreground py-16 border-t border-border relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-accent/10 to-transparent opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent opacity-20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12 border-b border-border/50 pb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Logo className="mb-4 h-8 w-auto" />
            <p className="text-muted-foreground max-w-md mb-6">
              Empowering creators to build thriving subscription communities. We handle the technology and strategy while you focus on what you do best — creating exceptional content.
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
              <a 
                href="https://twitter.com/premiercreator" 
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 text-accent" />
              </a>
              <a 
                href="https://linkedin.com/company/premiercreator" 
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-accent underline-animation">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent underline-animation">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent underline-animation">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-accent underline-animation">Whop Setup</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent underline-animation">Community Building</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent underline-animation">Content Strategy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent underline-animation">Audience Growth</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">support@premiercreator.com</li>
              <li className="text-muted-foreground">Los Angeles, CA</li>
              <li className="mt-4">
                <Link to="/contact" className="text-accent hover:text-accent/80 font-medium underline-animation">
                  Get In Touch →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <div className="flex items-center text-muted-foreground text-sm mb-4 md:mb-0">
            <Copyright className="w-4 h-4 mr-1" /> 
            <span>{year} Premier Creator. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-accent">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
