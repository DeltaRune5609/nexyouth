"use client"

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
{/*import Image from "next/image";
import banner from "@/app/banner.png";*/}

type CarouselItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const items: CarouselItem[] = [
    {
      id: 1,
      title: "Andy Han",
      description: "Testing",
      imageUrl: ""
    },
    {
      id: 2,
      title: "Andy Han",
      description: "This is the second slide description",
      imageUrl: ""
    },
    {
      id: 3,
      title: "Andy Han",
      description: "This is the third slide description",
      imageUrl: ""
    }
  ];

  // Auto-cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        goToNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };


  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-slate-900 text-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2">
            {/*
              <Image 
                src={banner}
                alt="Redshifted Logo"
                width={200}  // Adjust as needed
                height={200}
                className="rounded-full" // Optional styling
              />
              */}
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Redshifted
              </span>
            </Link>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
              Events
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/FAQ" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href = "https://hcb.hackclub.com/donations/start/redshifted">
            <Button className="bg-red-600 hover:bg-red-700 rounded-xl">
            $ Donate
            </Button>
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Redshifted</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Redshifted is a non-profit organisation that hosts events and workshops for youth!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-800 border-none rounded-2xl shadow-2xl w-full max-w-md">
              <CardContent className="p-8">
                <h2 className="text-xl text-white font-semibold mb-2">Lorem Ipsum</h2>
                <p className="text-sm text-gray-300 mb-4">
                  Lorem Ipsum
                </p>
              </CardContent>
            </Card>
          </motion.div> 
          {/*Beginning of Carousel*/}
          <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
              {/* Card Container */}
      <div 
        className="relative w-full max-w-md h-96 overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel slides */}
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Image Section */}
            {/* Image with proper stacking */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            
            {/* Text Section */}
            <div className="absolute bottom-0 h-2/5 w-full p-6 bg-blue-100">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentIndex === index 
                  ? 'bg-blue-500 w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
          {/*End of Carousel*/}
        </div>
      </div>
    </main>
  )
}