const LoadingPage = () => {
  // Loading messages that will rotate
  const loadingMessages = [
    'Preparing your cinematic experience...',
    'Loading your watchlist...',
    'Personalizing recommendations...',
    'Almost ready...',
    'Setting up your profile...',
    'Optimizing streaming quality...'
  ];
  
  // Calculate current message based on time
  const currentMessage = loadingMessages[Math.floor(Date.now()/2000) % loadingMessages.length];
  
  // Simulate progress percentage (0-90%)
  const progress = Math.min(90, Math.floor(Date.now()/100)) % 100;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center px-4">
      {/* Netflix Logo - Responsive sizing */}
      <div className="flex mb-6 md:mb-10">
        {['N', 'E', 'T', 'F', 'L', 'I', 'X'].map((letter, index) => (
          <span 
            key={index}
            className={`
              text-4xl sm:text-5xl md:text-6xl font-bold 
              ${index % 2 === 0 ? 'text-red-600' : 'text-red-700'} 
              animate-bounce
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      
      {/* Loading Content - Responsive width */}
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Loading Text */}
        <p className="text-white text-base sm:text-lg md:text-xl text-center mb-4 sm:mb-6 animate-pulse">
          {currentMessage}
        </p>
        
        {/* Progress Bar - Responsive height */}
        <div className="w-full h-1.5 sm:h-2 bg-gray-800 rounded-full mb-1 sm:mb-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-red-700 to-red-600 rounded-full"
            style={{ 
              width: `${progress}%`,
              transition: 'width 0.3s ease'
            }}
          />
        </div>
        
        {/* Percentage */}
        <p className="text-red-600 text-sm sm:text-base font-medium mb-6 sm:mb-8">
          {progress}% complete
        </p>
        
        {/* Animated Icons - Responsive spacing */}
        <div className="flex space-x-4 sm:space-x-6 mb-6 sm:mb-8">
          {['🎬', '🎥', '🎟️', '✨'].map((icon, index) => (
            <div 
              key={index}
              className="text-red-600 text-xl sm:text-2xl animate-bounce"
              style={{ 
                animationDelay: `${index * 0.2 + 0.1}s`,
                animationDuration: '2s'
              }}
            >
              {icon}
            </div>
          ))}
        </div>
        
        {/* Hint Text - Responsive padding */}
        <div className="bg-gray-900/80 p-3 sm:p-4 rounded-lg border border-gray-800 w-full">
          <p className="text-gray-400 text-xs sm:text-sm text-center italic">
            Did you know? Netflix recommends shows based on your viewing history.
          </p>
        </div>
      </div>
      
      {/* Film Strip Animation - Responsive height */}
      <div className="absolute bottom-0 left-0 w-full h-10 sm:h-12 bg-gray-900 overflow-hidden">
        <div 
          className="flex absolute top-0 left-0 h-full items-center whitespace-nowrap"
          style={{
            animation: 'marquee 15s linear infinite',
            width: '200%'
          }}
        >
          {[...Array(16)].map((_, i) => (
            <div 
              key={i} 
              className="inline-block mx-1 sm:mx-2 w-16 sm:w-20 h-6 sm:h-8 bg-gray-800 rounded-sm flex-shrink-0 relative"
            >
              <div className="absolute inset-0.5 sm:inset-1 bg-red-600/20"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Inline CSS for marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;