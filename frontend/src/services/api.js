import axios from "axios";

// Prefer explicit env; fallback to localhost:5000 in CRA dev, else relative /api
const inferDevBase = () => {
  try {
    if (typeof window !== "undefined") {
      const isCRADev = window.location.hostname === "localhost" && window.location.port === "3000";
      if (isCRADev) return "http://localhost:5000/api";
    }
  } catch {}
  return "/api";
};

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || inferDevBase(),
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach Authorization if token exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const createInvoice = (payload) => api.post("/invoices", payload);
export const getInvoices = () => api.get("/invoices");
export const getHealth = () => api.get("/health");
export const login = (payload) => api.post("/auth/login", payload);
export const register = (payload) => api.post("/auth/register", payload);

export default api;

