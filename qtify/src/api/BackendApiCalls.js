import axios from "axios";
import { BACKEND_URL } from "./api";

// Top Albums
export const fetchTopSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/albums/top`);
    const data = await res.data;
    // console.log("Top Album: ", data);
    return data;
  } catch (err) {
    return { status: err.response.status, message: err.message };
  }
};
