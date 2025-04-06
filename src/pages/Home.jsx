import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const featuredContent = [
    {
      id: 1,
      title: "Stranger Things",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments...",
      imageUrl: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      genre: "Sci-Fi & Horror",
      year: 2023,
      rating: "TV-14"
    },
    {
      id: 2,
      title: "The Witcher",
      description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny...",
      imageUrl: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      genre: "Fantasy",
      year: 2022,
      rating: "TV-MA"
    },
    {
      id: 3,
      title: "Money Heist",
      description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain...",
      imageUrl: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      genre: "Crime Drama",
      year: 2021,
      rating: "TV-MA"
    },
    {
      id: 4,
      title: "Wednesday",
      description: "Follows Wednesday Addams' years as a student, solving mysteries...",
      imageUrl: "https://image.tmdb.org/t/p/w500/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg",
      genre: "Supernatural",
      year: 2022,
      rating: "TV-14"
    }
  ];

  const genres = [
    "Action", "Comedy", "Drama", "Horror", "Sci-Fi", 
    "Documentary", "Romance", "Thriller", "Animation"
  ];

  return (
    <div className="text-white font-sans bg-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29a8b69a-7c0e-4b35-9e4c-e2383f1ff778/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg')"
          }}
        ></div>
        
        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col justify-center px-4 md:px-16 lg:px-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-2xl leading-tight mb-4 scroll-animate opacity-0 translate-y-10">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-xl scroll-animate opacity-0 translate-y-10 delay-100">
            Watch anywhere. Cancel anytime.
          </p>
          
          <NavLink 
            to="/movies"
            className="scroll-animate opacity-0 translate-y-10 delay-150 mb-8 inline-block"
          >
            <button className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 text-xl font-bold rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 group shadow-lg shadow-red-900/30">
              <span>Explore New Movies</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </NavLink>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl scroll-animate opacity-0 translate-y-10 delay-300">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow px-4 py-3 bg-black bg-opacity-50 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-xl font-semibold rounded flex items-center justify-center gap-2 transition-colors">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Content Carousel */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-black border-t-8 border-gray-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 scroll-animate opacity-0 translate-y-10">
          Trending Now
        </h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide">
            {featuredContent.map((item) => (
              <div key={item.id} className="group relative flex-shrink-0 w-64 h-96 rounded-lg overflow-hidden shadow-lg scroll-animate opacity-0 translate-y-10">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <div className="flex items-center text-sm text-gray-300 space-x-2 mb-2">
                    <span>{item.rating}</span>
                    <span>•</span>
                    <span>{item.year}</span>
                    <span>•</span>
                    <span>{item.genre}</span>
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
                </div>
                <button className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genre Selection */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-black">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 scroll-animate opacity-0 translate-y-10">
          Browse by Genre
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {genres.map((genre, index) => (
            <NavLink 
              to={`/category`} 
              key={genre}
              className="scroll-animate opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="bg-gray-900 hover:bg-red-600 rounded-lg p-6 text-center transition-colors duration-300 h-full flex items-center justify-center">
                <h3 className="text-lg font-semibold">{genre}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black border-t-8 border-gray-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 scroll-animate opacity-0 translate-y-10">
          Why Choose Netflix?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-6 scroll-animate opacity-0 translate-y-10">
            <div className="text-5xl mb-6">🎬</div>
            <h3 className="text-2xl font-bold mb-3">Enjoy on your TV</h3>
            <p className="text-gray-400">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 scroll-animate opacity-0 translate-y-10 delay-100">
            <div className="text-5xl mb-6">📱</div>
            <h3 className="text-2xl font-bold mb-3">Download your shows</h3>
            <p className="text-gray-400">
              Save your favorites easily and always have something to watch offline.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 scroll-animate opacity-0 translate-y-10 delay-200">
            <div className="text-5xl mb-6">👨‍👩‍👧‍👦</div>
            <h3 className="text-2xl font-bold mb-3">Create profiles for kids</h3>
            <p className="text-gray-400">
              Send kids on adventures with their favorite characters in a space made just for them.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 lg:px-24 bg-black border-t-8 border-gray-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 scroll-animate opacity-0 translate-y-10">
          What Our Subscribers Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote: "Netflix has completely changed how I watch TV. The original content is unmatched!",
              author: "Sarah J.",
              rating: "★★★★★"
            },
            {
              quote: "I love being able to download shows for my commute. Best streaming service by far.",
              author: "Michael T.",
              rating: "★★★★☆"
            },
            {
              quote: "The kids profiles are a lifesaver! So much great content for all ages.",
              author: "The Rodriguez Family",
              rating: "★★★★★"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 scroll-animate opacity-0 translate-y-10" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="text-yellow-400 text-xl mb-4">{testimonial.rating}</div>
              <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-400 font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 lg:px-24 bg-black border-t-8 border-gray-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 scroll-animate opacity-0 translate-y-10">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-3">
          {[
            { question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." },
            { question: "How much does Netflix cost?", answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts." },
            { question: "Where can I watch?", answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." },
            { question: "How do I cancel?", answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
            { question: "What can I watch on Netflix?", answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." },
            { question: "Is Netflix good for kids?", answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see." }
          ].map((item, index) => (
            <div key={index} className="group scroll-animate opacity-0 translate-y-10" style={{ transitionDelay: `${index * 50}ms` }}>
              <button 
                className="w-full flex justify-between items-center bg-gray-800 p-5 text-left hover:bg-gray-700 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl">{item.question}</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${activeFAQ === index ? 'rotate-45' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeFAQ === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="bg-gray-900 p-5">
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl mb-8 scroll-animate opacity-0 translate-y-10">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 scroll-animate opacity-0 translate-y-10 delay-100">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow px-4 py-3 bg-black bg-opacity-50 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-xl font-semibold rounded flex items-center justify-center gap-2 transition-colors">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;