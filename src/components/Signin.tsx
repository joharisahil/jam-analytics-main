import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../Store/authStore';

const Signin = () => {
  const navigate = useNavigate();
  const { signup, error, isLoading } = useAuthStore();

  const [phone_no, setPhoneNo] = useState('');

  const handleSignup = async () => {
    if (!phone_no) {
      alert("Please enter your phone number");
      return;
    }

    try {
      await signup({ name: "User", phone_no }); // You can replace "User" if you want a name field
      navigate('/otp');
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

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
      <div className="absolute text-[600px] font-bold text-gray-100 -left-14 top-12 select-none pointer-events-none">
        A
      </div>
      <div className="absolute text-[500px] font-bold text-gray-100 right-0 bottom-44 select-none pointer-events-none">
        J
      </div>

      {/* Form Container */}
      <form
        className="relative z-10 max-w-xl w-full space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
      >
        <h2 className="text-3xl font-bold text-blue-600">Sign In</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-base font-medium text-gray-700">Phone</label>
            <input
              type="text"
              placeholder="Enter your number…"
              className="mt-2 w-full px-6 py-3 text-base border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phone_no}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-6 text-white text-base font-semibold rounded-md transition ${
              isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isLoading ? 'Processing...' : 'Get OTP'}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Signin;