import React, { useEffect, useState } from 'react';
import { getMoviesByCategory } from '../api/GetApiData';
import Card from '../Compoenets/UI/Card';

const Category = () => {
  const categories = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", 
    "Documentary", "Romance", "Thriller", "Animation"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const imageUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await getMoviesByCategory(selectedCategory, currentPage);
        setMovieData(res.results || []);
        setTotalPages(res.total_pages || 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [selectedCategory, currentPage]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = () => goToPage(currentPage + 1);
  const goToPrevPage = () => goToPage(currentPage - 1);
  const goForwardFive = () => goToPage(Math.min(currentPage + 5, totalPages));
  const goBackFive = () => goToPage(Math.max(currentPage - 5, 1));

  return (
    <div className="min-h-screen bg-black text-white pt-4 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Category Selector */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-red-600">Browse Categories</h1>
        
        <div className="relative">
          <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white font-medium'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
        
        <h2 className="text-xl sm:text-2xl mt-6 mb-4 font-semibold text-white">
          {selectedCategory} <span className="text-red-500">Movies</span>
        </h2>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      )}

      {/* Movie Cards Container with your custom class */}
      <div className='body-div-movie'>
   {movieData.map((item, index) => {
  return <Card key={index} title={item.original_title} imageUrl={imageUrl+item.poster_path} rating={item.vote_average.toFixed(1) } description={item.overview} id={item.id}   />;
})}

    </div>

      {!loading && movieData.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-400">No movies found in this category</p>
        </div>
      )}

      {/* Responsive Pagination */}
      {movieData.length > 0 && (
        <div className="flex flex-wrap justify-center items-center mt-8 gap-2">
          {/* Desktop pagination */}
          <div className="hidden sm:flex space-x-2">
            <button
              onClick={goBackFive}
              disabled={currentPage <= 5}
              className={`px-3 py-1 rounded-md text-sm sm:text-base ${
                currentPage <= 5 ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              &lt;&lt; 5
            </button>
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md text-sm sm:text-base ${
                currentPage === 1 ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              &lt; Prev
            </button>
            <span className="px-3 py-1 bg-gray-800 rounded-md text-sm sm:text-base">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage >= totalPages}
              className={`px-3 py-1 rounded-md text-sm sm:text-base ${
                currentPage >= totalPages ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              Next &gt;
            </button>
            <button
              onClick={goForwardFive}
              disabled={currentPage + 5 > totalPages}
              className={`px-3 py-1 rounded-md text-sm sm:text-base ${
                currentPage + 5 > totalPages ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              5 &gt;&gt;
            </button>
          </div>

          {/* Mobile pagination */}
          <div className="flex sm:hidden space-x-2">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === 1 ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              &lt;
            </button>
            <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage >= totalPages}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage >= totalPages ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;