import axios from "axios";

const baseUrl = "https://wt-v2.onrender.com/album";

export const getTodaysAlbum = () => {
	return axios.get(`${baseUrl}/today`);
};