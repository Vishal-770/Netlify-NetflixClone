export const GetApiData = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );

    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.results; // Returns array of movie results
  } catch (err) {
    console.error("Error searching movies:", err);
    return []; // Return empty array on error
  }
};

const BASE_URL = "https://api.themoviedb.org/3";

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=credits,videos`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const GENRES = {
  "Action": 28,
  "Comedy": 35,
  "Drama": 18,
  "Horror": 27,
  "Sci-Fi": 878,
  "Documentary": 99,
  "Romance": 10749,
  "Thriller": 53,
  "Animation": 16
};

export const getMoviesByCategory = async (categoryName, page = 1) => {
  const genreId = GENRES[categoryName];
  if (!genreId) throw new Error('Invalid category');
  
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genreId}&page=${page}&language=en-US`
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching movies by category:', error);
    throw error;
  }
};
