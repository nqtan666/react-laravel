import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`, // VITE_API_BASE_URL là biến môi trường
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
}
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response) {
      if (response.status === 401) {
        localStorage.removeItem("ACCESS_TOKEN");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
