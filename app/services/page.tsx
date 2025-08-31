"use client"

import React, { useState } from 'react';

const ContactPage = () => {
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
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Services</h1>
              <p className="text-gray-600 mb-4">Please visit <a href="https://sites.google.com/view/nexyouthtest/our-offerings" className="text-blue-600 underline">here</a> to see our currently offered courses, seminars and courses.</p>
            </div>
        </main>
        </div>
    );
}

export default ContactPage;