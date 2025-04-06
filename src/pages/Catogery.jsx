import React, { useState, useEffect } from 'react';
import { searchMovies } from '../api/GetApiData';
import Card from '../Compoenets/UI/Card';

const Category = () => {
  const imageUrl = `https://image.tmdb.org/t/p/w500`;
  const defaultImageUrl = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`;
  const [movieData, setMovieData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce search input
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchInput.trim() !== "") {
        handleSearch(searchInput);
      } else {
        setMovieData([]);
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchInput]);

  const handleSearch = async (search) => {
    setIsLoading(true);
    setError(null);
    try {
      const arr = await searchMovies(search);
      setMovieData(arr || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies. Please try again.");
      setMovieData([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white pt-4 sm:pt-8 pb-8 px-4">
      {/* Search bar container - now fully responsive */}
      <div className="mb-8 w-full px-2 sm:px-0 sm:max-w-2xl mx-auto">
        <div className="relative">
          <input
            className="w-full bg-gray-800 text-white rounded-lg py-3 px-4
                      focus:outline-none focus:ring-2 focus:ring-red-600
                      placeholder-gray-400 border border-gray-700
                      text-sm sm:text-base transition-all duration-200"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            type="text"
            placeholder="Search movies..."
          />
          {isLoading && (
            <div className="absolute right-3 top-3.5">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"></div>
            </div>
          )}
        </div>
        {error && (
          <div className="mt-2 text-red-400 text-sm">{error}</div>
        )}
      </div>

      {/* Empty state messages */}
      {!isLoading && movieData.length === 0 && searchInput && (
        <div className="text-center py-8">
          <p className="text-gray-300 text-sm sm:text-base">
            No movies found for "{searchInput}"
          </p>
        </div>
      )}

      {!isLoading && !searchInput && (
        <div className="text-center py-8">
          <p className="text-gray-400 text-sm sm:text-base">
            Search for movies above
          </p>
        </div>
      )}

      {/* Movie grid - your existing flexbox container */}
      <div className="body-div-movie">
        {movieData.map((item) => (
          <Card
            key={item.id}
            title={item.original_title}
            imageUrl={item.poster_path ? imageUrl + item.poster_path : defaultImageUrl}
            rating={item.vote_average}
            description={item.overview}
            id={item.id}
          />
        ))}
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-red-600 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default Category;