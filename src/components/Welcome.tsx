import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12 relative overflow-hidden">
      {/* Decorative Background Letters */}
      {/* "J" at top-right */}
      <div
        className="absolute font-bold text-gray-100 select-none pointer-events-none 
             text-[350px] -right-4 top-0 leading-none translate-y-[-80px]
             md:text-[400px]
             lg:text-[500px] lg:translate-y-[-140px]
             xl:text-[600px] xl:translate-y-[-200px]
             "
      >
        J
      </div>

      {/* "A" at bottom-left */}

      <div
        className="absolute font-bold text-gray-100 select-none pointer-events-none 
             text-[350px] -left-4 bottom-0 leading-none translate-y-[30px]
             md:text-[400px] md:translate-y-[40px]
             lg:text-[500px] lg:translate-y-[50px]
             xl:text-[600px] xl:translate-y-[60px]
             "
      >
        A
      </div>

      {/* Welcome Content */}
      <div className="z-10 text-center max-w-md w-full">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome</h1>
        <p className="text-lg text-gray-800 mb-10">Let's get started</p>

        {/* Existing customer section */}
        <p className="text-md font-medium text-gray-800 mb-3">
          Existing customer / Get started
        </p>
        <button
          onClick={() => navigate('/signin')}
          className="w-full py-3 text-white bg-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-700 transition mb-6"
        >
          Sign In
        </button>

        {/* New customer section */}
        <p className="text-md text-gray-800">
          New customer?{' '}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Create new account
          </Link>
        </p>
      </div>
    </div>
  );
}
