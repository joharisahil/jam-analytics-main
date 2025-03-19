import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { User, X, Mail, Calendar } from "lucide-react";

const NavBar = ({ setShowProfile, showProfile }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

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
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
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
      {/* User Profile Modal */}
      <UserProfileModal />
      
      {/* Navigation - Made transparent */}
      <nav className="absolute top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Jam Analytics
            </div>
            <div className="flex space-x-6 text-gray-200">
              <button className="text-sm hover:text-white">Features</button>
              <button className="text-sm hover:text-white">About</button>
              <button className="text-sm hover:text-white">Developers</button>
              <button className="text-sm hover:text-white">Company</button>
              <button className="text-sm hover:text-white">Blog</button>
              <button className="text-sm hover:text-white">Changelog</button>
            </div>
            <div>
              {!isAuthenticated ? (
                <button
                  onClick={() => loginWithRedirect()}
                  className="px-6 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
                >
                  Login
                </button>
              ) : (
                <div className="flex items-center gap-4">
                  <span className="text-white">Welcome, {user.name?.split(' ')[0] || 'User'}</span>
                  <button 
                    onClick={() => setShowProfile(true)} 
                    className="relative group"
                  >
                    <img 
                      src={user.picture} 
                      alt={user.name} 
                      className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-purple-400 transition-all" 
                    />
                    <span className="absolute opacity-0 group-hover:opacity-100 -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity">
                      View Profile
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;