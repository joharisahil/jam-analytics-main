import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12 relative overflow-hidden">
      {/* Background Letters */}
      <div className="absolute text-[500px] font-bold text-gray-100 left-0 top-40 select-none pointer-events-none">
        A
      </div>
      <div className="absolute text-[500px] font-bold text-gray-100 right-0 bottom-28 select-none pointer-events-none">
        J
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
          Sign in
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
