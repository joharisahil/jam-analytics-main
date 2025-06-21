import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white px-6 overflow-hidden">
      {/* Back Arrow - Top Left */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center space-x-2 z-20"
      >
        <ArrowLeft className="w-6 h-6" />
        <span className="text-black text-base font-medium">Back</span>
      </button>

      {/* Decorative Background Letters */}
      {/* J - Top Right */}
       <div className="absolute text-[600px] font-bold text-gray-100 -left-14 top-12 select-none pointer-events-none">
        A
      </div>
      <div className="absolute text-[500px] font-bold text-gray-100 right-0 bottom-44 select-none pointer-events-none">
        J
      </div>

      {/* Form Container */}
      <div className="relative z-10 max-w-xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-blue-600">Sign up</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-base font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name…"
              className="mt-2 w-full px-6 py-3 text-base border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700">Phone</label>
            <input
              type="text"
              placeholder="Enter your number…"
              className="mt-2 w-full px-6 py-3 text-base border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="button" onClick={() => navigate('/otp')}
            className="w-full py-3 px-6 bg-blue-500 text-white text-base font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
