import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaSearch } from 'react-icons/fa';

const NetflixErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Animated Background Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/30 to-black/80"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full mix-blend-screen opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-red-600 rounded-full mix-blend-screen opacity-10 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-red-600 rounded-full mix-blend-screen opacity-10 animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 rounded-full blur-lg opacity-70 animate-ping"></div>
            <FaExclamationTriangle className="relative text-red-600 text-7xl" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Lost in the Streaming Void</h2>
        <p className="text-gray-300 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved. 
          Maybe try searching for something else?
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-all duration-300 transform hover:scale-105"
          >
            <FaHome /> Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded transition-all duration-300 transform hover:scale-105"
          >
            <FaSearch /> Go Back
          </button>
        </div>

        {/* Netflix-style Branding */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Error Code: NS-404 | {new Date().toLocaleString()}
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} Netflix Clone - Not the real Netflix
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetflixErrorPage;