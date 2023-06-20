import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const AxiosInterceptor = () => {
  const { user } = useContext(AuthContext);

  const interceptor = axios.interceptors.request.use((config) => {
    console.log(user.Token)
    config.headers.Authorization = `Bearer ${user.Token}`;
    console.log(config)
    return config;
  });
};