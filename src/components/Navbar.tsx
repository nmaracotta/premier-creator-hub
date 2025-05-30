
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
    { name: "Results", path: "#results" },
    { name: "Why Us", path: "#why-us" },
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
            ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200/50' 
            : 'bg-white/80 backdrop-blur-lg'
        )}
      >
        <div className="container-section py-4">
          <div className="flex items-center justify-between">
            <Logo textSize="text-xl font-black" />

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <Button 
              className="hidden lg:inline-flex btn-primary"
              onClick={() => handleNavigation("#contact")}
            >
              <Calendar className="w-4 h-4" />
              Book Call
            </Button>

            <button
              className="lg:hidden flex items-center"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out lg:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
            <Logo textSize="text-xl font-black" />
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6 text-slate-700" />
            </button>
          </div>

          <nav className="flex flex-col space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="text-2xl font-semibold text-slate-700 hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer text-left"
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Button 
              className="btn-cta w-full"
              onClick={() => handleNavigation("#contact")}
            >
              <Calendar className="w-5 h-5" />
              Book Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
