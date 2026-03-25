import api, { setAuthToken } from "./api";

export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });
  if (response.data?.token) setAuthToken(response.data.token);
  return response.data;
};

export const registerUser = async (email: string, password: string) => {
  const response = await api.post("/auth/register", {
    email,
    password,
  });
  if (response.data?.token) setAuthToken(response.data.token);
  return response.data;
};