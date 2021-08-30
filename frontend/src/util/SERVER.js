import axios from "axios";

export const SERVER = axios.create({
  baseURL: "http://3.38.95.48",
  headers: {
    "Content-Type": "application/json",
  }
});