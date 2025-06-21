import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuthStore from '../Store/authStore'; // Adjust path as needed

type AuthStore = {
  signup: (params: { name: string; phone_no: string }) => Promise<void>;
  error: string | null;
  isLoading: boolean;
};

const SignupForm = () => {
  const navigate = useNavigate();
  const { signup, error, isLoading } = useAuthStore() as AuthStore;

  const [name, setName] = useState('');
  const [phone_no, setPhoneNo] = useState('');

  const handleSignup = async () => {
    try {
      await signup({ name, phone_no });
      navigate('/otp');
    } catch (err) {
      // Error is already set in the store
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
     
        <div className="relative z-10 max-w-xl w-full space-y-8">
          <h2 className="text-3xl font-bold text-blue-600">Sign up</h2>
           <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSignup();
                  }}
                >

          <div className="space-y-6">
            <div>
              <label className="block text-base font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name…"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full px-6 py-3 text-base border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700">Phone</label>
              <input
                type="text"
                placeholder="Enter your number…"
                value={phone_no}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="mt-2 w-full px-6 py-3 text-base border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

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
          </form>

        </div>
     
    </div>
  );
};

export default SignupForm;