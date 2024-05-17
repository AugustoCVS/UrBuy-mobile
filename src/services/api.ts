import axios, { AxiosRequestConfig } from "axios";
import { Platform } from "react-native";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BASE_URL = "http://192.168.100.11:8080";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
);

export { api };