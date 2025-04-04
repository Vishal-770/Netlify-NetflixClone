// src/pages/AboutPage.jsx
import { motion } from "framer-motion";
import { FaPlay, FaUsers, FaGlobe, FaAward } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";

const About = () => {
  const stats = [
    { value: "220M+", label: "Subscribers", icon: <FaUsers className="text-4xl" /> },
    { value: "190+", label: "Countries", icon: <FaGlobe className="text-4xl" /> },
    { value: "15K+", label: "Titles", icon: <FaPlay className="text-4xl" /> },
    { value: "120+", label: "Awards", icon: <FaAward className="text-4xl" /> },
  ];

  const teamMembers = [
    { name: "Sarah Johnson", role: "Content Director", fact: "Loves horror films" },
    { name: "Michael Chen", role: "Tech Lead", fact: "Built first app at age 12" },
    { name: "Emma Rodriguez", role: "UX Designer", fact: "Former film student" },
    { name: "David Kim", role: "Data Scientist", fact: "Predicts hit shows" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/51d1a5a1-1e1a-4c5a-8e3a-e2d1a7a96b2d/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center opacity-20"
        />
        
        <div className="z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SiNetflix className="text-red-600 text-6xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-red-600">Story</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Revolutionizing entertainment since 1997. What started as a DVD rental service became the world's leading streaming platform.
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg flex items-center gap-2 mx-auto"
          >
            <FaPlay /> Watch Our Story
          </motion.button>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            By The <span className="text-red-600">Numbers</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-colors"
              >
                <div className="text-red-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Meet The <span className="text-red-600">Team</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-red-600/20 transition-all"
              >
                <div className="h-48 bg-gradient-to-r from-red-900 to-gray-800 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gray-700 border-4 border-red-600 flex items-center justify-center text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-red-600 mb-3">{member.role}</p>
                  <p className="text-gray-400">Fun fact: {member.fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-red-600">Journey</span>
          </h2>
          
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-red-600 -translate-x-1/2 hidden md:block"></div>
            
            {[
              { year: "1997", event: "Founded as DVD rental service" },
              { year: "2007", event: "Launched streaming service" },
              { year: "2013", event: "First original series (House of Cards)" },
              { year: "2020", event: "Reached 200M+ subscribers" },
              { year: "2024", event: "Pioneering AI recommendations" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center text-2xl font-bold shrink-0">
                  {item.year}
                </div>
                <div className={`bg-gray-800 p-6 rounded-lg flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <p className="text-xl">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;