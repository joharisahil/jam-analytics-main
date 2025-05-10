import React, { useState } from 'react';
import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)} // Go back to previous page
          className="flex items-center space-x-2 mb-8 text-black"
        >
          <ArrowLeftIcon className="h-6 w-6" />
          <span className="text-lg font-medium">Back</span>
        </button>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Sign up</h2>

        {/* Form */}
        <form className="space-y-8">
          {/* Phone Number Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {phone.length >= 10 && (
                <CheckCircleIcon className="h-5 w-5 text-green-500 absolute right-3 top-3.5" />
              )}
            </div>
          </div>

          {/* OTP Field */}
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
              OTP
            </label>
            <div className="relative">
              <input
                type={showOtp ? 'text' : 'password'}
                id="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowOtp(!showOtp)}
                className="absolute right-3 top-3.5 text-gray-600"
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
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
