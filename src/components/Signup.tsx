import React, { useState } from 'react';
import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';

export default function SignupForm() {
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <div className="flex items-center space-x-2 mb-6">
          <ArrowLeftIcon className="h-5 w-5 text-black" />
          <span className="text-lg font-medium text-black">Back</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Sign up</h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Phone Number Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                value="26654789513"
                readOnly
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-500 bg-gray-100 focus:outline-none"
              />
              <CheckCircleIcon className="h-5 w-5 text-green-500 absolute right-3 top-3" />
            </div>
          </div>

          {/* OTP Field */}
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              OTP
            </label>
            <div className="relative">
              <input
                type={showOtp ? 'text' : 'password'}
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowOtp(!showOtp)}
                className="absolute right-3 top-3 text-gray-600"
              >
                {showOtp ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
