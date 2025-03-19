import React from "react";
import { Menu } from "lucide-react"; // Icon for mobile menu (optional)

function Navbar() {
  return (
    <nav className="fixed top-0 left-0  bg-gray-900 py-2.5 px-6 pr-16 shadow-lg z-50 rounded-full m-2 right-16 left-16">
      <div className="flex justify-center">
        
        
        {/* Navigation Links (Rounded Pill) */}
        <ul className="flex space-x-12 text-lg font-medium bg-gray-900 text-white px-10 py-1.5 rounded-full border-2 border-dotted border-white">
          {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Jam Analytics
        </div>

          <li>
            <a href="#home" className="hover:text-purple-400 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#feature" className="hover:text-purple-400 transition duration-300">Features</a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-purple-400 transition duration-300">Pricing</a>
          </li>
          <li>
            <a href="#FooterDown" className="hover:text-purple-400 transition duration-300">About</a>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
