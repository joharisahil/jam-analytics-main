import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {  X, Menu } from "lucide-react";
import logo from "../assets/logo.jpg";
  


const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  

  //navbar on sccrolling
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      
      <nav
        className={`fixed top-0 left-0 w-full max-w-full bg-transparent opacity-100 text-white py-4 px-6 flex items-center justify-between z-40 shadow-md backdrop-blur-md 
  ${
    scrolled
      ? "border-b border-gray-500/50 transition-all duration-300"
      : "border-b-0"
  }`}
      >
        {/* Logo & Branding */}
        <div className="flex items-center px-auto space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full ml-4" />
          <span className="text-2xl font-semibold tracking-wide hover:text-purple-400 transition mx-auto">
            <a href="#home">Jam Analytics</a>
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-16 text-gray-300 text-lg lg:space-x-8 lg:text-base xl:text-lg xl:space-x-16">
          <li>
            <a href="#home" className="hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="#product" className="hover:text-white transition">
              Product
            </a>
          </li>
         
          <li>
            <a href="#feature" className="hover:text-white transition">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>
          </li> 
          
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

       
        <div className="hidden lg:flex lg:px-4 items-center space-x-6">
         
            <>
              
              <button onClick={() => navigate("/Welcome")}
               
                className="relative px-[6px] py-[4px] right-6 text-white rounded-[10px] bg-gradient-to-b from-[#24132f] to-[#0a0014] border border-[#57406f] shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl flex items-center "
              >
                <span>Try now →</span>
                <span className="absolute inset-0 rounded-[10px] border-[1px] border-[#9174a7] opacity-50 "></span>
              </button>

              {/* <button onClick={() => navigate("/Signin")}
                className="relative px-[6px] py-[4px] text-white rounded-[10px] bg-gradient-to-b from-[#24132f] to-[#0a0014] border border-[#57406f] shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl flex items-center "
              >
                <span>Sign in</span>
                <span className="absolute inset-0 rounded-[10px] border-[1px] border-[#9174a7] opacity-50 "></span>
              </button> */}
            </>
        
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden fixed top-16 left-0 w-full bg-[#0a0014] text-white p-2 space-y-4 z-50 shadow-lg">
            <ul className="space-y-4 text-left px-6 text-lg">
            <li>
            <a href="#home" className="hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="#product" className="hover:text-white transition">
              Product
            </a>
          </li>
         
          <li>
            <a href="#feature" className="hover:text-white transition">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>
          </li> 
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
            </ul>

            {/* Mobile Authentication Buttons */}
            <div className="flex gap-4 justify-start px-6 ">
             
            <button onClick={() => navigate("/Welcome")}
               
                className="relative px-[6px] py-[4px] left text-white rounded-[10px] bg-gradient-to-b from-[#24132f] to-[#0a0014] border border-[#57406f] shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl flex items-center "
              >
                <span>Try now →</span>
                <span className="absolute inset-0 rounded-[10px] border-[1px] border-[#9174a7] opacity-50 "></span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
