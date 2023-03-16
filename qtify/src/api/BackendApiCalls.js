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
    // console.log("New Albums: ", data);
    return data;
  } catch (err) {
    return { status: err.response.status, message: err.message };
  }
};

// Get Genres
export const fetchSongGenres = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/genres`);
    const data = await res.data.data;
    // console.log("Top Genres: ", data);
    return data;
  } catch (err) {
    return { status: err.response.status, message: err.message };
  }
};

// Get Songs
export const fetchSongs = async (genre = "All") => {
  try {
    const res = await axios.get(`${BACKEND_URL}/songs`);
    const data = await res.data;
    // console.log("Songs: ", data);
    if (genre === "All") {
      return data;
    } else {
      const genreData = data.filter((ele) => ele.genre.label === genre);
      return genreData;
    }
  } catch (err) {
    return { status: err.response.status, message: err.message };
  }
};

//Get Song by genre
export const fetchSongsByGenre = async (genre) => {
  try {
    const res = await axios.get(`${BACKEND_URL}/songs`);
    const data = await res.data;
    // console.log("Songs: ", data);
    return data;
  } catch (err) {
    return { status: err.response.status, message: err.message };
  }
};
