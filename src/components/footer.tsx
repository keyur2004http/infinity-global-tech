"use client"

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-4">
        {/* Logo */}
        <div className="w-24 h-24 flex items-center justify-center rounded-full overflow-hidden shadow-lg">
          <img
            src="/Assets/global.png"  // replace with your logo path
            alt="Infinity Global Tech"
            className="w-20 h-20 object-contain"
          />
        </div>
        {/* Subtitle */}
        <p className="text-base font-medium text-white text-center">
          Infinity Global Tech
        </p>
      



      {/* Navigation Links */}
      <nav className="flex space-x-6 text-sm font-medium text-white">
        <a href="/" className="hover:text-black">Home</a>
        <a href="/about" className="hover:text-black">About</a>
        <a href="/services" className="hover:text-black">Services</a>
        <a href="/#portfolio" className="hover:text-black">Products</a>
        <a href="/contact" className="hover:text-black">Contact</a>
      </nav>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <Facebook size={18} />
        </a>
        <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <Twitter size={18} />
        </a>
        <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <Instagram size={18} />
        </a>
        <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <Linkedin size={18} />
        </a>
      </div>
      <p className="text-sm text-white text-center">
        We are a passionate team of digital marketers and developers dedicated to crafting impactful <br />
        online presences that drive growth and connect with your audience. <br />
      </p>
      {/* Copyright */}
      <p className="text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} Infinity Global Tech. All rights reserved.
      </p>
    </div>
  
    </footer >
  )
}
