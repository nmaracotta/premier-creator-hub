
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
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

  // Prevent body scrolling when menu is open
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
    { name: "Contact", path: "#contact" },
  ];

  // Handle navigation based on current page
  const handleNavigation = (path: string) => {
    if (isHomePage) {
      // If on home page, use anchor navigation
      window.location.href = path;
    } else {
      // If on another page, navigate to home with anchor
      window.location.href = '/' + path;
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-black/80' : 'bg-transparent'
        )}
      >
        <div className="container-custom py-4 md:py-5">
          <div className="flex items-center justify-between">
            <Logo textSize="text-xl md:text-2xl" />

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={cn(
                    "underline-animation text-sm md:text-base font-medium transition-colors hover:text-accent bg-transparent border-none cursor-pointer"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <Button className="hidden md:inline-flex btn-hover text-sm py-5 px-6" size="default" onClick={() => handleNavigation("#contact")}>
              Get Started
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

      <div
        className={cn(
          'fixed inset-0 z-50 bg-white dark:bg-black transition-transform duration-300 ease-in-out md:hidden',
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

          <div className="mt-auto pt-8 flex flex-col gap-4">
            <Button className="w-full btn-hover py-5 text-base" size="default" onClick={() => handleNavigation("#contact")}>
              Book Your Free Call
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
