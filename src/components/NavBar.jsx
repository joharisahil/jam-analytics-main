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

      <nav className="fixed top-0 left-16 right-16 bg-gray-900 py-2.5 px-6 shadow-lg z-50 rounded-full m-2">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and brand */}
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
            Jam Analytics
          </div>

          {/* Center - Navigation menu */}
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-12 text-lg font-medium text-white px-10 py-1.5 rounded-full border-2 border-dotted border-white">
              <li>
                <a
                  href="#home"
                  className="hover:text-purple-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#feature"
                  className="hover:text-purple-400 transition duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-purple-400 transition duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#FooterDown"
                  className="hover:text-purple-400 transition duration-300"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Right side - Login button or welcome message + profile */}
          <div className="flex items-center">
            {!isAuthenticated ? (
              <button
                onClick={() => loginWithRedirect()}
                className="px-6 py-1.5 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Login
              </button>
            ) : (
              <>
                <span className="text-white mr-3">
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;