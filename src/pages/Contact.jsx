import { useState } from 'react';
import { FaHeadset, FaEnvelope, FaPhone, FaTwitter, FaInstagram, FaTimes } from 'react-icons/fa';

const NetflixContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions or feedback? Our team is ready to help you with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg border-l-4 border-red-600">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaHeadset className="text-red-600 mr-3" />
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-red-800' : 'bg-red-600 hover:bg-red-700'} text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-600/20 p-3 rounded-full">
                    <FaEnvelope className="text-red-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email Support</h3>
                    <p className="text-gray-400">support@netflixclone.com</p>
                    <p className="text-sm text-gray-500 mt-1">Typically replies within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-600/20 p-3 rounded-full">
                    <FaPhone className="text-red-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Phone Support</h3>
                    <p className="text-gray-400">1-800-NETFLIX</p>
                    <p className="text-sm text-gray-500 mt-1">Available 24/7 for premium members</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-gray-900 rounded-lg p-8 shadow-lg border-l-4 border-red-600">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition duration-300 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-red-600 text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-red-600 text-xl" />
                </a>
              </div>
              <p className="text-gray-400 mt-4">
                Follow us for the latest updates and announcements
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Need help with something else? Check out our{' '}
            <a href="#" className="text-red-500 hover:underline">Help Center</a>.
          </p>
        </div>

        {/* Success Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-lg max-w-md w-full p-8 border-t-4 border-red-600 relative">
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <FaTimes className="text-xl" />
              </button>
              
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-600/20 mb-4">
                  <svg 
                    className="h-10 w-10 text-red-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-300 mb-6">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
                
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NetflixContact;