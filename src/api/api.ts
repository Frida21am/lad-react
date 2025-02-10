import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Проверка на авторизацию
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Логика, что делать если мы не авторизованы
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  },
);
