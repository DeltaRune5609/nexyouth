"use client"

import React, { useState } from 'react';
import Carousel from './components/carousel';


const App = () => {
  // Carousel configuration - easily customizable
  const carouselItems = [
    {
      id: 1,
      image: "emwc.png",
      link: "https://sites.google.com/view/nexyouthtest/contests/earth-month-writing-contest"
    },
  ];

  const scrollToNext = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const services = [
    {
      id: 1,
      icon: "📚",
      title: "Courses",
      description: "Our 12+ free course offerings provide valuable skills to youth that will give them the necessary knowledge to be the next generation of global citizens.",
      image: "seminarsimage.png",
      //Temporary redirect https://nexyouth.org/services/courses
      link: "https://nexyouth.org/services"
    },
    {
      id: 2,
      icon: "🛠️",
      title: "Seminars", 
      description: "NexYouth hosts a variety of seminars with guest speakers to spark inspiration and give knowledge to youth.",
      image: "howtolandaninternshipinthesummer.png",
      //Temporary redirect https://nexyouth.org/services/seminars
      link: "https://nexyouth.org/services"
    },
    {
      id: 3,
      icon: "🏆",
      title: "Contests",
      description: "NexYouth hosts a variety of completely free-to-participate contests to become global citizens.",
      image: "https://freesvg.org/img/prize.png",
      //Temporary redirect https://nexyouth.org/services/contests
      link: "https://nexyouth.org/services"
    }
  ];

  const statistics = [
    {
      title: "Impacted 1000+ individuals",
      value: "1000+",
      label: "Individuals Impacted"
    },
    {
      title: "Students from 90+ Schools",
      value: "90+", 
      label: "Schools Represented"
    },
    {
      title: "Students from 13+ Countries",
      value: "13+",
      label: "Countries Reached"
    },
    {
      title: "Operating in 26+ different Cities",
      value: "26+",
      label: "Cities of Operation" 
    },
    {
      title: "Taught over 500+ Students",
      value: "500+",
      label: "Students Taught"
    },
    {
      title: "Operating in 12 different states and provinces",
      value: "12",
      label: "States & Provinces"
    }
  ];

  // Navigation items - easily customizable
  const navItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Contact", href: "contact" }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="https://nexyouth.org" className="flex items-center">
                <img 
                  src="nexyouth.webp" 
                  alt="NexYouth Logo"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Carousel Section */}
      <Carousel 
        items={carouselItems}
        autoPlay={true}
      />

      {/* Content Section */}
      <section className="flex">
        <div className="max-w-7xl mx-auto  py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              NexYouth
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Youth Empowering Youth. <br></br><br></br>A government-accredited NGO dedicated to fostering positive change among young people. 
              We provide personalized skill development and mentorship through small-sized classes, targeted seminars, and more. 
              Our programs are led by experienced instructors and volunteers. 
            </p>
          </div>
        </div>
        {/* THE BUTTOn */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer p-4 rounded-full hover:bg-white/10 transition-all duration-300"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center">
            {/* Simple V-shaped arrow */}
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-black/70 group-hover:text-black transition-all duration-300 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 10l5 5 5-5"
                />
              </svg>
            </div>
            <span className="text-xs text-black/60 group-hover:text-black mt-1 hidden md:block transition-colors duration-300">Scroll</span>
          </div>
        </button>
      </section>
    {/* First Hero Section - What We Do */}
      <section id="next-section" className="min-h-screen p-4 sm:p-6 lg:p-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black mb-4 lg:mb-8">Services</h1>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {services.map((service) => (
              <div key={service.id} className="text-center group cursor-pointer">
                <div className="bg-teal-400 rounded-lg overflow-hidden mb-4 lg:mb-6 transform group-hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                  {service.image && (
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-40 sm:h-48 lg:h-56 object-cover" 
                    />
                  )}
                  </a>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 lg:mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-sm mx-auto leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Hero Section - Statistics */}
      <section className="min-h-screen bg-black p-4 sm:p-6 lg:p-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-8 lg:mb-16">Statistics</h2>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800 rounded-xl p-6 lg:p-8 hover:bg-gray-700 transition-colors duration-300">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-400 mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm">
                    {stat.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats Summary */}
          <div className="mt-12 lg:mt-16 text-center">
            <div className="bg-gray-800 rounded-xl p-6 lg:p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">Our Global Impact</h3>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                From local communities to international reach, we've built a network that spans continents, 
                empowering individuals through education and creating lasting change in the world of technology and innovation.
              </p>
            </div>
          </div>
        {/* Third Hero Section - Join Us */}
        <div className="max-w-7xl mx-auto w-full text-center">
          {/* Call to Action */}
          <div className="text-center mt-16 lg:mt-24">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Join Our Community
              </h3>
              <p className="text-purple-100 text-base sm:text-lg mb-6">
                Ready to make a difference? Become part of our passionate team of changemakers.
              </p>
              <br></br>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-FbV-GMP_rSv8mAYaFT-QxQzdWJqYcRXd_7QfwITUNkQzhw/viewform" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Get Involved
              </button>
              </a>
              <br></br>
              <br></br>
              <a href="https://discord.com/invite/qqT2ce3NY7" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Our Discord Server!
              </button>
              </a>
              <br></br>
              <br></br>
              <a href="https://www.instagram.com/nexyouth.ngo/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Our Instagram!
              </button>
              </a>
              <br></br>
              <br></br>
              <a href="https://www.linkedin.com/company/nexyouth-society/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Our Linkedin!
              </button>
              </a>
              <br></br>
            </div>
          </div>
          {/* Mailing List Section */}
        </div>
          <div className="text-center mt-16 lg:mt-24">
            <div className="mx-auto w-full max-w-[640px] aspect-[640/553] bg-white">
              <iframe
                title="Google Form"
                className="w-full h-full"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeSKIx9abOA7YdkUmOvSTKYYayUjEmiz9dxqoowBaifcaSZTQ/viewform?embedded=true"
                allowFullScreen
              >
                Loading…
              </iframe>
            </div>
        </div>
      </div>
      </section>
        <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">© {new Date().getFullYear()} NexYouth. All rights reserved.</p>
        </div>
      </footer>
      </div>
  );
};

export default App;