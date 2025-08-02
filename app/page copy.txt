"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full bg-blue-950 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="text-lg font-semibold">NEXYOUTH</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-gray-200 text-3xl">Our Team</a>
          <a href="#" className="hover:text-gray-200 text-3xl">Classes</a>
          <a href="#" className="hover:text-gray-200 text-3xl">Branches</a>
          <svg
            className="w-10 h-10 text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </nav>

      {/* Carousel */}
      <div className="mt-0">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          interval={4000}
          className="rounded-none"
        >
          {[
            <div key="slide1">
              <img
                src="/emwc.png"
                alt="Earth Month Writing Contest"
                className="object-cover w-full max-h-[400px]"
              />
            </div>
          ]}
        </Carousel>
      </div>
      <div className="bg-white text-gray-900">
        {/* Title + Description */}
        <section className="text-center px-4 py-10">
          <h1 className="text-5xl font-bold">NexYouth</h1>
          <h2 className="text-xl mt-2">Youth Empowering Youth.</h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-700">
            A government-accredited NGO dedicated to fostering positive change among young people. We provide personalized skill development and mentorship through small-sized classes, targeted seminars, and more. Our programs are led by experienced instructors and volunteers.
          </p>
        </section>

        {/* Offerings Header */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Offerings</h2>
        </section>
      </div>
    </div>
  );
}