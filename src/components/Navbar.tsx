
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

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-black/80' : 'bg-transparent'
        )}
      >
        <div className="container-custom py-5 md:py-7">
          <div className="flex items-center justify-between">
            <Logo textSize="text-2xl md:text-3xl" />

            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "underline-animation text-base md:text-lg font-medium transition-colors hover:text-accent"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <Button className="hidden md:inline-flex btn-hover text-base py-6 px-8" size="lg" asChild>
              <a href="#contact">
                Get Started
              </a>
            </Button>

            <button
              className="md:hidden flex items-center"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
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
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <Logo textSize="text-2xl" />
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-xl font-medium transition-colors hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-10 flex flex-col gap-6">
            <Button className="w-full btn-hover py-6 text-lg" size="lg" asChild>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Book Your Free Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
