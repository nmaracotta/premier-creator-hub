
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-black/80' : 'bg-transparent'
        )}
      >
        <div className="container-custom py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">
              Premier<span className="text-accent">Creator</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "underline-animation text-sm font-medium transition-colors",
                    location.pathname === item.path ? "text-accent" : "hover:text-accent"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Button className="hidden md:inline-flex btn-hover" size="sm">
              <Link to="/contact">Get Started</Link>
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
          'fixed inset-0 z-50 bg-white dark:bg-black transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              Premier<span className="text-accent">Creator</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-lg font-medium transition-colors",
                  location.pathname === item.path ? "text-accent" : "hover:text-accent"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <Button className="w-full btn-hover" size="lg">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
