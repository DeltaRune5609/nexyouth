"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
//import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
{/*import Image from "next/image";
import banner from "@/app/banner.png";*/}

export default function LandingPage() {
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
              Events
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              We are currently setting up our first event!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
                <Link href="https://forms.gle/JMkDasNcGQj1Auy89">
                    <Button
                    className="text-lg px-6 py-3 bg-red-600 hover:bg-red-700 rounded-2xl shadow-lg" >
                        Get Involved
                    </Button>
                 </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}