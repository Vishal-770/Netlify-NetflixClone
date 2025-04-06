import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Brand and Navigation */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-red-600 font-bold text-2xl">NETFLIX</span>
              </div>
              
              {/* Desktop Navigation - Now with 5 links */}
              <div className="hidden md:block ml-10">
                <div className="flex space-x-4">
                  <NavLink 
                    to="/" 
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink 
                    to="/movies" 
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                  >
                    Movies
                  </NavLink>
                  <NavLink 
                    to="/explore" 
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                  >
                    Explore
                  </NavLink>
                  <NavLink 
                    to="/category" 
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                  >
                    Category
                  </NavLink>
                  <NavLink 
                    to="/about" 
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                  >
                    About
                  </NavLink>
                  <NavLink 
                    to="/contact" 
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
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

        {/* Mobile menu - Now with 5 links */}
        {isMenuOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </NavLink>
              <NavLink 
                to="/movies" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Movies
              </NavLink>
              <NavLink 
                to="/explore" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
               Explore
              </NavLink>
              <NavLink 
                to="/category" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Category
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;