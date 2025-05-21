import axios from "axios";

const BASE_URL = import.meta.env.DEV ? "/api" : import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error("Bad Request:", error.response.data);
          break;
        case 401:
          console.error("Unauthorized:", error.response.data);
          break;
        case 404:
          console.error("Not Found:", error.response.data);
          break;
        case 500:
          console.error("Server Error:", error.response.data);
          break;
        default:
          console.error("API Error:", error.response.data);
      }
    } else if (error.request) {
      console.error("No Response:", error.request);
    } else {
      console.error("Request Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
