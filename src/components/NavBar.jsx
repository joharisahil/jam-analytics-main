import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-[10px] mx-4 md:mx-10 lg:mx-16 h-[55px] w-[calc(100%-2rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-8rem)] max-w-[1600px] flex items-center justify-center bg-[#424040be] backdrop-blur-[319px] border border-white/20 shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.1),inset_6px_6px_12px_rgba(0,0,0,0.3)] py-2 px-6 z-50 rounded-[60px]">
      
      {/* Logo Positioned to the Left */}
      <div className="absolute left-6 md:left-12 text-xl md:text-2xl font-bold text-neutral-100  bg-clip-text hover:text-purple-500 transition duration-300">
        <a href="#home">Jam Analytics</a>
      </div>

      {/* Navigation Links with Embossed Pill Effect */}
      <div>
        <ul className="flex space-x-8 md:space-x-12 text-sm md:text-lg font-medium bg-[#201f1f] text-white px-6 md:px-10 py-1 rounded-full border border-white shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.1),inset_4px_4px_8px_rgba(0,0,0,0.4)]">
          <li><a href="#home" className="hover:text-purple-400 transition duration-300">Home</a></li>
          <li><a href="#feature" className="hover:text-purple-400 transition duration-300">Features</a></li>
          <li><a href="#pricing" className="hover:text-purple-400 transition duration-300">Pricing</a></li>
          <li><a href="#FooterDown" className="hover:text-purple-400 transition duration-300">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
