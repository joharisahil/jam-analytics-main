import { create } from "zustand";
import axios from "axios";

const API_URL = "https://hr-automation-backend-wmeq.onrender.com/api/auth";

axios.defaults.withCredentials = true;

const useAuthStore = create((set) => ({
	user: null,
	isAuthenticated: false,
	error: null,
	isCheckingAuth: true,
	message: null,

	signup: async ({ name, phone_no }) => {
		set({ error: null });
		try {
			const response = await axios.post(`${API_URL}/signuplogin`, { name, phone_no });
			set({ user: response.data.user, isAuthenticated: true });
		} catch (error) {
			set({ error: error.response?.data?.message || "Error signing up" });
			throw error;
		}
	},

	login: async (phone_no) => {
		set({ error: null });
		try {
			const response = await axios.post(`${API_URL}/signuplogin`, { phone_no });
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
			});
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in" });
			throw error;
		}
	},

	// logout: async () => {
	// 	set({ isLoading: true, error: null });
	// 	try {
	// 		await axios.post(`${API_URL}/logout`);
	// 		set({ user: null, isAuthenticated: false, error: null, isLoading: false });
	// 	} catch (error) {
	// 		set({ error: "Error logging out", isLoading: false });
	// 		throw error;
	// 	}
	// },

	verifyEmail: async (code) => {
		set({ error: null });
		try {
			const response = await axios.post(`${API_URL}/verify-email`, { code });
			set({ user: response.data.user, isAuthenticated: true });
			return response.data;
		} catch (error) {
			set({ error: error.response.data.message || "Error verifying email" });
			throw error;
		}
	},

	checkAuth: async () => {
		set({ isCheckingAuth: true, error: null });
		try {
			const response = await axios.get(`${API_URL}/check-auth`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error) {
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},
})); // This closing brace was missing!

export default useAuthStore;