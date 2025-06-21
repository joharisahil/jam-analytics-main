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
       <div className="absolute text-[600px] font-bold text-gray-100 -left-14 top-12 select-none pointer-events-none">
        A
      </div>
      <div className="absolute text-[500px] font-bold text-gray-100 right-0 bottom-44 select-none pointer-events-none">
        J
      </div>

      {/* OTP Form Box */}
      <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 w-full max-w-sm text-center space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Enter 6 digit code</h2>
          <p className="text-sm text-gray-500 mt-1">
            A four-digit code should have come to your email address that you indicated.
          </p>
        </div>
    
        {/* OTP Inputs with Copy Option and Auto Move */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex justify-center space-x-3">
            {[...Array(6)].map((_, i) => (
              <input
          key={i}
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => {
            const value = e.target.value.replace(/[^0-9]/g, '');
            e.target.value = value;
            if (value && i < 5) {
              const next = document.getElementById(`otp-input-${i + 1}`);
              if (next) (next as HTMLInputElement).focus();
            }
          }}
          onKeyDown={e => {
            if (e.key === 'Backspace' && !e.currentTarget.value && i > 0) {
              const prev = document.getElementById(`otp-input-${i - 1}`);
              if (prev) (prev as HTMLInputElement).focus();
            }
          }}
          id={`otp-input-${i}`}
          autoComplete="one-time-code"
          inputMode="numeric"
              />
            ))}
          </div>
          <button
            type="button"
            className="text-xs text-blue-500 hover:underline mt-1"
            onClick={async () => {
              try {
          const text = await navigator.clipboard.readText();
          if (/^\d{6}$/.test(text)) {
            for (let i = 0; i < 6; i++) {
              const input = document.getElementById(`otp-input-${i}`) as HTMLInputElement;
              if (input) input.value = text[i];
            }
            const lastInput = document.getElementById('otp-input-5') as HTMLInputElement;
            if (lastInput) lastInput.focus();
          }
              } catch {}
            }}
          >
            Paste code from clipboard
          </button>
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
