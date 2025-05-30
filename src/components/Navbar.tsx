
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "How It Works", path: "#process" },
    { name: "What You Get", path: "#features" },
    { name: "Why Us", path: "#why-us" },
    { name: "Contact", path: "#contact" },
  ];

  const handleNavigation = (path: string) => {
    if (isHomePage) {
      window.location.href = path;
    } else {
      window.location.href = '/' + path;
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border/50' 
            : 'bg-transparent'
        )}
      >
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Logo textSize="text-xl md:text-2xl" />

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className="text-sm font-medium transition-colors hover:text-accent bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <Button 
              className="hidden md:inline-flex btn-primary py-3 px-6 text-base" 
              onClick={() => handleNavigation("#contact")}
            >
              Book Call
            </Button>

            <button
              className="md:hidden flex items-center"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <Logo textSize="text-xl" />
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="text-lg font-medium transition-colors hover:text-accent bg-transparent border-none cursor-pointer"
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Button 
              className="w-full btn-primary py-4 text-lg" 
              onClick={() => handleNavigation("#contact")}
            >
              Book Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
