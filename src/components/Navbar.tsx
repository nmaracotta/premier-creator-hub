
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Calendar } from 'lucide-react';
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
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "How It Works", path: "#process" },
    { name: "What You Get", path: "#deliverables" },
    { name: "Why Us", path: "#why-us" },
    { name: "Results", path: "#results" },
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50' 
            : 'bg-transparent'
        )}
      >
        <div className="container-custom py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Logo textSize="text-xl md:text-2xl font-black" />

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className="text-sm md:text-base font-semibold transition-all duration-300 hover:text-blue-600 bg-transparent border-none cursor-pointer relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            <Button 
              className="hidden md:inline-flex btn-premium text-white text-sm py-3 px-6 h-12 font-bold" 
              onClick={() => handleNavigation("#contact")}
            >
              <Calendar className="w-4 h-4 mr-2" />
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

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-white transition-transform duration-500 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <Logo textSize="text-xl font-black" />
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="text-xl font-bold transition-colors hover:text-blue-600 bg-transparent border-none cursor-pointer"
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Button 
              className="btn-premium text-white w-full h-16 text-lg font-black" 
              onClick={() => handleNavigation("#contact")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
