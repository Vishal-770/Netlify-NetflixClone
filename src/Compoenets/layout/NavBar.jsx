import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar with fixed position and proper height */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left side - Brand and Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-red-600 font-bold text-2xl">NETFLIX</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  <NavLink to="/" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">Home</NavLink>
                  <NavLink to="/movies" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">Movies</NavLink>
                  <NavLink to="/about" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">About</NavLink>
                  <NavLink to="/contact" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">Contact</NavLink>
                </div>
              </div>
            </div>

            {/* Right side - Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu - appears below the navbar */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden bg-black shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <NavLink to="/" className="text-white hover:bg-red-600 block px-3 py-3 rounded-md text-base font-medium">Home</NavLink>
            <NavLink to="/movies" className="text-white hover:bg-red-600 block px-3 py-3 rounded-md text-base font-medium">Movies</NavLink>
            <NavLink to="/about" className="text-white hover:bg-red-600 block px-3 py-3 rounded-md text-base font-medium">About</NavLink>
            <NavLink to="/contact" className="text-white hover:bg-red-600 block px-3 py-3 rounded-md text-base font-medium">Contact</NavLink>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;