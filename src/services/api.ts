import axios from "axios";
import { IPInfo } from "../types/location";
const API_KEY = "at_zIqxudHVp3LSX7BvwffCMIXxoOiti";

export const fetchLocation = async (ipAddress: string): Promise<IPInfo> => {
  try {
    const res = await axios.get<IPInfo>(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};
