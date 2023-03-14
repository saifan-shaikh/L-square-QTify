import axios from "axios";
import { BACKEND_URL } from "./api";

// Top Albums
export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/albums/top`);
    const data = await res.data;
    // console.log("Top Album: ", data);
    return data;
  } catch (err) {
    return { status: err.response.status, message: err.message };
  }
};

//New Albums
export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/albums/new`);
    const data = await res.data;
    // console.log("Top Album: ", data);
    return data;
  } catch (err) {
    return { status: err.response.status, message: err.message };
  }
};
