import axios from "axios";
import { ApiRequestProps } from "../interfaces/api.interface";

const apiRequest = async ({ url, method, data, headers }: ApiRequestProps) => {
  try {
    const response = await axios({
      url,
      method,
      data,
      headers,
    });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.response?.data || err.message);
      throw new Error(err.response?.data?.message || "An error occurred");
    } else {
      console.error("Unexpected error:", err);
      throw new Error("An unexpected error occurred");
    }
  }
};

export default apiRequest;
