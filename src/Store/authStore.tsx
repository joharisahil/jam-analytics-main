import { create } from "zustand";
import axios from "axios";

const API_URL = "https://hr-automation-backend-wmeq.onrender.com/api/auth";

axios.defaults.withCredentials = true;

type AuthStore = {
  user: any;
  isAuthenticated: boolean;
  error: string | null;
  isLoading: boolean;
  isCheckingAuth: boolean;
  message: string | null;
  phone_no: string | null;
  requiresName: boolean;
  signup: ({ name, phone_no }: { name: string; phone_no: string }) => Promise<void>;
  login: (phone_no: string) => Promise<void>;
  logout: () => Promise<void>;
  verifyOtp: (code: string) => Promise<any>;
  checkAuth: () => Promise<void>;
};

const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,
  phone_no: null,
  requiresName: true,

  signup: async ({ name, phone_no }: { name: string; phone_no: string }) => {
    set({ isLoading: true, error: null, requiresName: false });
    try {
      const response = await axios.post(`${API_URL}/signuplogin`, { name, phone_no });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        phone_no,
      });
    } catch (error) {
      let errorMessage = "Error signing up";
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw error;
    }
  },

  login: async (phone_no: string) => {
    set({ isLoading: true, error: null, requiresName: false }); // 🧼 Reset old flags
    try {
      const response = await axios.post(`${API_URL}/signuplogin`, { phone_no });
      set({
        isAuthenticated: true,
        user: response.data.user,
        isLoading: false,
        error: null,
        phone_no,
      });
    } catch (error) {
      let errorMessage = "Error logging in";
      if (axios.isAxiosError(error)) {
        if (typeof error.response?.data === "string") {
          errorMessage = "User does not exist";
          if (errorMessage === "User does not exist") {
            set({ requiresName: true });
          }
        } else if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        }
      }
      set({
        error: errorMessage,
        isLoading: false,
        isAuthenticated: false, // 🛡️ Do NOT keep user as authenticated on failure
      });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      set({
        user: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
        phone_no: null,
      });
    } catch (error) {
      set({ error: "Error logging out", isLoading: false });
      throw error;
    }
  },

  verifyOtp: async (code: string) => {
    set({ isLoading: true, error: null });
    try {
      const { phone_no } = get();
      const response = await axios.post(`${API_URL}/verify-otp`, { phone_no, otp_code: code });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return response.data;
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Error verifying OTP",
        isLoading: false,
      });
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({
        error: null,
        isCheckingAuth: false,
        isAuthenticated: false,
      });
    }
  },
}));

export default useAuthStore;
