import axios from "axios";

const baseUrl = "https://wt-backend.onrender.com/api/albums";

export const getAllAlbums = () => {
	return axios.get(baseUrl);
};