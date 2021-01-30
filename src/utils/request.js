import axios from "axios";

// const service = axios.create({
//   baseURL: "http://localhost:8080",
//   timeout: 5000
// });

const service = axios.create({
  baseURL: "/api",
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
