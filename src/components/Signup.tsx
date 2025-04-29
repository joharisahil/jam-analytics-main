import { useState } from 'react';
import logo from '../assets/logo.jpg'; // Adjust the path as necessary

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        {/* Zoho Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt=" Logo"
            className="h-16 w-16 rounded-full"
          />
        </div>

        <h2 className="text-xl font-semibold text-center mb-4">Create your account</h2>

        <form className="space-y-4">
          {/* Name Fields */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border border-gray-300 px-3 py-2 rounded-md text-sm"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border border-gray-300 px-3 py-2 rounded-md text-sm"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="flex">
            <span className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md text-sm bg-gray-100">
              🇮🇳 +91
            </span>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="flex-grow border border-gray-300 px-3 py-2 rounded-r-md text-sm"
              required
            />
          </div>

          {/* Email Address */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-sm text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {/* Location info */}
          <p className="text-xs text-gray-500 mt-1">
            Your data will be stored in the INDIA data center, as you are in India.
          </p>

          {/* Terms and Conditions */}
          <div className="flex items-start text-sm mt-2">
            <input type="checkbox" id="terms" className="mt-1 mr-2" required />
            <label htmlFor="terms">
              I agree to the
              <a href="#" className="text-blue-600 ml-1 underline">Terms of service</a> and
              <a href="#" className="text-blue-600 ml-1 underline">Privacy policies</a> of Jam Analytics Corporation.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold text-sm"
          >
            Sign up
          </button>

          {/* Social Login */}
          <p className="text-center text-sm mt-4">Sign up using</p>
          <div className="flex justify-center gap-3 mt-2">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732228.png" alt="Apple" className="w-6 h-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-6 h-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
