import  { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { User, X, Mail, Menu } from "lucide-react";




const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [showProfile, setShowProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Profile Modal Component
  const UserProfileModal = () => {
    if (!showProfile || !isAuthenticated ||!user) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
          <button
            onClick={() => setShowProfile(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center mb-6">
            <img
              src={user.picture}
              alt={user.name}
              className="w-24 h-24 rounded-full border-4 border-blue-100"
            />
            <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
            {user.nickname && <p className="text-gray-500">@{user.nickname}</p>}
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>{user.email || "Not provided"}</p>
              </div>
            </div>

            <div className="flex items-center">
              <User className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p className="text-sm truncate max-w-xs">{user.sub}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="bg-gradient-to-br from-[#43295ebf] to-[#220b29] text-white text-lg font-medium px-2 py-1
  rounded-[8px] border border-[#9174a7]  
  transition-all duration-300 ease-in-out 
  hover:bg-[#1a0122
  flex items-center gap-2 text-[15px]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <UserProfileModal />

      <nav className="fixed top-0 left-0 w-full bg-[#0a0014] text-white py-4 px-6 flex items-center justify-between z-50 shadow-md overflow-x-hidden">
        {/* Logo & Branding */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-semibold tracking-wide hover:text-purple-400 transition ml-3">
            <a href="#home">Jam Analytics</a>
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-gray-300 text-lg pr-10">
          <li><a href="#home" className="hover:text-white transition">Home</a></li>
          <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
          <li><a href="#feature" className="hover:text-white transition">Features</a></li>
          <li><a href="#about" className="hover:text-white transition">About</a></li>
        </ul>

        {/* Authentication Section */}
        <div className="hidden md:flex items-center space-x-4">
          {!isAuthenticated ? (
            <button
              onClick={() => loginWithRedirect()}
              className="relative px-6 py-3 text-white text-lg font-medium rounded-[30px] 
              bg-gradient-to-b from-[#2d183b] to-[#0a0014] border border-[#9174a7] 
              shadow-[inset_0_4px_8px_rgba(255,255,255,0.1),0_0_15px_rgba(145,116,167,0.5)] 
              transition-all duration-300 ease-in-out hover:shadow-[inset_0_6px_12px_rgba(255,255,255,0.2),0_0_25px_rgba(145,116,167,0.7)] 
              flex items-center justify-center gap-2"
 >
   <span>Sign up</span>
 
   {/* Soft Inner Glow Effect */}
   <span className="absolute inset-0 rounded-[30px] bg-white/10 blur-[12px] opacity-30"></span>
            </button>
          ) : (
            <button onClick={() => logout()} className="text-gray-300 hover:text-white">
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-full bg-[#0a0014] text-white p-6 space-y-4 z-40 shadow-lg">
            <ul className="space-y-4 text-left text-lg">
              <li>
                <a
                  href="#home"
                  className="block hover:text-purple-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block hover:text-purple-400 transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#feature"
                  className="block hover:text-purple-400 transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block hover:text-purple-400 transition"
                >
                  About
                </a>
              </li>
            </ul>
            {/* <button className="text-gray-300 hover:text-white transition">
              Sign In
            </button> */}
            <button
              onClick={() => loginWithRedirect()}
              className="bg-gradient-to-br from-[#43295ebf] to-[#220b29] text-white text-lg font-medium px-2 py-1
  rounded-[8px] border border-[#9174a7]  
  transition-all duration-300 ease-in-out 
  hover:bg-[#1a0122
  flex items-center gap-2 text-[15px]"
            >
              Sign Up →
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
