import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const AxiosInterceptor = () => {
  const { user } = useContext(AuthContext);

  const interceptor = axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user.Token}`;
    return config;
  });
};