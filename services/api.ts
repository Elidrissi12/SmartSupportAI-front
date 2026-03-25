import axios from "axios";

const backendUrl =
  // Ex: EXPO_PUBLIC_BACKEND_URL="http://10.0.2.2:5163"
  // Pour Android emulator: 10.0.2.2. Pour iOS simulator: localhost fonctionne souvent.
  (process.env.EXPO_PUBLIC_BACKEND_URL as string | undefined) ?? "http://localhost:5163";

const api = axios.create({
  baseURL: `${backendUrl.replace(/\/$/, "")}/api`,
  timeout: 5000,
});

let authToken: string | null = null;

api.interceptors.request.use((config) => {
  if (!authToken) return config;
  config.headers = config.headers ?? {};
  (config.headers as any).Authorization = `Bearer ${authToken}`;
  return config;
});

export const setAuthToken = (token: string | null) => {
  authToken = token;
};

export default api;