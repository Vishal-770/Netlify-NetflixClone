import React, { useState, useEffect } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Card from "../Compoenets/UI/Card";
import { getMovieDetails } from "../api/GetApiData";

function getThreeRandomMovies(movies, currentMovieId) {
  const otherMovies = movies.filter(
    (movie) => movie.id.toString() !== currentMovieId
  );
  const shuffled = [...otherMovies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

const MovieDetails = () => {
  const { results: movies } = useLoaderData();
  const { movieID } = useParams();
  const navigate = useNavigate();
  const recommendedMovies = getThreeRandomMovies(movies, movieID);
  const imageUrl = `https://image.tmdb.org/t/p/w500`;

  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieID);
        setMovieData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieID]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-2xl text-red-600">Error: {error}</h1>
      </div>
    );
  }

  if (!movieData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-2xl text-red-600">Movie not found</h1>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-black text-white pb-12">
      {/* Backdrop with gradient overlay */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
        <img
          src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
          alt={movieData.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1920x1080?text=No+Backdrop+Available";
          }}
        />
      </div>

      <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-12 -mt-16 sm:-mt-24 md:-mt-32">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
          <div className="w-40 sm:w-48 md:w-56 lg:w-64 flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={movieData.title}
              className="w-full rounded-lg shadow-xl border-2 border-gray-800"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/500x750?text=No+Poster+Available";
              }}
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {movieData.title}
                {movieData.adult && (
                  <span className="ml-3 text-xs sm:text-sm bg-red-600 text-white px-2 py-1 rounded">
                    18+
                  </span>
                )}
              </h1>
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md font-medium transition border border-gray-700 self-start sm:self-auto"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <span className="text-red-500 font-medium">
                {formatDate(movieData.release_date)}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-300">
                {movieData.original_language.toUpperCase()}
              </span>
              <span className="text-gray-400">•</span>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-400 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>
                  {movieData.vote_average.toFixed(1)} ({movieData.vote_count}{" "}
                  votes)
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-red-500">
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {movieData.overview}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium flex items-center gap-2 transition">
                <svg
                  className="w-5 h-5"
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
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium flex items-center gap-2 transition border border-gray-700">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                My List
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 mt-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedMovies.map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              imageUrl={imageUrl + movie.poster_path}
              rating={movie.vote_average.toFixed(1)}
              description={movie.overview}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;