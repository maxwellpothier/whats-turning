import axios from "axios";

const baseUrl = `${process.env.BASE_API_URL}/album`;

export const getTodaysAlbum = () => {
	return axios.get(`${baseUrl}/today`, {
		headers: {
			"Accept-Encoding": "gzip,deflate,compress",
		},
	});
};

export const getAlbumDescription = albumName => {
	const config = {
		albumName: albumName,
	};

	return axios.post(`${baseUrl}/description`, config);
};
