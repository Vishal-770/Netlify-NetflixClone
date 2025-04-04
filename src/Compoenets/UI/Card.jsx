import React from "react";

const Card = ({ title, description, imageUrl, rating }) => {
  return (
    <div className="group relative h-48 w-80 min-w-[320px] rounded-md overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:z-10">
      {/* Movie Image */}
      <div className="relative h-full w-full flex">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-32 flex-shrink-0 object-cover transition-opacity duration-300 group-hover:opacity-40"
        />
        
        {/* Content Area */}
        <div className="flex-1 bg-gradient-to-r from-black to-gray-900 p-3 flex flex-col">
          {/* Rating Badge */}
          <div className="self-start bg-black bg-opacity-70 text-red-500 px-2 py-1 rounded-md text-xs font-bold flex items-center mb-2">
            <svg
              className="w-3 h-3 fill-current text-yellow-400 mr-1"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            {rating}
          </div>
          
          {/* Title and Description */}
          <h3 className="text-white font-bold text-lg mb-1 line-clamp-1">{title}</h3>
          <p className="text-gray-300 text-sm line-clamp-3 mb-3">{description}</p>
          
          {/* Hover Overlay Content */}
          <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors duration-200 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-1 text-xs">Play</span>
              </button>
              <button className="bg-gray-800 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full p-2 transition-colors duration-200 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="ml-1 text-xs">My List</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;