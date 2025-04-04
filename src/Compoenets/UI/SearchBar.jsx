import React, { useState, useEffect } from 'react';
import { FiSearch, FiX, FiMic } from 'react-icons/fi';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // Add your search logic here
  };

  return (
    <div className={`relative ${isMobile ? 'w-full px-4' : 'w-96'}`}>
      <form onSubmit={handleSearch}>
        <div
          className={`relative flex items-center transition-all duration-300 ${
            isFocused ? 'ring-2 ring-red-600' : ''
          }`}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search movies, TV shows..."
            className={`w-full py-3 px-4 pr-12 bg-black bg-opacity-80 text-white rounded-md border ${
              isFocused ? 'border-red-600' : 'border-gray-700'
            } focus:outline-none placeholder-gray-400`}
          />
          
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-10 text-gray-400 hover:text-white transition-colors"
            >
              <FiX size={20} />
            </button>
          ) : null}
          
          <button
            type="submit"
            className={`absolute right-3 flex items-center justify-center ${
              isFocused ? 'text-red-600' : 'text-gray-400'
            } hover:text-white transition-colors`}
          >
            <FiSearch size={20} />
          </button>
        </div>
      </form>

      {/* Voice Search Button (mobile only) */}
      {isMobile && (
        <button
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-red-600 p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
          onClick={() => console.log('Voice search activated')}
        >
          <FiMic size={16} className="text-white" />
        </button>
      )}

      {/* Search Suggestions (appears when focused) */}
      {isFocused && query && (
        <div className="absolute z-10 w-full mt-2 bg-black bg-opacity-95 border border-gray-800 rounded-md shadow-lg max-h-80 overflow-y-auto">
          {/* Sample suggestions - replace with your actual search results */}
          {['Stranger Things', 'The Witcher', 'Money Heist', 'Dark']
            .filter(item => item.toLowerCase().includes(query.toLowerCase()))
            .map((item, index) => (
              <div
                key={index}
                className="px-4 py-3 hover:bg-red-900 hover:bg-opacity-30 cursor-pointer flex items-center border-b border-gray-800 last:border-b-0"
              >
                <FiSearch className="mr-3 text-gray-400" />
                <span className="text-white">{item}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;