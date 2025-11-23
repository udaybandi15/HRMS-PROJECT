import axios from "axios";

const backendUrl =
  import.meta.env.VITE_API_URL || "https://hrms-project-1-7hk4.onrender.com";

const api = axios.create({
  baseURL: backendUrl,
});

// Automatically add token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
