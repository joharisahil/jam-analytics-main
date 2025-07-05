import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../Store/authStore";

const Signin = () => {
  const navigate = useNavigate();
  const { login, error, isLoading } = useAuthStore();

  const [phone_no, setPhoneNo] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleLogin = async () => {
    if (!phone_no) {
      setPhoneError("Please enter your phone number");
      return;
    }

    if (phone_no.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }

    setPhoneError(""); // clear previous error

    try {
      try {
        // First attempt: login attempt without a name
        await login(phone_no);
      } catch (err: any) {
        if (
          err?.response?.data === "Name is required for new users" ||
          err?.message === "Name is required for new users"
        ) {
          // Retry as signup if backend says name is required
          await login(phone_no);
        } else {
          throw err; // other errors like rate limiting, server error, etc.
        }
      }

      navigate("/otp");
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pb-12 bg-white px-6 overflow-hidden">
      {/* Back Arrow - Top Left */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center space-x-2 z-20"
      >
        <ArrowLeft className="w-6 h-6" />
        <span className="text-black text-base font-medium">Back</span>
      </button>

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

      {/* Form Container */}
      <form
        className="relative z-10 max-w-xl w-full space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h2 className="text-3xl font-bold text-blue-600">Sign In</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-base font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter your number…"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              value={phone_no}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, "");
                setPhoneNo(numericValue);
                if (phoneError) setPhoneError("");
              }}
              className={`mt-2 w-full px-6 py-3 text-base border ${
                phoneError ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${
                phoneError ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              required
            />
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-6 text-white text-base font-semibold rounded-md transition ${
              isLoading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoading ? "Processing..." : "Get OTP"}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Signin;
