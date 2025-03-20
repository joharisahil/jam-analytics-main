import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { User, X, Mail, Calendar } from "lucide-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [showProfile, setShowProfile] = useState(false);

  // Profile Modal Component
  const UserProfileModal = () => {
    if (!showProfile || !isAuthenticated) return null;

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

            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email Verified</p>
                <p>{user.email_verified ? "Yes" : "No"}</p>
              </div>
            </div>

            {user.updated_at && (
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Last Updated</p>
                  <p>{new Date(user.updated_at).toLocaleDateString()}</p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="w-full px-4 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
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

      <nav className="fixed top-[10px] mx-4 md:mx-10 lg:mx-16 h-[55px] w-[calc(100%-2rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-8rem)] max-w-[1600px] flex items-center justify-center bg-[#424040be] backdrop-blur-[319px] border border-white/20 shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.1),inset_6px_6px_12px_rgba(0,0,0,0.3)] py-2 px-6 z-50 rounded-[60px]">
        {/* Logo Positioned to the Left */}
        <div className="absolute left-6 md:left-12 text-xl md:text-2xl font-bold text-neutral-100 bg-clip-text hover:text-purple-500 transition duration-300">
          <a href="#home">Jam Analytics</a>
        </div>

        {/* Navigation Links with Embossed Pill Effect - Centered */}
        <div>
          <ul className="flex space-x-8 md:space-x-12 text-sm md:text-lg font-medium bg-[#201f1f] text-white px-6 md:px-10 py-1 rounded-full border border-white shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.1),inset_4px_4px_8px_rgba(0,0,0,0.4)]">
            <li><a href="#home" className="hover:text-purple-400 transition duration-300">Home</a></li>
            <li><a href="#feature" className="hover:text-purple-400 transition duration-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-purple-400 transition duration-300">Pricing</a></li>
            <li><a href="#FooterDown" className="hover:text-purple-400 transition duration-300">About</a></li>
          </ul>
        </div>

        {/* Auth Section - Right Side */}
        <div className="absolute right-6 md:right-12 flex items-center">
          {!isAuthenticated ? (
            <button
              onClick={() => loginWithRedirect()}
              className="px-4 py-1.5 bg-[#201f1f] text-white rounded-full font-medium hover:bg-purple-600 transition-colors border border-white/30 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.1),inset_2px_2px_4px_rgba(0,0,0,0.3)]"
            >
              Login
            </button>
          ) : (
            <>
              <span className="hidden md:inline text-white mr-3">
                Welcome, {user?.name?.split(" ")[0] || "User"}
              </span>
              <button
                onClick={() => setShowProfile(true)}
                className="relative group"
              >
                <img
                  src={user?.picture}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full border-2 border-transparent group-hover:border-purple-400 transition-all"
                />
                <span className="absolute opacity-0 group-hover:opacity-100 -bottom-8 right-0 bg-zinc-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity">
                  View Profile
                </span>
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;