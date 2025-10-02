"use client"

import React, { useState } from 'react';

const AboutUsPage = () => {
  // Easy to update team data
  const teamMembers = [
    {
      id: 1,
      name: "Stephanie Uzea",
      title: "Canada Head & Director of Operations",
      image: "Member_Suzea1.png",
      description: "Stephanie is an aspiring environmental engineer with a passion for writing. She’s written multiple comics about her brother if he were a superhero as well as a science fiction trilogy. In her free time, she likes trying out new foods and cross-country running."
    },
    {
      id: 2,
      name: "Justin Huang",
      title: "Co Founder:",
      image: "Member_Jhuan1.jpg",
      description: "Justin is an enthusiast of the environment. He is an avid reader of all forms of media related to the environment. He hopes that through this contest, others will also find their own love and passion for one of the largest global issues in the world."
    },
    {
      id: 3,
      name: "Max Wen", 
      title: "Co Founder:",
      image: "Member_Mwen1.jpg",
      description: "Hi, I'm Max, one of the co-founders of NextYouth. I'm in Grade 9 and have been debating and teaching for over 2 years! I enjoy public speaking, STEM, and content creation(@MaxW3n)."
    },
    {
      id: 4,
      name: "Xuhan Yang",
      title: "Director of Technology:",
      image: "Member_Xyang1.jpg",
      description: "Hi I'm Xuhan! I'm a high schooler passionate about programming, math, or any thing STEM related!"
    },
    {
      id: 5,
      name: "Chloe Huang",
      title: "Secretary:",
      image: "Member_Chuan1.jpg",
      description: "Chloe is a Grade 11 student at Earl of March High School. She is an avid volleyball player and loves sports!"
    },
    {
      id: 6,
      name: "Rachel Wei",
      title: "Conquitlam Chapter Head:",
      image: "Member_Rwei1.png",
      description: "Rachel Wei is a rising senior at Port Moody Secondary School. She loves playing basketball, is an avid debater, and loves her pet cat! She is also a passionate environmentalist."
    },
    {
      id: 7,
      name: "Kristen Yip",
      title: "Debate Coach:",
      image: "Member_Kyip1.png",
      description: "Kristen Y (she/her) is a grade 9 student and avid debater. Achievements include: Top 4th speaker+top jr speaker (Harthouse Winter Open), top 3rd speaker + grand finalist (Harthouse Summer Open), grand finalist + 4th jr speaker (Autumnloo 2024)."
    },
    {
      id: 8,
      name: "Cody Zhang",
      title: "Economics Instructor:",
      image: "Member_Czhan1.png",
      description: "Cody Zhang is a high schooler from  Toronto and scored a 5 on AP Micro and makes economics simple, fun, and engaging!"
    },
    {
      id: 9,
      name: "Keerti Joshi",
      title: "Debate Coach:",
      image: "Member_Kjosh1.png",
      description: "I’m Keerti, I’m a grade 11 student at Upper Canada College. I’ve been debating since Grade 8 and I debate in both WSDC and BP formats. I am a new member of the Canadian National Debating Team and have competed and won in many tournaments run by Canadian Universities."
    },
    {
      id: 10,
      name: "Jeffrey Liu",
      title: "Debate Coach:",
      image: "Member_Jliu1.png",
      description: "Hi, i'm Jeffery! i am a grade 11 student at milliken Mills high school. In my free time i love cooking food, listening to music(especially hip hop and r&b), and working out! I am ecstatic to work with nexyouth this year to continue to promote accessibility in debate and further youth engagement! "
    },
    {
      id: 11,
      name: "Amy Liu",
      title: "Debate Coach:",
      image: "Member_Aliu1.png",
      description: "Amy is a G10 student and a competitive debater who has won many debate tournaments."
    },
    {
      id: 12,
      name: "Ferrari Zhang",
      title: "Debate Coach:",
      image: "Member_Fzhan1.jpg",
      description: "Ferrari is a G10 student and a competitive debater, who loves argumentation and refutation!"
    },
    {
      id: 13,
      name: "Terrence Guo",
      title: "Debate Coach:",
      image: "Member_Tguo1.png",
      description: "Terrence is a G12 student and a competitive debater at the national level, winning many debating tournaments, including being the top speaker at Hart House High Schools."
    },
    {
      id: 14,
      name: "Yunfei Shuai",
      title: "Contests Organizer:",
      image: "Member_Yshua1.png",
      description: "Yunfei wrote her first story when she was 7 years old and never looked back since (it would be great if she could actually finish her writing projects though, something she is notoriously bad at). She is an avid sci-fi enthusiast and an aspiring astrophysicist. Most of the time she can be found bingeing figure skating competitions and Arcane."
    },
    {
      id: 15,
      name: "Susan Zheng",
      title: "Contests Organizer:",
      image: "Member_Szhen1.png",
      description: "Susan finds way too much enjoyment in daydreaming about fictional scenarios and promising herself she’ll finish a project tomorrow. A sci-fi fanatic, she obsesses over very specific mathematical and scientific concepts she knows she will never understand. "
    },
    {
      id: 16,
      name: "Shahrad Islam",
      title: "Science Instructor:",
      image: "Member_Sisla1.png",
      description: "Hi! My name is Shahrad! Some things you should know about me are that I like playing sports, playing instruments, watching movies and shows, and I really like cats! I am happy to be a part of the NexYouth Team helping mentor and tutor others!"
    },
    {
      id: 17,
      name: "Ronnie Liu",
      title: "Science Instructor:",
      image: "Member_Rliu1.png",
      description: "Hello, my name is Ronnie Liu. I am a gifted grade 10 scholar at Richmond Hill High School and I graduated with honors at Crosby Heights.  I love teaching because I enjoy watching children learn and discover new things, as well as meet new friends along the way. I teach gifted science that is enriches students' knowledge and pushes the breadth and depth of the school curriculum."
    },
    {
      id: 18,
      name: "Ethan Luo",
      title: "Debate Coach:",
      image: "Member_Eluo1.png",
      description: "Ethan is a Grade 10 student at Abbey Park High School in Oakville. With 2 years of competitive debate experience, he has advanced at prestigious tournaments such as Harvard WSDC, Queens BPHS, McGill BPHS, and Hart House High Schools. Outside debate, he enjoys clarinet, trail running, and co-hosting Perception Podcast, where he explores philosophy from a teen’s perspective. "
    },
    {
      id: 19,
      name: "Rest of the Team",
      title: "Instructors & Volunteers:",
      image: "https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=612x612&w=0&k=20&c=Zm1MthU_G_LzfjBFBaMORRnuBhMsCjPQ38Ksfg4zl9g=",
      description: "More to come! We have a large team of dedicated instructors and volunteers who help make our programs possible."
    },
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
                    <p className="text-gray-400 text-xs sm:text-sm opacity-100 group-hover:opacity-100 transition-opacity duration-300 mt-2">
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