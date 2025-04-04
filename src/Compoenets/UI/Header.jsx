import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const NetflixHeader = ({ title = "Latest Movies", subtitle = "New releases just added" }) => {
  return (
    <header className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/80 z-10" />
      
      {/* Background image - replace with your actual latest movie backdrop */}
      <div 
        className="absolute inset-0 bg-[url('https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg')] bg-cover bg-center"
        style={{ filter: 'brightness(0.7)' }}
      />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
        {/* Title with Netflix-style red accent */}
        <div className="mb-4">
          <span className="text-red-600 font-bold text-sm md:text-base tracking-wider">
            NETFLIX ORIGINAL
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-2 mb-3 drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl drop-shadow-lg">
            {subtitle}
          </p>
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-white hover:bg-opacity-80 text-black px-6 py-3 rounded-md font-medium flex items-center transition-all duration-200 transform hover:scale-105">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Play
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 bg-opacity-70 text-white px-6 py-3 rounded-md font-medium flex items-center transition-all duration-200">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            More Info
          </button>
        </div>
        
        {/* Scrolling indicator for desktop */}
        <div className="hidden md:flex items-center justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <FiChevronRight className="rotate-90" size={24} />
        </div>
      </div>
      
      {/* Mobile indicator */}
      <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-xs text-gray-400">Swipe up to browse</p>
        <div className="flex justify-center mt-1">
          <div className="w-8 h-1 bg-gray-500 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default NetflixHeader;