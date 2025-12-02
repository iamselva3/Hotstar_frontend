// src/utils/axiosInstance.js
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "", // set your API base
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
}, (err) => Promise.reject(err));

export default instance;
