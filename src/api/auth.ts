import axios from "axios";
import type { SignInData, SignupData } from "../interfaces/auth";

// const API_URL = "http://localhost:8080/api";
const API_URL = import.meta.env.VITE_API_URL as string;

export const signupUser = async (data: SignupData) => {
  const response = await axios.post(`${API_URL}/register`, data);
  console.log(response, "respRegister");
  return response.data;
};

export const loginUser = async (data: SignInData) => {
  const response = await axios.post(`${API_URL}/login`, data);
  console.log(response, "respLogin");
  return response.data;
};
