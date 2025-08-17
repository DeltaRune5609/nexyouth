"use client"

import React, { useState } from 'react';

const AboutUsPage = () => {
  // Easy to update team data
  const teamMembers = [
    {
      id: 1,
      name: "Stephanie Uzea",
      title: "Canada Head & Director of Operations",
      image: "https://via.placeholder.com/300x400/8B5CF6/ffffff?text=Team+Member+1",
      description: "Leading operations across Canada"
    },
    {
      id: 2,
      name: "Justin Huang",
      title: "Co Founder:",
      image: "https://via.placeholder.com/300x400/3B82F6/ffffff?text=Justin+Huang",
      description: "Visionary co-founder driving innovation"
    },
    {
      id: 3,
      name: "Max Wen", 
      title: "Co Founder:",
      image: "https://via.placeholder.com/300x400/EF4444/ffffff?text=Max+Wen",
      description: "Co-founder focused on growth and impact"
    },
    {
      id: 4,
      name: "Team Member",
      title: "Role:",
      image: "https://via.placeholder.com/300x400/10B981/ffffff?text=Team+Member+4",
      description: "Contributing to our mission"
    }
  ];

  // Customizable frame styles - easy to modify
  const frameStyles = {
    borderWidth: "4px", // Change border thickness
    borderColor: "border-white", // Change border color
    borderRadius: "rounded-xl", // Change border radius
    shadowSize: "shadow-2xl", // Change shadow size
    hoverEffect: "hover:scale-105", // Change hover effect
    transitionDuration: "duration-300" // Change animation speed
  };
  // Navigation items - easily customizable
    const navItems = [
      { name: "Home", href: "home" },
      { name: "About", href: "about" },
      { name: "Services", href: "services" },
      { name: "Contact", href: "contact" }
    ];
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen">
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
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8">
            About Us
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-900 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Description Text */}
          <div className="text-center mb-12 lg:mb-20">
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto mb-8">
              At the heart of NexYouth is our inspiring community of volunteers — passionate individuals who dedicate their time, skills, and 
              creativity to driving meaningful change. Coming from diverse backgrounds in science, education, advocacy, and the arts, our 
              volunteers share a common commitment to protecting the environment and empowering youth.
            </p>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
              Get to know the dedicated changemakers who make our mission possible!
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.id} className={`group cursor-pointer ${
                // Center the last item if it's odd and on mobile
                teamMembers.length % 2 === 1 && index === teamMembers.length - 1 
                  ? 'col-span-2 max-w-sm mx-auto lg:col-span-1 lg:max-w-none lg:mx-0' 
                  : ''
              }`}>
                
                {/* Standardized Frame */}
                <div className={`
                  relative overflow-hidden bg-gray-800 p-4 
                  ${frameStyles.borderRadius} 
                  ${frameStyles.shadowSize} 
                  ${frameStyles.hoverEffect} 
                  transition-transform ${frameStyles.transitionDuration}
                  border-4 border-gray-600 hover:border-purple-400
                `}>
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    {/* Title (Co Founder:, etc.) */}
                    {member.title && (
                      <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide">
                        {member.title}
                      </p>
                    )}
                    
                    {/* Name */}
                    <h3 className="text-white font-bold text-sm sm:text-lg lg:text-xl leading-tight">
                      {member.name}
                    </h3>
                    
                    {/* Description - shows on hover */}
                    <p className="text-gray-400 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                      {member.description}
                    </p>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 lg:mt-24">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Join Our Community
              </h3>
              <p className="text-purple-100 text-base sm:text-lg mb-6">
                Ready to make a difference? Become part of our passionate team of changemakers.
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-FbV-GMP_rSv8mAYaFT-QxQzdWJqYcRXd_7QfwITUNkQzhw/viewform" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Get Involved
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;