import React, { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../Store/authStore";
import toast from "react-hot-toast";

const OtpVerification: React.FC = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { error, verifyOtp, isLoading } = useAuthStore() as {
    error: string | null;
    verifyOtp: (otp: string) => Promise<any>; // Return full response data
    isLoading: boolean;
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleBackspace = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (/^\d{6}$/.test(text)) {
        const newCode = text.split("");
        setCode(newCode);
        newCode.forEach((digit, i) => {
          if (inputRefs.current[i]) inputRefs.current[i]!.value = digit;
        });
        inputRefs.current[5]?.focus();
      } else {
        toast.error("Clipboard does not contain a 6-digit code");
      }
    } catch {
      toast.error("Failed to read from clipboard");
    }
  };

  const handleConfirm = async () => {
    const otp = code.join("");
    if (otp.length !== 6) {
      toast.error("Please enter a 6-digit code");
      return;
    }

    try {
      const data = await verifyOtp(otp);
      toast.success("OTP verified successfully");

      const token = data?.data?.token;
      if (token) {
        window.location.href = `http://localhost:8081/PharmacySetupScreen/?token=${token}`;
      } else {
        toast.error("Token not received");
      }

    } catch (err) {
      toast.error(error || "OTP verification failed");
      console.error("OTP verification failed", err);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white px-4 overflow-hidden">
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

      <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 w-full max-w-sm text-center space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Enter 6 digit code
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            A six-digit code should have come to your phone number that you indicated.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex justify-center space-x-3">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ref={el => inputRefs.current[i] = el}
                value={code[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleBackspace(i, e)}
                id={`otp-input-${i}`}
                autoComplete="one-time-code"
                inputMode="numeric"
              />
            ))}
          </div>
          <button
            type="button"
            className="text-xs text-blue-500 hover:underline mt-1"
            onClick={handlePaste}
          >
            Paste code from clipboard
          </button>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleConfirm}
            disabled={isLoading}
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
          >
            {isLoading ? "Verifying..." : "Confirm"}
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
