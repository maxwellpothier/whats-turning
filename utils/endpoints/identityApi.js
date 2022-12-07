import axios from "axios";

const baseUrl = "https://wt-backend.onrender.com/identity";

export const login = (username, password) => {
	const config = {
		username,
		password
	};

	return axios.post(`${baseUrl}/establish`, config);
};