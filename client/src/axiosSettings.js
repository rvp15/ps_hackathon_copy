import axios from "axios";
import { token } from './tokenData';

export const axiosAuth = axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
