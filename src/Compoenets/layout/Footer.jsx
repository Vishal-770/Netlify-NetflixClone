import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaYoutube className="h-6 w-6" />
          </a>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">Audio Description</a></li>
              <li><a href="#" className="hover:text-white">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white">Legal Notices</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Jobs</a></li>
              <li><a href="#" className="hover:text-white">Cookie Preferences</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Corporate Information</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">Media Center</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Service Button */}
        <button className="border border-gray-400 px-4 py-2 mb-8 hover:text-white hover:border-white transition-colors">
          Service Code
        </button>

        {/* Copyright */}
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Netflix Clone, Inc. (This is a demo project)</p>
          <p className="mt-2">This is a fictional Netflix interface created for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;