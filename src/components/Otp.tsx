import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white px-4 overflow-hidden">
      {/* Back Arrow */}
      <button
              onClick={() => navigate(-1)}
              className="absolute top-6 left-6 flex items-center space-x-2 z-20"
            >
              <ArrowLeft className="w-6 h-6" />
              <span className="text-black text-base font-medium">Back</span>
            </button>

      {/* Decorative Letters */}
      <div className="absolute text-[25rem] font-extrabold text-gray-100 select-none -bottom-32 -left-32 pointer-events-none z-0">
        A
      </div>
      <div className="absolute text-[25rem] font-extrabold text-gray-100 select-none -top-24 -right-32 pointer-events-none z-0">
        J
      </div>

      {/* OTP Form Box */}
      <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 w-full max-w-sm text-center space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Enter 4 digit code</h2>
          <p className="text-sm text-gray-500 mt-1">
            A four-digit code should have come to your email address that you indicated.
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center space-x-3">
          {[...Array(4)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition">
            Confirm
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 border border-blue-500 text-blue-500 font-medium rounded-md hover:bg-blue-50 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
