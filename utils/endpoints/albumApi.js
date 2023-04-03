import axios from "axios";

const baseUrl = `${process.env.BASE_API_URL}/album`;

export const getTodaysAlbum = () => {
	return axios.get(`${baseUrl}/today`, {
		headers: {
			"Accept-Encoding": "gzip,deflate,compress",
		},
	});
};

export const getAlbumDescription = (albumName, artistName) => {
	console.log("IN THE API CALL");
	const config = {
		albumName,
		artistName,
	};

	return axios.post(`${baseUrl}/description`, config, {
		headers: {
			"Accept-Encoding": "gzip,deflate,compress",
		},
	});
};
