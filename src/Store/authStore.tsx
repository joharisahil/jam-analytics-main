import { create } from "zustand";
import axios from "axios";

const API_URL = "https://hr-automation-backend-wmeq.onrender.com/api/auth";

// 👉 Set up Axios interceptor to automatically add Authorization header
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 👉 Optional: globally set Content-Type for POST, PUT, PATCH
// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.put["Content-Type"] = "application/json";
// axios.defaults.headers.patch["Content-Type"] = "application/json";

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

  signup: async ({ name, phone_no }) => {
    set({ isLoading: true, error: null, requiresName: false });
    try {
      const response = await axios.post(`${API_URL}/signuplogin`, { name, phone_no });
      const { user, token } = response.data;
      // const token=response.data.token;

      if (token) {
        localStorage.setItem("jwt_token", token);  // ✅ Save token for future requests
      }

      set({
        user,
        isAuthenticated: true,
        isLoading: false,
        phone_no,
      });
    } catch (error) {
      let errorMessage = "Error signing up";
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      set({ error: errorMessage, isLoading: false });
      throw error;
    }
  },

  login: async (phone_no) => {
    set({ isLoading: true, error: null, requiresName: false });
    try {
      const response = await axios.post(`${API_URL}/signuplogin`, { phone_no });
      const { user, token } = response.data;

      if (token) {
        localStorage.setItem("jwt_token", token);
      }

      set({
        isAuthenticated: true,
        user,
        isLoading: false,
        error: null,
        phone_no,
      });
    } catch (error) {
      let errorMessage = "Error logging in";
      if (axios.isAxiosError(error)) {
        if (typeof error.response?.data === "string") {
          errorMessage = "User does not exist";
          set({ requiresName: true });
        } else if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        }
      }
      set({ error: errorMessage, isLoading: false, isAuthenticated: false });
      throw error;
    }
  },

  verifyOtp: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const { phone_no } = get();
      const response = await axios.post(`${API_URL}/verify-otp`, { phone_no, otp_code: code });
      const { user, token } = response.data;

      if (token) {
        localStorage.setItem("jwt_token", token);
      }

      set({
        user,
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

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      localStorage.removeItem("jwt_token");
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
  }
}));

export default useAuthStore;
