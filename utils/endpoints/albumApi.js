import axios from "axios";

const baseUrl = `${process.env.BASE_API_URL}/album`;

export const getTodaysAlbum = () => {
	return axios.get(`${baseUrl}/today`);
};