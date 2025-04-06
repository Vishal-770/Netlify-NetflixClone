// src/pages/AboutPage.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaUsers, FaGlobe, FaAward, FaChevronDown, FaQuoteLeft } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";

const About = () => {
  const [expandedMember, setExpandedMember] = useState(null);
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    { value: "220M+", label: "Subscribers", icon: <FaUsers className="text-4xl" /> },
    { value: "190+", label: "Countries", icon: <FaGlobe className="text-4xl" /> },
    { value: "15K+", label: "Titles", icon: <FaPlay className="text-4xl" /> },
    { value: "120+", label: "Awards", icon: <FaAward className="text-4xl" /> },
  ];

  const teamMembers = [
    { 
      name: "Sarah Johnson", 
      role: "Content Director", 
      fact: "Loves horror films",
      bio: "Curates our global content library with a focus on diverse storytelling. Former film critic with 10+ years experience.",
      joined: "2015"
    },
    { 
      name: "Michael Chen", 
      role: "Tech Lead", 
      fact: "Built first app at age 12",
      bio: "Leads our engineering team in building scalable infrastructure. Passionate about reducing streaming latency.",
      joined: "2018"
    },
    { 
      name: "Emma Rodriguez", 
      role: "UX Designer", 
      fact: "Former film student",
      bio: "Designs intuitive interfaces that keep users engaged. Believes in accessibility-first design principles.",
      joined: "2019"
    },
    { 
      name: "David Kim", 
      role: "Data Scientist", 
      fact: "Predicts hit shows",
      bio: "Develops our recommendation algorithms. His models have 92% accuracy in predicting viewer preferences.",
      joined: "2017"
    },
  ];

  const testimonials = [
    {
      quote: "Netflix changed how we consume entertainment. Their original content is consistently groundbreaking.",
      author: "Tech Magazine",
      role: "Industry Analyst"
    },
    {
      quote: "As a filmmaker, I appreciate how Netflix empowers creators to tell diverse stories with global reach.",
      author: "Ava DuVernay",
      role: "Director"
    },
    {
      quote: "The personalized recommendations keep finding me shows I love but wouldn't have discovered otherwise.",
      author: "Sarah M.",
      role: "Subscriber since 2014"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/51d1a5a1-1e1a-4c5a-8e3a-e2d1a7a96b2d/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center opacity-20"
        />
        
        <div className="z-10 text-center px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SiNetflix className="text-red-600 text-5xl sm:text-6xl mx-auto mb-4 sm:mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
              Our <span className="text-red-600">Story</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Revolutionizing entertainment since 1997. What started as a DVD rental service became the world's leading streaming platform.
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg flex items-center gap-2 mx-auto"
          >
            <FaPlay /> Watch Our Story
          </motion.button>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            By The <span className="text-red-600">Numbers</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gray-800 p-6 sm:p-8 rounded-xl text-center hover:bg-gray-700 transition-colors cursor-pointer hover:scale-[1.02]"
                whileHover={{ y: -5 }}
              >
                <div className="text-red-600 mb-3 sm:mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className="text-red-600">Purpose</span>
          </motion.h2>
          
          <div className="mb-8 flex justify-center">
            <div className="inline-flex bg-gray-700 rounded-lg p-1">
              {["mission", "vision", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm sm:text-base capitalize ${activeTab === tab ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-6 sm:p-8 rounded-lg"
            >
              {activeTab === "mission" && (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
                  <p className="mb-4">To entertain the world by providing the most compelling content experiences across all genres, languages, and cultures.</p>
                  <p>We believe great stories can come from anywhere and be loved everywhere. Our mission is to connect people with stories they'll love.</p>
                </>
              )}
              
              {activeTab === "vision" && (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
                  <p className="mb-4">To become the definitive global entertainment service that offers joy, inspiration, and shared experiences through storytelling.</p>
                  <p>We envision a future where anyone can access amazing entertainment instantly, with recommendations so personalized it feels like the service was made just for them.</p>
                </>
              )}
              
              {activeTab === "values" && (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-600">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>Customer Joy:</strong> We exist to delight our members</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>Innovation:</strong> We challenge the status quo creatively</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>Inclusion:</strong> Diverse voices make us stronger</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>Integrity:</strong> We do the right thing, even when no one is watching</span>
                    </li>
                  </ul>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Meet The <span className="text-red-600">Team</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-red-600/20 transition-all"
              >
                <div 
                  className="h-40 sm:h-48 bg-gradient-to-r from-red-900 to-gray-700 flex items-center justify-center relative cursor-pointer"
                  onClick={() => setExpandedMember(expandedMember === index ? null : index)}
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-600 border-4 border-red-600 flex items-center justify-center text-3xl sm:text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <motion.div 
                    className="absolute bottom-4 right-4 text-gray-300"
                    animate={{ rotate: expandedMember === index ? 180 : 0 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
                  <p className="text-red-600 mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-400 text-sm sm:text-base">Fun fact: {member.fact}</p>
                  
                  <AnimatePresence>
                    {expandedMember === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 overflow-hidden"
                      >
                        <p className="text-gray-300 text-sm sm:text-base mb-2">{member.bio}</p>
                        <p className="text-gray-500 text-xs">Joined: {member.joined}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What People <span className="text-red-600">Say</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg hover:shadow-lg hover:shadow-red-600/10 transition-all"
              >
                <FaQuoteLeft className="text-red-600 text-2xl mb-4" />
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className="text-red-600">Journey</span>
          </motion.h2>
          
          <div className="space-y-8 relative">
            {/* Timeline line - mobile */}
            <div className="absolute left-6 h-full w-1 bg-red-600 md:hidden"></div>
            
            {/* Timeline line - desktop */}
            <div className="absolute left-1/2 h-full w-1 bg-red-600 -translate-x-1/2 hidden md:block"></div>
            
            {[
              { 
                year: "1997", 
                event: "Founded as DVD rental service",
                detail: "Reed Hastings and Marc Randolph launch Netflix as a DVD-by-mail service with 30 employees and 925 titles."
              },
              { 
                year: "2007", 
                event: "Launched streaming service",
                detail: "Introduced streaming media service with 1,000 titles. Changed entertainment consumption forever."
              },
              { 
                year: "2013", 
                event: "First original series (House of Cards)",
                detail: "Debuted first original content, proving streaming platforms could produce award-winning shows."
              },
              { 
                year: "2020", 
                event: "Reached 200M+ subscribers",
                detail: "Global pandemic accelerated growth as people turned to streaming for entertainment and connection."
              },
              { 
                year: "2024", 
                event: "Pioneering AI recommendations",
                detail: "Launched next-gen recommendation engine using advanced machine learning for hyper-personalization."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-start md:items-center gap-4 md:gap-8 pl-12 md:pl-0`}
              >
                {/* Mobile dot */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-sm font-bold md:hidden">
                  {item.year}
                </div>
                
                {/* Desktop year - now properly centered */}
                <div className="hidden md:flex w-20 h-20 rounded-full bg-red-600 items-center justify-center shrink-0">
                  <span className="text-xl font-bold">{item.year}</span>
                </div>
                
                <motion.div 
                  className={`bg-gray-800 p-4 sm:p-6 rounded-lg flex-1 hover:bg-gray-700 cursor-pointer transition-colors`}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-lg sm:text-xl font-bold mb-2">{item.event}</p>
                  <p className="text-gray-400 text-sm sm:text-base">{item.detail}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-red-900 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-white">Join</span> Us?
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Become part of the Netflix story. Start your membership today and discover endless entertainment.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg flex items-center gap-2 mx-auto"
            >
              <FaPlay /> Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;