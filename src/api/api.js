import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    let res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewAlbums = async () => {
  try {
    let res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSongs = async () => {
  try {
    let res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGeners = async () => {
  try {
    let res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
